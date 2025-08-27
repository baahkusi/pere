"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUpdateIntentTx = exports.buildClaimFeeTx = exports.buildCancelOrderTx = exports.buildTakeProfitTx = exports.buildStopLossTx = exports.buildLimitOrderTx = exports.buildUpdateMarketTx = void 0;
const viem_1 = require("viem");
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const addressUtils_1 = require("../../utils/addressUtils");
const multiinvoker_1 = require("../../utils/multiinvoker");
const contracts_1 = require("../contracts");
const oracle_1 = require("../oracle");
const chain_1 = require("./chain");
async function buildUpdateMarketTx({ chainId, publicClient, marketAddress, marketSnapshots, marketOracles, oracleClients, address, side, positionAbs, collateralDelta, interfaceFee, referralFee, onCommitmentError, }) {
    const market = (0, constants_1.addressToMarket)(chainId, marketAddress);
    if (!marketOracles) {
        marketOracles = await (0, chain_1.fetchMarketOracles)(chainId, publicClient, [market]);
    }
    if (!marketSnapshots) {
        marketSnapshots = await (0, chain_1.fetchMarketSnapshots)({
            publicClient,
            chainId,
            address,
            marketOracles,
            oracleClients,
            markets: [market],
        });
    }
    const oracleInfo = Object.values(marketOracles).find((o) => o.marketAddress === marketAddress);
    if (!oracleInfo)
        return;
    const updateAction = (0, multiinvoker_1.buildUpdateMarket)({
        market: marketAddress,
        maker: side === constants_1.PositionSide.maker ? positionAbs : undefined, // Absolute position size
        long: side === constants_1.PositionSide.long ? positionAbs : undefined,
        short: side === constants_1.PositionSide.short ? positionAbs : undefined,
        collateral: collateralDelta ?? 0n, // Delta collateral
        wrap: true,
        interfaceFee: referralFee,
        interfaceFee2: interfaceFee,
    });
    const actions = [updateAction];
    // Default to price being stale if we don't have any market snapshots
    let isPriceStale = true;
    const marketSnapshot = market && marketSnapshots?.market[market];
    if (marketSnapshot && marketSnapshots) {
        const { parameter: { maxPendingGlobal, maxPendingLocal }, riskParameter: { staleAfter }, pendingPositions, } = marketSnapshot;
        const lastUpdated = await (0, contracts_1.getOracleContract)(oracleInfo.oracleAddress, publicClient).read.latest();
        isPriceStale = BigInt((0, utils_1.nowSeconds)()) - lastUpdated.timestamp > staleAfter / 2n;
        // If there is a backlog of pending positions, we need to commit the price
        isPriceStale = isPriceStale || BigInt(pendingPositions.length) >= maxPendingGlobal;
        // If there is a backlog of pending positions for this user, we need to commit the price
        isPriceStale =
            isPriceStale || (0, utils_1.BigOrZero)(marketSnapshots.user?.[market]?.pendingPositions?.length) >= maxPendingLocal;
    }
    // Only add the price commit if the price is stale
    if (isPriceStale) {
        const [{ version, ids, value, updateData }] = await (0, oracle_1.oracleCommitmentsLatest)({
            chainId,
            oracleClients: oracleClients,
            publicClient,
            requests: (0, oracle_1.marketOraclesToUpdateDataRequest)([oracleInfo]),
            onError: onCommitmentError,
        });
        const commitAction = (0, multiinvoker_1.buildCommitPrice)({
            keeperFactory: oracleInfo.subOracleFactoryAddress,
            version,
            value,
            ids,
            vaa: updateData,
            revertOnFailure: false,
        });
        actions.unshift(commitAction);
    }
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 1n,
    });
    return txData;
}
exports.buildUpdateMarketTx = buildUpdateMarketTx;
async function buildLimitOrderTx({ address, chainId, marketAddress, limitPrice, side, delta = 0n, triggerComparison, interfaceFee, referralFee, }) {
    if (!address || !chainId) {
        return;
    }
    const limitOrderAction = (0, multiinvoker_1.buildPlaceTriggerOrder)({
        triggerPrice: limitPrice,
        side: side,
        interfaceFee,
        interfaceFee2: referralFee,
        delta,
        market: marketAddress,
        maxFee: constants_1.OrderExecutionDeposit,
        comparison: triggerComparison,
    });
    const actions = [limitOrderAction];
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildLimitOrderTx = buildLimitOrderTx;
async function buildStopLossTx({ address, chainId, marketAddress, stopLossPrice, side, delta = 0n, interfaceFee, referralFee, maxFee, }) {
    if (delta > 0n) {
        throw new Error('Position delta must be negative for stop loss transactions');
    }
    const stopLossAction = (0, multiinvoker_1.buildPlaceTriggerOrder)({
        triggerPrice: stopLossPrice,
        side: side,
        interfaceFee,
        interfaceFee2: referralFee,
        delta,
        market: marketAddress,
        maxFee: maxFee ?? constants_1.OrderExecutionDeposit,
        comparison: side === constants_1.PositionSide.short ? constants_1.TriggerComparison.gte : constants_1.TriggerComparison.lte,
    });
    const actions = [stopLossAction];
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildStopLossTx = buildStopLossTx;
async function buildTakeProfitTx({ address, chainId, marketAddress, takeProfitPrice, side, delta = 0n, interfaceFee, referralFee, maxFee, }) {
    if (delta > 0n) {
        throw new Error('Position delta must be negative for take profit transactions');
    }
    const takeProfitAction = (0, multiinvoker_1.buildPlaceTriggerOrder)({
        triggerPrice: takeProfitPrice,
        side: side,
        interfaceFee,
        interfaceFee2: referralFee,
        delta,
        market: marketAddress,
        maxFee: maxFee ?? constants_1.OrderExecutionDeposit,
        comparison: side === constants_1.PositionSide.short ? constants_1.TriggerComparison.lte : constants_1.TriggerComparison.gte,
    });
    const actions = [takeProfitAction];
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildTakeProfitTx = buildTakeProfitTx;
function buildCancelOrderActions(orders) {
    return orders.map(({ market, nonce }) => {
        const marketAddress = (0, viem_1.getAddress)(market);
        const formattedNonce = BigInt(nonce);
        return (0, multiinvoker_1.buildCancelOrder)({ market: marketAddress, nonce: formattedNonce });
    });
}
function buildCancelOrderTx({ chainId, address, orderDetails }) {
    const actions = buildCancelOrderActions(orderDetails);
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildCancelOrderTx = buildCancelOrderTx;
function buildClaimFeeTx({ chainId, address, marketAddress, unwrap = true }) {
    const actions = [(0, multiinvoker_1.buildClaimFee)({ market: marketAddress, unwrap })];
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildClaimFeeTx = buildClaimFeeTx;
function buildUpdateIntentTx({ chainId, address, market, intent, signature }) {
    const marketAddress = (0, addressUtils_1.addressForMarket)(chainId, market);
    const actions = [(0, multiinvoker_1.buildUpdateIntent)({ market: marketAddress, intent, signature })];
    const txData = (0, multiinvoker_1.encodeInvoke)({
        chainId,
        actions,
        address,
        value: 0n,
    });
    return txData;
}
exports.buildUpdateIntentTx = buildUpdateIntentTx;
