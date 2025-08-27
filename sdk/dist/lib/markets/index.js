"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketsModule = void 0;
const viem_1 = require("viem");
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const addressUtils_1 = require("../../utils/addressUtils");
const intentUtils_1 = require("../../utils/intentUtils");
const multiinvoker_1 = require("../../utils/multiinvoker");
const positionUtils_1 = require("../../utils/positionUtils");
const chain_1 = require("./chain");
const graph_1 = require("./graph");
const intent_1 = require("./intent");
const buildIntentSigningPayload_1 = require("./intent/buildIntentSigningPayload");
const tx_1 = require("./tx");
/**
 * Markets module class
 * @param config SDK configuration
 * @param config.chainId {@link SupportedChainId}
 * @param config.publicClient Public Client
 * @param config.graphClient GraphQL Client
 * @param config.oracleClients Oracle Clients {@link OracleClients}
 * @param config.walletClient Wallet Client
 * @param config.operatingFor If set, the module will read data and send multi-invoker transactions on behalf of this address.
 * @param config.supportedMarkets Subset of availalbe markets to support.
 * @returns Markets module instance
 */
class MarketsModule {
    constructor(config) {
        this.defaultAddress = viem_1.zeroAddress;
        this.config = config;
        this.defaultAddress = config.operatingFor ?? config.walletClient?.account?.address ?? this.defaultAddress;
    }
    get read() {
        return {
            /**
             * Fetches the {@link MarketOracles}
             * @returns The {@link MarketOracles}.
             */
            marketOracles: () => {
                return (0, chain_1.fetchMarketOracles)(this.config.chainId, this.config.publicClient, this.config.supportedMarkets);
            },
            /**
             * Fetches the {@link MarketSnapshots}
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketOracles {@link MarketOracles}
             * @param onError Error callback
             * @param onSuccess Success callback
             * @returns The {@link MarketSnapshots}.
             */
            marketSnapshots: (args = {}) => {
                return (0, chain_1.fetchMarketSnapshots)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    address: this.defaultAddress,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches position PnL for a given market and Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param markets List of {@link SupportedMarket}
             * @param marketSnapshots {@link MarketSnapshots}
             * @returns User's PnL for an active position.
             */
            activePositionsPnl: (args = {}) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch active position PnL.');
                }
                return (0, graph_1.fetchActivePositionsPnl)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches active position history for a given address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param market {@link SupportedMarket}
             * @param positionId BigInt
             * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
             * @param [skip=0] Offset for pagination number
             * @param chainId {@link SupportedChainId}
             * @returns User's position history for an active position.
             */
            activePositionHistory: (args) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch active position history.');
                }
                return (0, graph_1.fetchActivePositionHistory)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    ...args,
                });
            },
            /**
             * Fetches the position history for a given address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param markets List of {@link SupportedMarket} to fetch position history for
             * @param chainId {@link SupportedChainId}
             * @param fromTs bigint - Start timestamp in seconds
             * @param toTs bigint - Start timestamp in seconds
             * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
             * @param [skip=0] Offset for pagination number
             * @param maker boolean - Filter for maker positions
             * @returns User's position history.
             */
            historicalPositions: (args = {}) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch historical positions.');
                }
                return (0, graph_1.fetchHistoricalPositions)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches the sub positions activity for a given position
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param market {@link SupportedMarket}
             * @param positionId BigInt
             * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
             * @param [skip=0] Offset for pagination Number of entries to skip
             * @param graphClient GraphQLClient
             * @returns User's sub positions.
             */
            subPositions: (args) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch sub positions.');
                }
                return (0, graph_1.fetchSubPositions)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    ...args,
                });
            },
            /**
             * Fetches the trade history across all markets for a given address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param markets List of {@link SupportedMarket} to fetch trade history for
             * @param fromTs start timestamp in seconds
             * @param toTs end timestamp in seconds
             * @returns User's trade history.
             */
            tradeHistory: (args = {}) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch trade history.');
                }
                return (0, graph_1.fetchTradeHistory)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches the open orders for a given address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param markets List of {@link SupportedMarket} to fetch open orders for
             * @param chainId {@link SupportedChainId}
             * @param [first={@link GraphDefaultPageSize}] Number of entities to fetch
             * @param [skip=0] Offset for pagination number
             * @param isMaker boolean - Filter for maker orders
             * @returns User's open orders.
             */
            openOrders: (args = {}) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch open orders.');
                }
                return (0, graph_1.fetchOpenOrders)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    address: this.defaultAddress,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches the 24hr volume data for a list of market
             * @param markets List of {@link SupportedMarket}
             * @param chainId {@link SupportedChainId}
             * @returns Markets 24hr volume data.
             */
            markets24hrData: (args = {}) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch markets 24hr data.');
                }
                return (0, graph_1.fetchMarkets24hrData)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Fetches Historical data for markets
             * @param markets List of {@link SupportedMarket}
             * @param chainId {@link SupportedChainId}
             * @param fromTs bigint - Start timestamp in seconds
             * @param toTs bigint - Start timestamp in seconds
             * @param bucket {@link Bucket}
             * @returns Market 7d data.
             */
            marketsHistoricalData: (args) => {
                if (!this.config.graphClient) {
                    throw new Error('Graph client required to fetch market 7d data.');
                }
                return (0, graph_1.fetchMarketsHistoricalData)({
                    chainId: this.config.chainId,
                    graphClient: this.config.graphClient,
                    markets: this.config.supportedMarkets,
                    ...args,
                });
            },
            /**
             * Waits for a perennial transaction to settle and invokes an optional callback
             * @param txHash Transaction hash
             * @param onSettlement Optional callback to invoke on settlement
             */
            waitForOrderSettlement: async (txHash, onSettlement) => {
                return (0, positionUtils_1.waitForOrderSettlement)({
                    publicClient: this.config.publicClient,
                    txHash,
                    onSettlement,
                    timeoutMs: 30000,
                });
            },
            /**
             * Fetches the market settlement fees for a list of markets
             * @param markets List of {@link SupportedMarket}. Defaults to config supported markets
             * @param chainId {@link SupportedChainId}
             * @returns Markets settlement fees.
             */
            settlementFees: (args = {}) => {
                return (0, chain_1.fetchMarketSettlementFees)({
                    chainId: this.config.chainId,
                    markets: this.config.supportedMarkets,
                    publicClient: this.config.publicClient,
                    ...args,
                });
            },
        };
    }
    get build() {
        return {
            /**
             * Build a modify position transaction. Can be used to increase/decrease an
             * existing position, open/close a position and deposit or withdraw collateral.
             * @param marketAddress Market Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketSnapshots {@link MarketSnapshots}
             * @param marketOracles {@link MarketOracles}
             * @param collateralDelta BigInt - Collateral delta
             * @param positionAbs BigInt - Absolute size of desired position
             * @param positionSide {@link PositionSide}
             * @param stopLossPrice BigInt - Optional stop loss price to fully close the position
             * @param takeProfitPrice BigInt - Optional take profit price to fully close the position
             * @param cancelOrderDetails List of {@link CancelOrderDetails[]} to cancel when modifying the position
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param stopLossFees Object consisting of { interfaceFee: {@link InterfaceFee}, referralFee: {@link InterfaceFee} }
             * @param takeProfitFees Object consisting of { interfaceFee: {@link InterfaceFee}, referralFee: {@link InterfaceFee} }
             * @returns Modify position transaction data.
             */
            modifyPosition: async (args) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                let stopLossTx;
                let takeProfitTx;
                let cancelOrderTx;
                const updateMarketTx = await (0, tx_1.buildUpdateMarketTx)({
                    chainId: this.config.chainId,
                    oracleClients: this.config.oracleClients,
                    publicClient: this.config.publicClient,
                    ...args,
                    side: args.positionSide,
                    address,
                });
                const isTaker = args.positionSide === constants_1.PositionSide.short || args.positionSide === constants_1.PositionSide.long;
                if (args.stopLossPrice && isTaker) {
                    stopLossTx = await (0, tx_1.buildStopLossTx)({
                        publicClient: this.config.publicClient,
                        address,
                        chainId: this.config.chainId,
                        marketAddress: args.marketAddress,
                        stopLossPrice: args.stopLossPrice,
                        side: args.positionSide,
                        delta: constants_1.TriggerOrderFullCloseMagicValue,
                        interfaceFee: args.stopLossFees?.interfaceFee,
                        referralFee: args.stopLossFees?.referralFee,
                        maxFee: constants_1.OrderExecutionDeposit,
                    });
                }
                if (args.takeProfitPrice && isTaker) {
                    takeProfitTx = await (0, tx_1.buildTakeProfitTx)({
                        publicClient: this.config.publicClient,
                        address,
                        chainId: this.config.chainId,
                        marketAddress: args.marketAddress,
                        takeProfitPrice: args.takeProfitPrice,
                        side: args.positionSide,
                        delta: constants_1.TriggerOrderFullCloseMagicValue,
                        maxFee: constants_1.OrderExecutionDeposit,
                        interfaceFee: args.takeProfitFees?.interfaceFee,
                        referralFee: args.takeProfitFees?.referralFee,
                    });
                }
                if (args.cancelOrderDetails?.length) {
                    cancelOrderTx = (0, tx_1.buildCancelOrderTx)({
                        chainId: this.config.chainId,
                        address,
                        orderDetails: args.cancelOrderDetails,
                    });
                }
                const multiInvokerTxs = [updateMarketTx, takeProfitTx, stopLossTx, cancelOrderTx].filter(utils_1.notEmpty);
                return (0, multiinvoker_1.mergeMultiInvokerTxs)(multiInvokerTxs);
            },
            /**
             * Build an update market transaction. Can be used to increase/decrease an
             * existing position, open/close a position and deposit or withdraw collateral
             * @param marketAddress Market Address
             * @param marketSnapshots {@link MarketSnapshots}
             * @param marketOracles {@link MarketOracles}
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param collateralDelta BigInt - Collateral delta
             * @param positionAbs BigInt - Absolute size of desired position
             * @param side {@link PositionSide}
             * @param interfaceFee Object consisting of interfaceFee, referrerFee and ecosystemFee amounts
             * @param interfaceFeeRate {@link InterfaceFeeBps}
             * @param referralFeeRate {@link ReferrerInterfaceFeeInfo}
             * @param onCommitmentError Callback for commitment error
             * @param publicClient Public Client
             * @returns Update market transaction data.
             */
            update: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildUpdateMarketTx)({
                    chainId: this.config.chainId,
                    oracleClients: this.config.oracleClients,
                    publicClient: this.config.publicClient,
                    ...args,
                    address,
                });
            },
            /**
             * Build a limit order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param selectedLimitComparison Trigger comparison for order execution. See {@link TriggerComparison}
             * @param referralFeeRate {@link ReferrerInterfaceFeeInfo}
             * @param interfaceFeeRate {@link InterfaceFeeBps}
             * @param limitPrice BigInt - Limit price
             * @returns Limit order transaction data.
             */
            limitOrder: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildLimitOrderTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    ...args,
                    address,
                });
            },
            /**
             * Build a stop loss order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param referralFeeRate {@link ReferrerInterfaceFeeInfo}
             * @param interfaceFeeRate {@link InterfaceFeeBps}
             * @param maxFee Maximum fee override - defaults to {@link OrderExecutionDeposit}
             * @param stopLossPrice BigInt - Stop loss price
             * @returns Stop loss transaction data.
             */
            stopLoss: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildStopLossTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    ...args,
                    address,
                });
            },
            /**
             * Build a take profit order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param maxFee Maximum fee override - defaults to {@link OrderExecutionDeposit}
             * @param takeProfitPrice BigInt - Stop loss price
             * @returns Take profit transaction data.
             */
            takeProfit: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildTakeProfitTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    ...args,
                    address,
                });
            },
            /**
             * Build a place order transaction. Can be used to set combined limit, stop loss and
             * take profit orders.
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param marketOracles {@link MarketOracles}
             * @param marketSnapshots {@link MarketSnapshots}
             * @param orderType {@link OrderTypes}
             * @param limitPrice BigInt - Limit price
             * @param stopLossPrice BigInt - Stop price
             * @param takeProfitPrice BigInt - Take profit price
             * @param side Order side
             * @param collateralDelta BigInt - Collateral delta
             * @param delta BigInt - Position size delta
             * @param cancelOrderDetails List of {@link CancelOrderDetails[]} to cancel
             * @param triggerComparison Trigger comparison for order execution. See {@link TriggerComparison}
             * @param limitOrderFees Object consisting of { interfaceFee: {@link InterfaceFee}, referralFee: {@link InterfaceFee} }
             * @param stopLossFees Object consisting of { interfaceFee: {@link InterfaceFee}, referralFee: {@link InterfaceFee} }
             * @param takeProfitFees Object consisting of { interfaceFee: {@link InterfaceFee}, referralFee: {@link InterfaceFee} }
             * @param onCommitmentError Callback for commitment error
             * @returns Place order transaction data.
             */
            placeOrder: async (args) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                if (!args.limitPrice && !args.stopLossPrice && !args.takeProfitPrice) {
                    console.warn('PlaceOrder: No order type specified. Please provide a limit, stop loss or take profit price.');
                }
                let updateMarketTx;
                let limitOrderTx;
                let takeProfitTx;
                let stopLossTx;
                let cancelOrderTx;
                if (args.collateralDelta) {
                    updateMarketTx = await (0, tx_1.buildUpdateMarketTx)({
                        chainId: this.config.chainId,
                        oracleClients: this.config.oracleClients,
                        publicClient: this.config.publicClient,
                        address,
                        marketAddress: args.marketAddress,
                        collateralDelta: args.collateralDelta,
                        side: args.side,
                        marketOracles: args.marketOracles,
                        marketSnapshots: args.marketSnapshots,
                        onCommitmentError: args.onCommitmentError,
                    });
                }
                if (args.orderType === constants_1.OrderTypes.limit && args.limitPrice) {
                    limitOrderTx = await (0, tx_1.buildLimitOrderTx)({
                        chainId: this.config.chainId,
                        publicClient: this.config.publicClient,
                        limitPrice: args.limitPrice,
                        address,
                        marketAddress: args.marketAddress,
                        side: args.side,
                        delta: args.delta,
                        interfaceFee: args.limitOrderFees?.interfaceFee,
                        referralFee: args.limitOrderFees?.referralFee,
                        triggerComparison: args.triggerComparison,
                    });
                }
                if (args.takeProfitPrice && args.orderType !== constants_1.OrderTypes.stopLoss) {
                    const takeProfitDelta = args.orderType === constants_1.OrderTypes.limit ? constants_1.TriggerOrderFullCloseMagicValue : args.delta;
                    takeProfitTx = await (0, tx_1.buildTakeProfitTx)({
                        chainId: this.config.chainId,
                        publicClient: this.config.publicClient,
                        takeProfitPrice: args.takeProfitPrice,
                        delta: takeProfitDelta,
                        address,
                        marketAddress: args.marketAddress,
                        side: args.side,
                        interfaceFee: args.takeProfitFees?.interfaceFee,
                        referralFee: args.takeProfitFees?.referralFee,
                    });
                }
                if (args.stopLossPrice && args.orderType !== constants_1.OrderTypes.takeProfit) {
                    const stopLossDelta = args.orderType === constants_1.OrderTypes.limit ? constants_1.TriggerOrderFullCloseMagicValue : args.delta;
                    stopLossTx = await (0, tx_1.buildStopLossTx)({
                        chainId: this.config.chainId,
                        publicClient: this.config.publicClient,
                        stopLossPrice: args.stopLossPrice,
                        delta: stopLossDelta,
                        address,
                        marketAddress: args.marketAddress,
                        side: args.side,
                        interfaceFee: args.stopLossFees?.interfaceFee,
                        referralFee: args.stopLossFees?.referralFee,
                    });
                }
                if (args.cancelOrderDetails?.length) {
                    cancelOrderTx = (0, tx_1.buildCancelOrderTx)({
                        chainId: this.config.chainId,
                        address,
                        orderDetails: args.cancelOrderDetails,
                    });
                }
                const multiInvokerTxs = [updateMarketTx, limitOrderTx, takeProfitTx, stopLossTx, cancelOrderTx].filter(utils_1.notEmpty);
                return (0, multiinvoker_1.mergeMultiInvokerTxs)(multiInvokerTxs);
            },
            /**
             * Build a cancel order transaction
             * @param orderDetails List of {@link CancelOrderDetails} to cancel
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Cancel order transaction data.
             */
            cancelOrder: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildCancelOrderTx)({
                    chainId: this.config.chainId,
                    ...args,
                    address,
                });
            },
            /**
             * Build a claim fee transaction
             * @notice This method only claims for the transaction sending address. OperatingFor is not supported
             * @param marketAddress Market Address to claim fees for
             */
            claimFee: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildClaimFeeTx)({ chainId: this.config.chainId, ...args, address });
            },
            /**
             * Build a update intent transaction
             * @param marketAddress Market Address to update intent for
             * @param intent {@link EIP712_Intent}
             * @param signature Signature of the intent
             */
            updateIntent: (args) => {
                const address = args.address ?? this.defaultAddress;
                return (0, tx_1.buildUpdateIntentTx)({ chainId: this.config.chainId, ...args, address });
            },
            // EIP712 Typed Data Signature Payloads
            signed: {
                /**
                 * Build a EIP712 paylod for signing a market update intent
                 * @param marketAddress Market Address to update intent for
                 * @param intent {@link EIP712_Intent}
                 * @param signature Signature of the intent
                 */
                intent: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildIntentSigningPayload_1.buildIntentSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                /**
                 * Build a EIP712 paylod for signing a take order
                 * @param marketAddress Market Address to take for
                 * @param amount BigInt - Amount to take
                 * @param referrer Address to referrer
                 */
                take: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, intent_1.buildTakeSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                placeOrder: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, intent_1.buildPlaceOrderSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                cancelOrder: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, intent_1.buildCancelOrderSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
            },
        };
    }
    get write() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const txOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {
            /**
             * Send a modify position transaction. Can be used to increase/decrease an
             * existing position, open/close a position and deposit or withdraw collateral.
             * @param marketAddress Market Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketSnapshots {@link MarketSnapshots}
             * @param marketOracles {@link MarketOracles}
             * @param collateralDelta BigInt - Collateral delta
             * @param positionAbs BigInt - Absolute size of desired position
             * @param positionSide {@link PositionSide}
             * @param stopLoss BigInt - Optional stop loss price to fully close the position
             * @param takeProfit BigInt - Optional take profit price to fully close the position
             * @param cancelOrderDetails List of {@link CancelOrderDetails} to cancel when modifying the position
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @returns Transaction Hash
             */
            modifyPosition: async (...args) => {
                const tx = await this.build.modifyPosition(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send an update market transaction. Can be used to increase/decrease an
             * existing position, open/close a position and deposit or withdraw collateral
             * @param marketAddress Market Address
             * @param marketSnapshots {@link MarketSnapshots}
             * @param marketOracles {@link MarketOracles}
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param collateralDelta BigInt - Collateral delta
             * @param positionAbs BigInt - Absolute size of desired position
             * @param side {@link PositionSide}
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param onCommitmentError Callback for commitment error
             * @param publicClient Public Client
             * @returns Transaction Hash.
             */
            update: async (...args) => {
                const tx = await this.build.update(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a limit order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param selectedLimitComparison Trigger comparison for order execution. See {@link TriggerComparison}
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param onCommitmentError Callback for commitment error
             * @param limitPrice BigInt - Limit price
             * @returns Transaction hash.
             */
            limitOrder: async (...args) => {
                const tx = await this.build.limitOrder(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a stop loss order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param maxFee Maximum fee override - defaults to {@link OrderExecutionDeposit}
             * @param stopLossPrice BigInt - Stop loss price
             * @returns Transaction hash.
             */
            stopLoss: async (...args) => {
                const tx = await this.build.stopLoss(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a take profit order transaction
             * @param chainId Chain ID
             * @param publicClient Public Client
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param side {@link PositionSide}
             * @param delta BigInt - Position size delta
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param maxFee Maximum fee override - defaults to {@link OrderExecutionDeposit}
             * @param takeProfitPrice BigInt - Stop loss price
             * @returns Transaction hash.
             */
            takeProfit: async (...args) => {
                const tx = await this.build.takeProfit(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a place order transaction. Can be used to set limit, stop loss and
             * take profit orders.
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketAddress Market Address
             * @param marketOracles {@link MarketOracles}
             * @param marketSnapshots {@link MarketSnapshots}
             * @param orderType {@link OrderTypes}
             * @param limitPrice BigInt - Limit price
             * @param stopLossPrice BigInt - Stop price
             * @param takeProfitPrice BigInt - Take profit price
             * @param side Order side
             * @param collateralDelta BigInt - Collateral delta
             * @param delta BigInt - Position size delta
             * @param positionAbs BigInt - Desired absolute position size
             * @param selectedLimitComparison Trigger comparison for order execution. See TriggerComparison
             * @param interfaceFee {@link InterfaceFee}
             * @param referralFee {@link InterfaceFee}
             * @param cancelOrderDetails List of {@link CancelOrderDetails} to cancel when placing the order
             * @param onCommitmentError Callback for commitment error
             * @returns Transaction Hash.
             */
            placeOrder: async (...args) => {
                const tx = await this.build.placeOrder(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a cancel order transaction
             * @param orderDetails List of {@link CancelOrderDetails} to cancel
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Transaction Hash.
             */
            cancelOrder: async (...args) => {
                const tx = this.build.cancelOrder(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a claim fee transaction
             * @param marketAddress Market Address to claim fees for
             */
            claimFee: async (...args) => {
                const tx = this.build.claimFee(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Send a update intent transaction
             * @param marketAddress Market Address to update intent for
             * @param intent {@link EIP712_Intent}
             * @param signature Signature of the intent
             */
            updateIntent: async (...args) => {
                const tx = this.build.updateIntent(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
        };
    }
    get sign() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const signOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {
            /**
             * Sign a EIP712 intent signing payload
             * @param intent {@link EIP712_Intent}
             * @param signature Signature of the intent
             */
            intent: async (...args) => {
                const { intent } = this.build.signed.intent(...args);
                const signature = await walletClient.signTypedData({ ...intent, ...signOpts });
                return {
                    signature,
                    intent,
                };
            },
            /**
             * Sign a EIP712 take signing payload
             * @param take {@link EIP712_Take}
             * @param signature Signature of the take
             */
            take: async (...args) => {
                const { take } = this.build.signed.take(...args);
                const signature = await walletClient.signTypedData({ ...take, ...signOpts });
                return {
                    signature,
                    take,
                };
            },
            placeOrder: async (...args) => {
                const { placeOrder } = this.build.signed.placeOrder(...args);
                const signature = await walletClient.signTypedData({ ...placeOrder, ...signOpts });
                return {
                    signature,
                    placeOrder,
                };
            },
            cancelOrder: async (...args) => {
                const { cancelOrder } = this.build.signed.cancelOrder(...args);
                const signature = await walletClient.signTypedData({ ...cancelOrder, ...signOpts });
                return {
                    signature,
                    cancelOrder,
                };
            },
        };
    }
}
exports.MarketsModule = MarketsModule;
