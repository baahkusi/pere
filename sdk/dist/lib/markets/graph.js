"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMarketsHistoricalData = exports.fetchMarkets24hrData = exports.fetchOpenOrders = exports.fetchTradeHistory = exports.fetchSubPositions = exports.fetchHistoricalPositions = exports.fetchActivePositionHistory = exports.fetchActivePositionsPnl = void 0;
const viem_1 = require("viem");
const constants_1 = require("../../constants");
const markets_1 = require("../../graphQueries/markets");
const graphql_1 = require("../../types/gql/graphql");
const utils_1 = require("../../utils");
const accumulatorUtils_1 = require("../../utils/accumulatorUtils");
const big6Utils_1 = require("../../utils/big6Utils");
const graphUtils_1 = require("../../utils/graphUtils");
const positionUtils_1 = require("../../utils/positionUtils");
const chain_1 = require("./chain");
/**
 * Fetches position PnL for a given market and Address
 * @param chainId {@link SupportedChainId}
 * @param markets List of {@link SupportedMarket}
 * @param marketSnapshots [Optional] Snapshots for markets {@link MarketSnapshots}
 * @param address Wallet Address
 * @param markToMarket [true] Whether to include latest market accumulations in the PNL calculations
 * @param publicClient Viem Public Client
 * @param oracleClients {@link OracleClients}
 * @param graphClient GraphQLClient
 * @returns User's PnL for an active position.
 */
async function fetchActivePositionsPnl({ markets, marketOracles, marketSnapshots, chainId, address, markToMarket = true, includeFeesInRealtimePnl = true, oracleClients, publicClient, graphClient, minBlock = 0, }) {
    const missingMarketSnapshots = markets.some((m) => !marketSnapshots?.market[m] || !marketSnapshots?.user?.[m]);
    if (missingMarketSnapshots) {
        marketSnapshots = await (0, chain_1.fetchMarketSnapshots)({
            chainId,
            address,
            oracleClients,
            publicClient,
            markets,
            marketOracles,
        });
    }
    const marketSettlementFees = await (0, chain_1.fetchMarketSettlementFees)({
        chainId,
        markets,
        marketOracles,
        publicClient,
    });
    const marketsWithAddresses = (0, constants_1.chainMarketsWithAddress)(chainId, markets);
    const marketLatestVersions = marketsWithAddresses.map(({ market }) => (marketSnapshots?.user?.[market]?.pre.position.timestamp ?? 0n).toString());
    const { marketAccounts } = await graphClient.request(markets_1.QueryLatestMarketAccountPosition, {
        account: address,
        markets: marketsWithAddresses.map(({ marketAddress }) => marketAddress),
        latestVersions: marketLatestVersions,
        minBlock,
    });
    const positionPnls = marketsWithAddresses.map(({ market, marketAddress }) => {
        const marketSnapshot = marketSnapshots?.market[market];
        const userMarketSnapshot = marketSnapshots?.user?.[market];
        if (!marketSnapshot || !userMarketSnapshot)
            return null;
        const [side, magnitude_] = [
            userMarketSnapshot.nextSide === 'none' ? userMarketSnapshot.side : userMarketSnapshot.nextSide,
            userMarketSnapshot.nextMagnitude,
        ];
        const pendingDelta = (0, positionUtils_1.orderDelta)({ ...userMarketSnapshot.pendingOrder });
        // Estimate the Trade Impact given market pre position
        const pendingTradeFeeData = (0, positionUtils_1.calcTradeFee)({
            positionDelta: pendingDelta,
            marketSnapshot,
            side: side,
            usePreGlobalPosition: pendingDelta !== 0n,
        });
        const pendingTradeImpactAsOffset = -1n * pendingTradeFeeData.tradeImpact.total;
        const pendingOrderCollateral = userMarketSnapshot.pendingOrder.collateral;
        const pendingOrderSettlementFee = marketSettlementFees[market].totalCost;
        const pendingTradeFee = pendingTradeFeeData.tradeFee.total;
        const pendingAdditiveFee = 0n;
        const totalPendingFees = pendingTradeFee + pendingOrderSettlementFee + pendingAdditiveFee;
        const graphMarketAccount = marketAccounts.find((ma) => (0, viem_1.getAddress)(ma.market.id) === marketAddress);
        const graphPosition = graphMarketAccount?.positions.at(0);
        // Pull position data from the graph if available
        if (graphMarketAccount &&
            graphPosition &&
            // If the snapshot side is not none, ensure we're only returning a non-closed graph position
            (side !== 'none' ? !graphPosition.closeOrder.length : true)) {
            const graphHasProcessedLatestOrder = BigInt(graphPosition.marketAccount.latestVersion) >= userMarketSnapshot.latestOrder.timestamp;
            const latestTradeFee = graphHasProcessedLatestOrder
                ? 0n
                : (0, positionUtils_1.calcTradeFee)({
                    positionDelta: (0, positionUtils_1.orderDelta)({ ...userMarketSnapshot.latestOrder }),
                    marketSnapshot,
                    side,
                    usePreGlobalPosition: false,
                }).tradeFee.total;
            const currentAccumulator = graphMarketAccount.accumulators.current.at(0);
            const startAccumulator = graphMarketAccount.accumulators.start.find((sa) => BigInt(sa.fromVersion) === (marketSnapshots?.user?.[market]?.pre.position.timestamp ?? 0n));
            // Accumulate the portion of pnl from the latest account settlement to the latest global settlement
            const pendingMarkToMarketAccumulations = accumulatorUtils_1.AccumulatorTypes.reduce((acc, { type, unrealizedKey }) => {
                if (!acc[type])
                    acc[type] = 0n;
                if (side === 'none')
                    return acc;
                if (side !== 'maker' && type.startsWith('maker'))
                    return acc;
                // Some accumulations don't have global counterparts
                const unrealizedKeyForSide = unrealizedKey[side];
                // Pnl from latest account settlement to latest global settlement
                if (unrealizedKeyForSide && currentAccumulator && startAccumulator) {
                    const latestToGlobalRealized = big6Utils_1.Big6Math.mul(BigInt(currentAccumulator[unrealizedKeyForSide]) - BigInt(startAccumulator[unrealizedKeyForSide]), magnitude_);
                    acc[type] += latestToGlobalRealized;
                }
                return acc;
            }, {});
            // Process the graph position
            const processedGraphPosition = processGraphPosition(market, graphPosition, markToMarket ? pendingMarkToMarketAccumulations : undefined, {
                currentId: userMarketSnapshot.local.currentId,
                latestPrice: userMarketSnapshot.oracleVersions[0].price,
                collateral: pendingOrderCollateral,
                size: pendingDelta,
                offset: pendingTradeImpactAsOffset,
                settlementFee: pendingOrderSettlementFee,
                tradeFee: pendingTradeFee,
                additiveFee: pendingAdditiveFee,
            });
            // Add realtime data
            const netDeposits = processedGraphPosition.netDeposits;
            const currentCollateral = userMarketSnapshot.local.collateral + // Snapshot collateral
                pendingTradeImpactAsOffset - // Pending offset from trade
                totalPendingFees; // Pending fees from trade
            let realtimePnl = currentCollateral - (processedGraphPosition.startCollateral + netDeposits);
            // If fees are not included in PnL, re-add them back to the collateral as a "rebate"
            if (!includeFeesInRealtimePnl)
                realtimePnl += processedGraphPosition.totalFees + totalPendingFees + latestTradeFee;
            const percentDenominator = processedGraphPosition.startCollateral + (netDeposits > 0n ? netDeposits : 0n);
            const realtimePercent = percentDenominator !== 0n ? big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(realtimePnl, percentDenominator)) : 0n;
            return {
                ...processedGraphPosition,
                realtime: realtimePnl,
                realtimePercent,
                realtimePercentDenominator: percentDenominator,
                pendingMarkToMarketAccumulations: markToMarket ? null : pendingMarkToMarketAccumulations,
            };
        }
        const averageEntryPrice = (0, positionUtils_1.calcExecutionPriceWithImpact)({
            notional: (0, positionUtils_1.calcNotional)(userMarketSnapshot.oracleVersions[0].price, pendingDelta),
            offset: pendingTradeImpactAsOffset,
            size: pendingDelta,
            side,
        });
        const startCollateral = userMarketSnapshot.pre.local.collateral;
        let realtimePnl = userMarketSnapshot.local.collateral - (startCollateral + pendingOrderCollateral);
        // If fees are not included in PnL, re-add them back to the collateral as a "rebate"
        if (!includeFeesInRealtimePnl)
            realtimePnl += totalPendingFees;
        const percentDenominator = startCollateral + (pendingOrderCollateral > 0n ? pendingOrderCollateral : 0n);
        const realtimePercent = percentDenominator !== 0n ? big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(realtimePnl, percentDenominator)) : 0n;
        return {
            market,
            marketAddress,
            side,
            startVersion: marketSnapshot.latestOracleVersion.timestamp,
            endVersion: null,
            trades: 1n,
            startSize: magnitude_,
            startPrice: userMarketSnapshot.oracleVersions[0].price,
            positionId: userMarketSnapshot.local.currentId,
            startCollateral,
            startTransactionHash: null,
            startReferrer: null,
            endReferrer: null,
            totalPnl: pendingTradeImpactAsOffset,
            totalPnlPercent: percentDenominator !== 0n ? big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(pendingTradeImpactAsOffset, percentDenominator)) : 0n,
            totalFees: totalPendingFees,
            totalNotional: (0, positionUtils_1.calcNotional)(userMarketSnapshot.oracleVersions[0].price, pendingDelta),
            pnlAccumulations: {
                offset: pendingTradeImpactAsOffset,
                pnl: 0n,
                funding: 0n,
                interest: 0n,
                makerPositionFee: 0n,
                makerExposure: 0n,
                priceOverride: 0n,
            },
            feeAccumulations: {
                settlement: pendingOrderSettlementFee,
                trade: pendingTradeFee,
                additive: pendingAdditiveFee,
                liquidation: 0n,
                triggerOrder: 0n,
            },
            averageEntryPrice,
            averageExitPrice: 0n,
            netDeposits: pendingOrderCollateral,
            liquidation: false,
            liquidationFee: 0n,
            netPnl: realtimePnl,
            netPnlPercent: realtimePercent,
            netPnlPercentDenominator: percentDenominator,
            realtime: realtimePnl,
            realtimePercent: realtimePercent,
            realtimePercentDenominator: percentDenominator,
            pendingMarkToMarketAccumulations: markToMarket ? null : accumulatorUtils_1.DefaultRealizedAccumulations,
        };
    });
    return positionPnls.reduce((acc, v) => {
        if (v)
            acc[v.market] = v;
        return acc;
    }, {});
}
exports.fetchActivePositionsPnl = fetchActivePositionsPnl;
/**
 * Fetches active position history for a given address
 * @param market {@link SupportedMarket}
 * @param address Wallet Address
 * @param positionId position ID
 * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
 * @param [skip=0] Offset for pagination
 * @param chainId {@link SupportedChainId}
 * @param graphClient GraphQLClient
 * @returns User's position history for an active position.
 */
async function fetchActivePositionHistory({ market, address, positionId, first = graphUtils_1.GraphDefaultPageSize, skip = 0, chainId, graphClient, }) {
    return fetchSubPositions({
        chainId,
        address,
        market,
        positionId,
        graphClient,
        first,
        skip,
    });
}
exports.fetchActivePositionHistory = fetchActivePositionHistory;
/**
 * Fetches the position history for a given address
 * @param address Wallet Address
 * @param markets List of {@link SupportedMarket} to fetch position history for
 * @param chainId {@link SupportedChainId}
 * @param fromTs bigint - Start timestamp in seconds
 * @param toTs bigint - Start timestamp in seconds
 * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
 * @param [skip=0] Offset for pagination number
 * @param maker boolean - Whether to filter for maker or taker positions
 * @param graphClient GraphQLClient
 * @returns User's position history.
 */
async function fetchHistoricalPositions({ markets, address, graphClient, chainId, fromTs, toTs, first = graphUtils_1.GraphDefaultPageSize, skip = 0, maker, minBlock = 0, }) {
    const marketsWithAddresses = (0, constants_1.chainMarketsWithAddress)(chainId, markets);
    const query = maker ? markets_1.QueryMarketAccountMakerPositions : markets_1.QueryMarketAccountTakerPositions;
    const { positions } = await graphClient.request(query, {
        account: address,
        markets: marketsWithAddresses.map((m) => m.marketAddress),
        fromTs: (fromTs ?? 0n).toString(),
        toTs: (toTs ?? (0, utils_1.nowSeconds)()).toString(),
        first,
        skip,
        minBlock,
    });
    return positions.map((graphPosition) => processGraphPosition((0, constants_1.addressToMarket)(chainId, graphPosition.marketAccount.market.id), graphPosition));
}
exports.fetchHistoricalPositions = fetchHistoricalPositions;
function processGraphPosition(market, graphPosition, latestToGlobalRealized, pendingPositionData) {
    const startCollateral = BigInt(graphPosition.startCollateral);
    const netDeposits = BigInt(graphPosition.netDeposits);
    const percentDenominator = startCollateral + (netDeposits > 0n ? netDeposits : 0n);
    const side = (0, positionUtils_1.side)(graphPosition.startMaker, graphPosition.startLong, graphPosition.startShort);
    const openSize = BigInt(graphPosition.openSize);
    const closeSize = BigInt(graphPosition.closeSize);
    const totalNotional = BigInt(graphPosition.openNotional) + BigInt(graphPosition.closeNotional);
    const averageEntryPrice = (0, positionUtils_1.calcExecutionPriceWithImpact)({
        notional: BigInt(graphPosition.openNotional),
        offset: BigInt(graphPosition.openOffset),
        size: openSize,
        side,
    });
    const averageExitPrice = (0, positionUtils_1.calcExecutionPriceWithImpact)({
        notional: BigInt(graphPosition.closeNotional),
        offset: BigInt(graphPosition.closeOffset),
        size: closeSize * -1n,
        side,
    });
    let totalPnl = (0, big6Utils_1.BigOrZero)(graphPosition.accumulation.collateral_accumulation);
    let totalFees = (0, big6Utils_1.BigOrZero)(graphPosition.accumulation.fee_accumulation);
    let netPnl = totalPnl - totalFees;
    const pnlAccumulations = (0, accumulatorUtils_1.accumulateRealized)([graphPosition.accumulation]);
    const feeAccumulations = (0, accumulatorUtils_1.accumulateRealizedFees)([graphPosition.accumulation]);
    // If there is a realized pnl from the latest account settlement to the latest global settlement, apply it
    if (latestToGlobalRealized) {
        accumulatorUtils_1.AccumulatorTypes.forEach(({ type }) => {
            pnlAccumulations[type] += latestToGlobalRealized[type];
            totalPnl += latestToGlobalRealized[type];
            netPnl += latestToGlobalRealized[type];
        });
    }
    // If this is a maker position, move offset to trade fee
    if (side === constants_1.PositionSide.maker) {
        const offsetAsFee = pnlAccumulations.offset * -1n; // Convert offset to a fee
        feeAccumulations.trade += offsetAsFee; // add offset fee to trade fee
        totalFees += offsetAsFee; // add offset fee to total fee
        pnlAccumulations.offset = 0n; // remove offset from pnl offset
        totalPnl -= pnlAccumulations.offset; // remove offset from total pnl
    }
    const openOrder = graphPosition.openOrder.at(0);
    const closeOrder = graphPosition.closeOrder.at(0);
    const returnValue = {
        // Position Metadata
        market,
        marketAddress: (0, viem_1.getAddress)(graphPosition.marketAccount.market.id),
        side,
        positionId: BigInt(graphPosition.positionId),
        startVersion: BigInt(graphPosition.startVersion),
        endVersion: closeOrder ? BigInt(closeOrder.oracleVersion.timestamp) : null,
        trades: BigInt(graphPosition.trades),
        // Position Starting Data
        startSize: (0, positionUtils_1.magnitude)(graphPosition.startMaker, graphPosition.startLong, graphPosition.startShort),
        startPrice: BigInt(openOrder?.executionPrice ?? 0n),
        startCollateral: BigInt(graphPosition.startCollateral),
        netDeposits,
        startTransactionHash: openOrder?.transactionHashes.at(0) ?? null,
        startReferrer: openOrder?.referrer ?? null,
        endReferrer: closeOrder?.referrer ?? null,
        // PNL
        netPnl,
        netPnlPercent: percentDenominator !== 0n ? big6Utils_1.Big6Math.div(netPnl, percentDenominator) : 0n,
        netPnlPercentDenominator: percentDenominator,
        // Accumulation Breakdowns
        totalPnl,
        totalPnlPercent: percentDenominator !== 0n ? big6Utils_1.Big6Math.div(totalPnl, percentDenominator) : 0n,
        totalFees,
        pnlAccumulations,
        feeAccumulations,
        // Derived Data
        averageEntryPrice,
        averageExitPrice,
        liquidation: Boolean(closeOrder?.liquidation),
        liquidationFee: (0, big6Utils_1.BigOrZero)(feeAccumulations.liquidation),
        totalNotional,
    };
    // If pending position data is available and newer than graph data, apply it
    if (pendingPositionData && pendingPositionData.currentId > BigInt(graphPosition.marketAccount.currentOrderId)) {
        returnValue.netDeposits += pendingPositionData.collateral;
        returnValue.feeAccumulations.settlement += pendingPositionData.settlementFee;
        returnValue.feeAccumulations.trade += pendingPositionData.tradeFee;
        returnValue.feeAccumulations.additive += pendingPositionData.additiveFee;
        let totalFee = pendingPositionData.settlementFee + pendingPositionData.tradeFee + pendingPositionData.additiveFee;
        returnValue.totalFees += totalFee;
        if (side === constants_1.PositionSide.maker) {
            returnValue.feeAccumulations.trade += pendingPositionData.offset;
            totalFee += pendingPositionData.offset;
        }
        else {
            returnValue.pnlAccumulations.offset += pendingPositionData.offset;
            returnValue.totalPnl += pendingPositionData.offset;
            returnValue.netPnl += pendingPositionData.offset;
        }
        returnValue.netPnl -= totalFee;
        // Recalculate the average entry and exit price
        if (pendingPositionData.size > 0n) {
            returnValue.averageEntryPrice = (0, positionUtils_1.calcExecutionPriceWithImpact)({
                notional: BigInt(graphPosition.openNotional) + (0, positionUtils_1.calcNotional)(pendingPositionData.latestPrice, pendingPositionData.size),
                offset: BigInt(graphPosition.openOffset) + pendingPositionData.offset,
                size: openSize + pendingPositionData.size,
                side,
            });
        }
        else if (pendingPositionData.size < 0n) {
            returnValue.averageExitPrice = (0, positionUtils_1.calcExecutionPriceWithImpact)({
                notional: BigInt(graphPosition.closeNotional) + (0, positionUtils_1.calcNotional)(pendingPositionData.latestPrice, pendingPositionData.size),
                offset: BigInt(graphPosition.closeOffset) + pendingPositionData.offset,
                size: closeSize * -1n + pendingPositionData.size,
                side,
            });
        }
        // Add pending position data to total notional
        returnValue.totalNotional += (0, positionUtils_1.calcNotional)(pendingPositionData.latestPrice, pendingPositionData.size);
        if (pendingPositionData.size !== 0n)
            returnValue.trades += 1n;
    }
    return returnValue;
}
/**
 * Fetches the sub positions activity for a given position
 * @param address Wallet Address
 * @param market {@link SupportedMarket}
 * @param positionId BigInt
 * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
 * @param [skip=0] Offset for pagination
 * @param graphClient GraphQLClient
 * @returns User's sub positions.
 */
async function fetchSubPositions({ address, market, positionId, first = graphUtils_1.GraphDefaultPageSize, skip = 0, chainId, graphClient, minBlock = 0, }) {
    const marketAddress = constants_1.ChainMarkets[chainId][market];
    if (!marketAddress)
        return [];
    const { orders } = await graphClient.request(markets_1.QueryMarketAccountPositionOrders, {
        account: address,
        market: marketAddress,
        positionId: positionId.toString(),
        first,
        skip,
        minBlock,
    });
    const processedOrders = orders.map((order) => processOrder(market, order));
    return processedOrders;
}
exports.fetchSubPositions = fetchSubPositions;
/**
 * Fetches the trade history for a given address
 * @param address Wallet Address
 * @param markets {Optional} List of {@link SupportedMarket} to fetch trade history for
 * @param fromTs start timestamp in seconds (defaults to 7 days before toTs)
 * @param toTs end timestamp in seconds (defaults to now)
 * @param graphClient GraphQLClient
 * @returns User's trade history.
 */
async function fetchTradeHistory({ chainId, graphClient, address, markets, fromTs, toTs, minBlock = 0, }) {
    const defaultTimeRange = utils_1.Day * 7n;
    const now = BigInt((0, utils_1.nowSeconds)());
    if (!toTs)
        toTs = now;
    if (!fromTs)
        fromTs = toTs - defaultTimeRange;
    const { orders } = await (0, graphUtils_1.queryAll)(async (pageNumber) => markets && markets.length
        ? graphClient.request(markets_1.QueryAccountMarketOrders, {
            account: address,
            markets: (0, constants_1.chainMarketsWithAddress)(chainId, markets).map(({ marketAddress }) => marketAddress),
            first: graphUtils_1.GraphDefaultPageSize,
            skip: pageNumber * graphUtils_1.GraphDefaultPageSize,
            fromTs: fromTs.toString(),
            toTs: toTs.toString(),
            minBlock,
        })
        : graphClient.request(markets_1.QueryAccountOrders, {
            account: address,
            first: graphUtils_1.GraphDefaultPageSize,
            skip: pageNumber * graphUtils_1.GraphDefaultPageSize,
            fromTs: fromTs.toString(),
            toTs: toTs.toString(),
            minBlock,
        }));
    const processedOrders = orders.map((order) => processOrder((0, constants_1.addressToMarket)(chainId, order.market.id), order));
    return processedOrders;
}
exports.fetchTradeHistory = fetchTradeHistory;
function processOrder(market, order) {
    const side = (0, positionUtils_1.side)(order.position.startMaker, order.position.startLong, order.position.startShort);
    const delta = BigInt(order.net);
    const collateral = BigInt(order.collateral);
    const priceWithImpact = delta !== 0n
        ? (0, positionUtils_1.calcExecutionPriceWithImpact)({
            notional: (0, positionUtils_1.calcNotional)(BigInt(order.guaranteePrice ?? order.executionPrice), delta),
            offset: BigInt(order.accumulation.collateral_subAccumulation_offset),
            size: delta,
            side,
        })
        : BigInt(order.executionPrice);
    const percentDenominator = BigInt(order.startCollateral) + (collateral > 0n ? collateral : 0n);
    let totalPnl = (0, big6Utils_1.BigOrZero)(order.accumulation.collateral_accumulation);
    let totalFees = (0, big6Utils_1.BigOrZero)(order.accumulation.fee_accumulation);
    const pnlAccumulations = (0, accumulatorUtils_1.accumulateRealized)([order.accumulation]);
    const feeAccumulations = (0, accumulatorUtils_1.accumulateRealizedFees)([order.accumulation]);
    // If this is a maker position, move offset to trade fee
    if (side === constants_1.PositionSide.maker) {
        const offsetAsFee = pnlAccumulations.offset * -1n; // Convert offset to a fee
        feeAccumulations.trade += offsetAsFee; // add offset fee to trade fee
        totalFees += offsetAsFee; // add offset fee to total fee
        pnlAccumulations.offset = 0n; // remove offset from pnl offset
        totalPnl -= pnlAccumulations.offset; // remove offset from total pnl
    }
    const netPnl = BigInt(order.accumulation.collateral_accumulation) - BigInt(order.accumulation.fee_accumulation);
    const returnValue = {
        // Position Metadata
        market,
        side,
        orderId: BigInt(order.orderId),
        version: BigInt(order.oracleVersion.timestamp),
        valid: order.oracleVersion.valid,
        delta,
        magnitude: (0, positionUtils_1.magnitude)(order.newMaker, order.newLong, order.newShort),
        executionPrice: BigInt(order.executionPrice),
        executionPriceWithOffset: priceWithImpact,
        startCollateral: BigInt(order.startCollateral),
        netDeposits: collateral,
        depositTotal: BigInt(order.depositTotal),
        withdrawalTotal: BigInt(order.withdrawalTotal),
        // PNL
        netPnl,
        netPnlPercent: percentDenominator !== 0n ? big6Utils_1.Big6Math.div(netPnl, percentDenominator) : 0n,
        // Guarantee Price
        guaranteePrice: order.guaranteePrice ? BigInt(order.guaranteePrice) : null,
        // Accumulation Breakdowns
        totalPnl,
        totalFees,
        pnlAccumulations,
        feeAccumulations,
        liquidation: Boolean(order.liquidation),
        liquidationFee: (0, big6Utils_1.BigOrZero)(order.accumulation.fee_subAccumulation_liquidation),
        transactionHashes: order.transactionHashes,
    };
    return returnValue;
}
/**
 * Fetches the open orders for a given address
 * @param address Wallet Address
 * @param markets List of {@link SupportedMarket} to fetch open orders for
 * @param chainId {@link SupportedChainId}
 * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
 * @param [skip=0] Offset for pagination number
 * @param isMaker boolean - Filter for maker orders
 * @param graphClient GraphQLClient
 * @returns User's open orders.
 */
async function fetchOpenOrders({ chainId, graphClient, markets, address, first = graphUtils_1.GraphDefaultPageSize, skip = 0, isMaker, minBlock = 0, }) {
    const marketsWithAddresses = (0, constants_1.chainMarketsWithAddress)(chainId, markets);
    const { multiInvokerTriggerOrders: triggerOrders } = await graphClient.request(markets_1.QueryOpenTriggerOrders, {
        account: address,
        markets: marketsWithAddresses.map(({ marketAddress }) => marketAddress),
        first,
        skip,
        side: isMaker
            ? [0, 3, 4] // 0 = multiInvoker maker, 3 = multiInvoker collateral withdrawal, 4 = manager maker
            : [1, 2, 3, 5, 6], // 1 = multiInvoker long, 2 = multiInvoker short, 3 = multiInvoker collateral withdrawal, 5 = manager long, 6 = manager short
        minBlock,
    });
    return triggerOrders.map((triggerOrder) => ({
        ...triggerOrder,
        market: (0, constants_1.addressToMarket)(chainId, triggerOrder.market),
        marketAddress: (0, viem_1.getAddress)(triggerOrder.market),
        source: (0, viem_1.getAddress)(triggerOrder.source),
        account: (0, viem_1.getAddress)(triggerOrder.account),
    }));
}
exports.fetchOpenOrders = fetchOpenOrders;
/**
 * Fetches the 24hr volume data for a list of market
 * @param markets List of {@link SupportedMarket}
 * @param chainId {@link SupportedChainId}
 * @param graphClient GraphQLClient
 * @returns Markets 24hr volume data.
 */
async function fetchMarkets24hrData({ chainId, graphClient, markets, }) {
    const { from, to } = (0, utils_1.last24hrBounds)();
    return fetchMarketsHistoricalData({
        chainId,
        graphClient,
        markets,
        fromTs: BigInt(from),
        toTs: BigInt(to),
        bucket: graphql_1.Bucket.Hourly,
    });
}
exports.fetchMarkets24hrData = fetchMarkets24hrData;
/**
 * Fetches Historical data for markets
 * @param markets List of {@link SupportedMarket}
 * @param chainId {@link SupportedChainId}
 * @param graphClient GraphQLClient
 * @param fromTs bigint - Start timestamp in seconds
 * @param toTs bigint - Start timestamp in seconds
 * @param bucket {@link Bucket}
 * @returns Market 7d data.
 */
async function fetchMarketsHistoricalData({ chainId, graphClient, markets, fromTs, toTs, bucket = graphql_1.Bucket.Daily, minBlock = 0, }) {
    const marketAddresses = (0, constants_1.chainMarketsWithAddress)(chainId, markets);
    const { marketData } = await graphClient.request(markets_1.QueryMarketAccumulationData, {
        markets: marketAddresses.map((m) => m.marketAddress),
        fromTs: fromTs.toString(),
        toTs: toTs.toString(),
        bucket,
        minBlock,
    });
    const parsedData = marketAddresses.map(({ market, marketAddress }) => {
        const data = marketData.find((m) => (0, viem_1.getAddress)(m.id) === marketAddress);
        const fromAccumulator = data?.fromAccumulator.at(0);
        const toAccumulator = data?.toAccumulator.at(0);
        const scaleFactorDenominator = big6Utils_1.Big6Math.fromDecimals(BigInt(toAccumulator?.toVersion ?? toTs) - BigInt(fromAccumulator?.fromVersion ?? fromTs), 0);
        const accumulatorScaleFactor = scaleFactorDenominator !== 0n ? big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.fromDecimals(toTs - fromTs, 0), scaleFactorDenominator) : 0n;
        const accumulations = data?.accumulations ?? [];
        const takerVolumes = accumulations.map((vol) => ({
            timestamp: vol.timestamp,
            longNotional: BigInt(vol.longNotional),
            shortNotional: BigInt(vol.shortNotional),
        }));
        const fundingRates = accumulations.map((rate) => ({
            timestamp: rate.timestamp,
            makerAPR: BigInt(rate.fundingRateMaker),
            longAPR: BigInt(rate.fundingRateLong),
            shortAPR: BigInt(rate.fundingRateShort),
        }));
        const interestRates = accumulations.map((rate) => ({
            timestamp: rate.timestamp,
            makerAPR: BigInt(rate.interestRateMaker),
            longAPR: BigInt(rate.interestRateLong),
            shortAPR: BigInt(rate.interestRateShort),
        }));
        return {
            market,
            address: marketAddress,
            takerVolumes,
            fundingRates,
            interestRates,
            // Accumulations are the delta between to and from, scaled to fill the window
            makerAccumulation: {
                funding: big6Utils_1.Big6Math.mul((0, big6Utils_1.BigOrZero)(toAccumulator?.fundingMaker) - (0, big6Utils_1.BigOrZero)(fromAccumulator?.fundingMaker), accumulatorScaleFactor),
                interest: big6Utils_1.Big6Math.mul((0, big6Utils_1.BigOrZero)(toAccumulator?.interestMaker) - (0, big6Utils_1.BigOrZero)(fromAccumulator?.interestMaker), accumulatorScaleFactor),
                positionFee: big6Utils_1.Big6Math.mul((0, big6Utils_1.BigOrZero)(toAccumulator?.positionFeeMaker) - (0, big6Utils_1.BigOrZero)(fromAccumulator?.positionFeeMaker), accumulatorScaleFactor),
                exposure: big6Utils_1.Big6Math.mul((0, big6Utils_1.BigOrZero)(toAccumulator?.exposureMaker) - (0, big6Utils_1.BigOrZero)(fromAccumulator?.exposureMaker), accumulatorScaleFactor),
            },
        };
    });
    return parsedData.reduce((acc, market) => {
        acc[market.market] = market;
        return acc;
    }, {});
}
exports.fetchMarketsHistoricalData = fetchMarketsHistoricalData;
