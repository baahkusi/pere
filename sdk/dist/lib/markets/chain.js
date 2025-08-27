"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMarketSettlementFees = exports.fetchMarketSnapshots = exports.fetchMarketOracles = void 0;
const viem_1 = require("viem");
const __1 = require("../..");
const GasOracle_abi_1 = require("../../abi/GasOracle.abi");
const Lens_abi_1 = require("../../abi/Lens.abi");
const MarketMetadataLens_abi_1 = require("../../abi/MarketMetadataLens.abi");
const positionUtils_1 = require("../../utils/positionUtils");
const oracle_1 = require("../oracle");
/**
 * Fetches the market oracles for a given chain
 * @param chainId Chain ID {@link SupportedChainId}
 * @param publicClient Public Client
 * @param markets List of {@link SupportedMarket}
 */
async function fetchMarketOracles(chainId = __1.DefaultChain.id, publicClient, markets) {
    const marketsWithAddress = (0, __1.chainMarketsWithAddress)(chainId, markets);
    const marketMetadataLens = (0, viem_1.getContractAddress)({ from: viem_1.zeroAddress, nonce: __1.MaxUint256 });
    const lensResult = await publicClient.readContract({
        address: marketMetadataLens,
        abi: MarketMetadataLens_abi_1.MarketMetadataLensAbi,
        functionName: 'metadataBatch',
        args: [marketsWithAddress.map(({ marketAddress }) => marketAddress)],
        stateOverride: [
            {
                address: marketMetadataLens,
                code: MarketMetadataLens_abi_1.MarketMetadataLensDeployedBytecode,
                balance: viem_1.maxUint256,
            },
        ],
    });
    const parseLensResult = (market, marketAddress) => {
        const marketLensResult = lensResult.find((result) => result.marketAddress === marketAddress);
        if (!marketLensResult)
            return;
        return {
            market,
            marketAddress,
            oracleName: marketLensResult.name,
            oracleFactoryAddress: marketLensResult.oracleFactory,
            oracleAddress: marketLensResult.oracle,
            subOracleFactoryAddress: marketLensResult.subOracleFactory,
            subOracleAddress: marketLensResult.subOracle,
            subOracleFactoryType: marketLensResult.subOracleFactoryType,
            id: marketLensResult.oracleId,
            underlyingId: marketLensResult.oracleUnderlyingId,
            minValidTime: marketLensResult.subOracleFactoryParameter.validFrom,
            staleAfter: marketLensResult.riskParameter.staleAfter,
            maxSettlementFee: marketLensResult.oracleFactoryParameter.maxSettlementFee,
            commitmentGasOracle: marketLensResult.commitmentGasOracle,
            settlementGasOracle: marketLensResult.settlementGasOracle,
        };
    };
    const marketData = marketsWithAddress
        .map(({ market, marketAddress }) => {
        return parseLensResult(market, marketAddress);
    })
        .filter(__1.notEmpty);
    return marketData.reduce((acc, market) => {
        acc[market.market] = market;
        return acc;
    }, {});
}
exports.fetchMarketOracles = fetchMarketOracles;
/**
 * Fetches market snapshots for a given address
 * @param publicClient Public Client
 * @param oracleClients Oracle Clients {@link OracleClients}
 * @param chainId Chain ID {@link SupportedChainId}
 * @param address Wallet Address
 * @param marketOracles {@link MarketOracles}
 * @param markets Subset of availalbe markets to support.
 * @param onError Error callback
 * @param onSuccess Success callback
 */
async function fetchMarketSnapshots({ publicClient, oracleClients, chainId, address, marketOracles, markets, onError, onSuccess, useSimulate, }) {
    if (!marketOracles) {
        marketOracles = await fetchMarketOracles(chainId, publicClient, markets);
    }
    const snapshotData = await fetchMarketSnapshotsAfterSettle({
        chainId,
        address,
        marketOracles,
        publicClient,
        oracleClients,
        onOracleError: onError,
        resetOracleError: onSuccess,
        useSimulate,
    });
    if (snapshotData.commitments.some((commitment) => commitment !== '0x')) {
        const commitmentError = snapshotData.commitments.find((commitment) => commitment !== '0x');
        console.error('Snapshot commitment error', [commitmentError, address, chainId].join(', '));
    }
    if (snapshotData.updates.some((update) => update !== '0x')) {
        const updateError = snapshotData.updates.find((update) => update !== '0x');
        console.error('Snapshot update error', [updateError, address, chainId].join(', '));
    }
    const marketSnapshots = snapshotData.market.reduce((acc, snapshot) => {
        try {
            const major = __1.Big6Math.max(snapshot.position.long, snapshot.position.short);
            const nextMajor = __1.Big6Math.max(snapshot.nextPosition.long, snapshot.nextPosition.short);
            const minor = __1.Big6Math.min(snapshot.position.long, snapshot.position.short);
            const nextMinor = __1.Big6Math.min(snapshot.nextPosition.long, snapshot.nextPosition.short);
            const fundingRates = (0, __1.calculateFundingAndInterestForSides)(snapshot);
            const socializationFactor = !__1.Big6Math.isZero(major)
                ? __1.Big6Math.min(__1.Big6Math.div(minor + snapshot.nextPosition.maker, major), __1.Big6Math.ONE)
                : __1.Big6Math.ONE;
            const makerTotal = snapshot.pendingOrder.makerPos + snapshot.pendingOrder.makerNeg;
            const takerPos = snapshot.pendingOrder.longPos + snapshot.pendingOrder.shortNeg;
            const takerNeg = snapshot.pendingOrder.shortPos + snapshot.pendingOrder.longNeg;
            const takerTotal = takerPos + takerNeg;
            acc[snapshot.market] = {
                ...snapshot,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                pre: snapshotData.marketPre.find((pre) => pre.market === snapshot.market),
                major,
                majorSide: major === snapshot.position.long ? __1.PositionSide.long : __1.PositionSide.short,
                nextMajor,
                nextMajorSide: nextMajor === snapshot.nextPosition.long ? __1.PositionSide.long : __1.PositionSide.short,
                minor,
                minorSide: minor === snapshot.position.long ? __1.PositionSide.long : __1.PositionSide.short,
                nextMinor,
                nextMinorSide: nextMinor === snapshot.nextPosition.long ? __1.PositionSide.long : __1.PositionSide.short,
                fundingRate: fundingRates,
                socializationFactor,
                isSocialized: socializationFactor < __1.Big6Math.ONE,
                makerTotal,
                takerTotal,
            };
            return acc;
        }
        catch (e) {
            console.error('Error in snapshot', snapshot.market, address, e);
            return acc;
        }
    }, {});
    const userSnapshots = snapshotData.user.reduce((acc, snapshot) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const pre = snapshotData.userPre.find((pre) => pre.market === snapshot.market);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const marketSnapshot = marketSnapshots[snapshot.market];
        const marketPrice = marketSnapshot.global.latestPrice ?? 0n;
        const latestPosition = snapshot.versions[0].valid ? snapshot.position : pre.position;
        const nextPosition = snapshot.versions[0].valid ? snapshot.nextPosition : pre.nextPosition;
        const side = (0, positionUtils_1.sideFromPosition)(latestPosition);
        const nextSide = (0, positionUtils_1.sideFromPosition)(nextPosition);
        const magnitude = side === __1.PositionSide.none ? 0n : latestPosition[side];
        const nextMagnitude = nextSide === __1.PositionSide.none ? 0n : nextPosition?.[nextSide] ?? 0n;
        const priceUpdate = snapshot?.priceUpdate;
        if (priceUpdate !== '0x') {
            console.error('Sync error', snapshot.market, priceUpdate, address);
        }
        const hasVersionError = !snapshot.versions[0].valid &&
            (pre.nextPosition.timestamp < marketSnapshot.pre.latestOracleVersion.timestamp ||
                pre.nextPosition.timestamp + 60n < BigInt(Math.floor(Date.now() / 1000)));
        if (hasVersionError && (magnitude !== 0n || nextMagnitude !== 0n) && magnitude !== nextMagnitude) {
            console.error('Version error', snapshot.market, address);
        }
        acc[snapshot.market] = {
            ...snapshot,
            pre,
            side,
            nextSide,
            status: (0, positionUtils_1.getStatusForSnapshot)(magnitude, nextMagnitude, snapshot.local.collateral, hasVersionError, priceUpdate),
            magnitude,
            nextMagnitude,
            maintenance: !__1.Big6Math.isZero(magnitude)
                ? __1.Big6Math.max(marketSnapshot.riskParameter.minMaintenance, __1.Big6Math.mul(marketSnapshot.riskParameter.maintenance, (0, positionUtils_1.calcNotional)(magnitude, marketPrice)))
                : 0n,
            nextMaintenance: !__1.Big6Math.isZero(nextMagnitude)
                ? __1.Big6Math.max(marketSnapshot.riskParameter.minMaintenance, __1.Big6Math.mul(marketSnapshot.riskParameter.maintenance, (0, positionUtils_1.calcNotional)(nextMagnitude, marketPrice)))
                : 0n,
            margin: !__1.Big6Math.isZero(magnitude)
                ? __1.Big6Math.max(marketSnapshot.riskParameter.minMargin, __1.Big6Math.mul(marketSnapshot.riskParameter.margin, (0, positionUtils_1.calcNotional)(magnitude, marketPrice)))
                : 0n,
            nextMargin: !__1.Big6Math.isZero(nextMagnitude)
                ? __1.Big6Math.max(marketSnapshot.riskParameter.minMargin, __1.Big6Math.mul(marketSnapshot.riskParameter.margin, (0, positionUtils_1.calcNotional)(nextMagnitude, marketPrice)))
                : 0n,
            leverage: (0, positionUtils_1.calcLeverage)(marketPrice, magnitude, snapshot.local.collateral),
            nextLeverage: (0, positionUtils_1.calcLeverage)(marketPrice, nextMagnitude, snapshot.local.collateral),
            notional: (0, positionUtils_1.calcNotional)(magnitude, marketPrice),
            nextNotional: (0, positionUtils_1.calcNotional)(nextMagnitude, marketPrice),
            makerExposure: (0, positionUtils_1.calcMakerExposure)(snapshot.position.maker, marketSnapshot.position.maker, marketSnapshot.position.long, marketSnapshot.position.short),
            nextMakerExposure: (0, positionUtils_1.calcMakerExposure)(snapshot.nextPosition.maker, marketSnapshot.nextPosition.maker, marketSnapshot.nextPosition.long, marketSnapshot.nextPosition.short),
        };
        return acc;
    }, {});
    return {
        user: address === viem_1.zeroAddress ? undefined : userSnapshots,
        market: marketSnapshots,
        commitments: snapshotData.commitments,
        updates: snapshotData.updates,
        blockNumber: snapshotData.blockNumber,
        logs: snapshotData.logs,
    };
}
exports.fetchMarketSnapshots = fetchMarketSnapshots;
async function fetchMarketSnapshotsAfterSettle({ chainId, address, marketOracles, publicClient, oracleClients, onOracleError, resetOracleError, useSimulate = false, }) {
    const lensAddress = (0, viem_1.getContractAddress)({ from: address, nonce: __1.MaxUint256 });
    const priceCommitments = await (0, oracle_1.oracleCommitmentsLatest)({
        chainId,
        oracleClients: oracleClients,
        publicClient,
        requests: (0, oracle_1.marketOraclesToUpdateDataRequest)(Object.values(marketOracles)),
        onError: onOracleError,
        onSuccess: resetOracleError,
    });
    const marketAddresses = Object.values(marketOracles).map(({ marketAddress }) => marketAddress);
    const stateOverrides = [
        {
            address: lensAddress,
            code: Lens_abi_1.LensDeployedBytecode,
            balance: viem_1.maxUint256,
        },
    ];
    const snapshotArgs = {
        publicClient,
        address,
        lensAddress,
        priceCommitments,
        marketAddresses,
        stateOverrides,
    };
    const lensRes = useSimulate ? await snapshotViaSimulate(snapshotArgs) : await snapshotViaCall(snapshotArgs);
    return {
        blockNumber: lensRes.blockNumber,
        commitments: lensRes.commitmentStatus,
        updates: lensRes.updateStatus,
        logs: lensRes.logs,
        market: lensRes.postUpdate.marketSnapshots.map((s) => {
            const market = (0, __1.addressToMarket)(chainId, (0, viem_1.getAddress)(s.marketAddress));
            return {
                ...s,
                market,
            };
        }),
        marketPre: lensRes.preUpdate.marketSnapshots.map((s) => {
            const market = (0, __1.addressToMarket)(chainId, (0, viem_1.getAddress)(s.marketAddress));
            return {
                ...s,
                market,
            };
        }),
        user: lensRes.postUpdate.marketAccountSnapshots.map((s, i) => {
            const market = (0, __1.addressToMarket)(chainId, (0, viem_1.getAddress)(s.marketAddress));
            return {
                ...s,
                market,
                priceUpdate: lensRes.updateStatus[i],
            };
        }),
        userPre: lensRes.preUpdate.marketAccountSnapshots.map((s) => {
            const market = (0, __1.addressToMarket)(chainId, (0, viem_1.getAddress)(s.marketAddress));
            return {
                ...s,
                market,
            };
        }),
    };
}
async function snapshotViaSimulate({ publicClient, address, lensAddress, priceCommitments, marketAddresses, stateOverrides, }) {
    const res = await publicClient.simulateCalls({
        account: address,
        calls: [
            {
                to: lensAddress,
                data: (0, viem_1.encodeFunctionData)({
                    abi: Lens_abi_1.LensAbi,
                    functionName: 'snapshot',
                    args: [priceCommitments, marketAddresses, address],
                }),
                value: 0n,
            },
        ],
        stateOverrides,
    });
    return {
        ...(0, viem_1.decodeFunctionResult)({
            abi: Lens_abi_1.LensAbi,
            functionName: 'snapshot',
            data: res.results[0].data,
        }),
        logs: res.results[0].logs,
    };
}
async function snapshotViaCall({ publicClient, address, lensAddress, priceCommitments, marketAddresses, stateOverrides, }) {
    const { result } = await publicClient.simulateContract({
        address: lensAddress,
        abi: Lens_abi_1.LensAbi,
        functionName: 'snapshot',
        args: [priceCommitments, marketAddresses, address],
        stateOverride: stateOverrides,
    });
    return {
        ...result,
        logs: undefined,
    };
}
async function fetchMarketSettlementFees({ chainId, markets, marketOracles, publicClient, }) {
    if (!marketOracles)
        marketOracles = await fetchMarketOracles(chainId, publicClient, markets);
    const gasPrice = await publicClient.getGasPrice();
    const commitmentCostCache = new Map();
    const settlementCostCache = new Map();
    const gasCosts = {};
    const costWithGasPrice = async (oracle, value, publicClient, market) => {
        try {
            const { result } = await publicClient.simulateContract({
                address: oracle,
                abi: GasOracle_abi_1.GasOracleAbi,
                functionName: 'cost',
                args: [value],
                maxFeePerGas: gasPrice * 10n,
                stateOverride: [
                    {
                        address: viem_1.zeroAddress,
                        balance: viem_1.maxUint256,
                    },
                ],
            });
            // The gas oracle returns a 18 decimal value, so we need to convert it to 6 decimal places
            return __1.Big18Math.toDecimals(result, __1.Big6Math.FIXED_DECIMALS);
        }
        catch (e) {
            console.error('Error in costWithGasPrice', oracle, value, e);
            return marketOracles[market].maxSettlementFee;
        }
    };
    for (const market of markets) {
        const commitmentOracle = marketOracles[market].commitmentGasOracle;
        const settlementOracle = marketOracles[market].settlementGasOracle;
        // TODO: Make "value" dynamic
        const commitmentCost = commitmentCostCache.get(commitmentOracle) ?? (await costWithGasPrice(commitmentOracle, 1n, publicClient, market));
        const settlementCost = settlementCostCache.get(settlementOracle) ?? (await costWithGasPrice(settlementOracle, 0n, publicClient, market));
        if (commitmentOracle)
            commitmentCostCache.set(commitmentOracle, commitmentCost);
        if (settlementOracle)
            settlementCostCache.set(settlementOracle, settlementCost);
        gasCosts[market] = {
            commitmentCost: commitmentCost,
            settlementCost: settlementCost,
        };
    }
    return markets.reduce((acc, market) => {
        const commitmentCost = commitmentCostCache.get(marketOracles[market].commitmentGasOracle) ?? 0n;
        const settlementCost = settlementCostCache.get(marketOracles[market].settlementGasOracle) ?? 0n;
        const maxCost = marketOracles[market].maxSettlementFee;
        acc[market] = {
            commitmentCost: __1.Big6Math.min(commitmentCost, maxCost),
            settlementCost: __1.Big6Math.min(settlementCost, maxCost),
            totalCost: __1.Big6Math.min(commitmentCost + settlementCost, maxCost),
        };
        return acc;
    }, {});
}
exports.fetchMarketSettlementFees = fetchMarketSettlementFees;
