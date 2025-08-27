import { GraphQLClient } from 'graphql-request';
import { Address, Hash, PublicClient, TransactionReceipt, WalletClient } from 'viem';
import { InterfaceFee, OrderTypes, PositionSide, SupportedChainId, SupportedMarket, TriggerComparison } from '../../constants';
import { OptionalAddress } from '../../types/shared';
import { OracleClients } from '../oracle';
import { MarketOracles, MarketSnapshots, fetchMarketSettlementFees, fetchMarketSnapshots } from './chain';
import { fetchActivePositionHistory, fetchActivePositionsPnl, fetchHistoricalPositions, fetchMarkets24hrData, fetchMarketsHistoricalData, fetchOpenOrders, fetchSubPositions, fetchTradeHistory } from './graph';
import { BuildCancelOrderSigningPayloadArgs, BuildPlaceOrderSigningPayloadArgs, BuildTakeSigningPayloadArgs } from './intent';
import { BuildIntentSigningPayloadArgs } from './intent/buildIntentSigningPayload';
import { BuildCancelOrderTxArgs, BuildClaimFeeTxArgs, BuildLimitOrderTxArgs, BuildStopLossTxArgs, BuildTakeProfitTxArgs, BuildTriggerOrderBaseArgs, BuildUpdateIntentTxArgs, BuildUpdateMarketTxArgs, CancelOrderDetails, WithChainIdAndPublicClient } from './tx';
type OmitBound<T> = Omit<T, 'chainId' | 'graphClient' | 'publicClient' | 'oracleClients' | 'address' | 'markets'>;
type OptionalMarkets = {
    markets?: SupportedMarket[];
};
export type BuildModifyPositionTxArgs = {
    marketAddress: Address;
    marketSnapshots?: MarketSnapshots;
    marketOracles?: MarketOracles;
    address: Address;
    collateralDelta?: bigint;
    positionAbs?: bigint;
    positionSide: PositionSide;
    stopLossPrice?: bigint;
    takeProfitPrice?: bigint;
    cancelOrderDetails?: CancelOrderDetails[];
    interfaceFee?: InterfaceFee;
    referralFee?: InterfaceFee;
    stopLossFees?: {
        interfaceFee?: InterfaceFee;
        referralFee?: InterfaceFee;
    };
    takeProfitFees?: {
        interfaceFee?: InterfaceFee;
        referralFee?: InterfaceFee;
    };
    onCommitmentError?: () => any;
} & WithChainIdAndPublicClient;
export type BuildPlaceOrderTxArgs = {
    orderType: OrderTypes;
    limitPrice?: bigint;
    marketSnapshots?: MarketSnapshots;
    marketOracles?: MarketOracles;
    stopLossPrice?: bigint;
    takeProfitPrice?: bigint;
    collateralDelta?: bigint;
    triggerComparison: TriggerComparison;
    cancelOrderDetails?: CancelOrderDetails[];
    limitOrderFees?: {
        interfaceFee?: InterfaceFee;
        referralFee?: InterfaceFee;
    };
    takeProfitFees?: {
        interfaceFee?: InterfaceFee;
        referralFee?: InterfaceFee;
    };
    stopLossFees?: {
        interfaceFee?: InterfaceFee;
        referralFee?: InterfaceFee;
    };
    onCommitmentError?: () => any;
} & Omit<BuildTriggerOrderBaseArgs, 'interfaceFee' | 'referralFee'>;
type MarketsModuleConfig = {
    chainId: SupportedChainId;
    graphClient?: GraphQLClient;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    walletClient?: WalletClient;
    operatingFor?: Address;
    supportedMarkets: SupportedMarket[];
};
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
export declare class MarketsModule {
    private config;
    private defaultAddress;
    constructor(config: MarketsModuleConfig);
    get read(): {
        /**
         * Fetches the {@link MarketOracles}
         * @returns The {@link MarketOracles}.
         */
        marketOracles: () => Promise<import("../../constants").SupportedMarketMapping<{
            market: SupportedMarket;
            marketAddress: `0x${string}`;
            oracleName: string;
            oracleFactoryAddress: `0x${string}`;
            oracleAddress: `0x${string}`;
            subOracleFactoryAddress: `0x${string}`;
            subOracleAddress: `0x${string}`;
            subOracleFactoryType: string;
            id: `0x${string}`;
            underlyingId: `0x${string}`;
            minValidTime: bigint;
            staleAfter: bigint;
            maxSettlementFee: bigint;
            commitmentGasOracle: `0x${string}`;
            settlementGasOracle: `0x${string}`;
        }>>;
        /**
         * Fetches the {@link MarketSnapshots}
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @param marketOracles {@link MarketOracles}
         * @param onError Error callback
         * @param onSuccess Success callback
         * @returns The {@link MarketSnapshots}.
         */
        marketSnapshots: (args?: OmitBound<Parameters<typeof fetchMarketSnapshots>[0]> & OptionalAddress & OptionalMarkets) => Promise<{
            user: import("../../constants").SupportedMarketMapping<import("./chain").UserMarketSnapshot> | undefined;
            market: {
                btc?: import("./chain").MarketSnapshot | undefined;
                eth?: import("./chain").MarketSnapshot | undefined;
                arb?: import("./chain").MarketSnapshot | undefined;
                sol?: import("./chain").MarketSnapshot | undefined;
                pol?: import("./chain").MarketSnapshot | undefined;
                tia?: import("./chain").MarketSnapshot | undefined;
                rlb?: import("./chain").MarketSnapshot | undefined;
                link?: import("./chain").MarketSnapshot | undefined;
                bnb?: import("./chain").MarketSnapshot | undefined;
                xrp?: import("./chain").MarketSnapshot | undefined;
                "btc\u00B2"?: import("./chain").MarketSnapshot | undefined;
                "eth\u00B2"?: import("./chain").MarketSnapshot | undefined;
                jup?: import("./chain").MarketSnapshot | undefined;
                xau?: import("./chain").MarketSnapshot | undefined;
                mog?: import("./chain").MarketSnapshot | undefined;
                jpy?: import("./chain").MarketSnapshot | undefined;
                mkr?: import("./chain").MarketSnapshot | undefined;
                doge?: import("./chain").MarketSnapshot | undefined;
                eur?: import("./chain").MarketSnapshot | undefined;
                gbp?: import("./chain").MarketSnapshot | undefined;
                meem?: import("./chain").MarketSnapshot | undefined;
                aero?: import("./chain").MarketSnapshot | undefined;
                popcat?: import("./chain").MarketSnapshot | undefined;
                unknown?: import("./chain").MarketSnapshot | undefined;
            };
            commitments: readonly `0x${string}`[];
            updates: readonly `0x${string}`[];
            blockNumber: bigint;
            logs: import("viem").Log[] | undefined;
        }>;
        /**
         * Fetches position PnL for a given market and Address
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @param markets List of {@link SupportedMarket}
         * @param marketSnapshots {@link MarketSnapshots}
         * @returns User's PnL for an active position.
         */
        activePositionsPnl: (args?: OmitBound<Parameters<typeof fetchActivePositionsPnl>[0]> & OptionalAddress & OptionalMarkets) => Promise<import("../../constants").SupportedMarketMapping<{
            market: SupportedMarket;
            marketAddress: `0x${string}`;
            side: PositionSide;
            positionId: bigint;
            startVersion: bigint;
            endVersion: bigint | null;
            trades: bigint;
            startSize: bigint;
            startPrice: bigint;
            startCollateral: bigint;
            netDeposits: bigint;
            startTransactionHash: any;
            startReferrer: any;
            endReferrer: any;
            netPnl: bigint;
            netPnlPercent: bigint;
            netPnlPercentDenominator: bigint;
            totalPnl: bigint;
            totalPnlPercent: bigint;
            totalFees: bigint;
            pnlAccumulations: import("../../utils").RealizedAccumulations;
            feeAccumulations: import("../../utils").RealizedFeeAccumulations;
            averageEntryPrice: bigint;
            averageExitPrice: bigint;
            liquidation: boolean;
            liquidationFee: bigint;
            totalNotional: bigint;
        } & {
            realtime: bigint;
            realtimePercent: bigint;
            pendingMarkToMarketAccumulations: import("../../utils").RealizedAccumulations | null;
        }>>;
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
        activePositionHistory: (args: OmitBound<Parameters<typeof fetchActivePositionHistory>[0]> & OptionalAddress) => Promise<any>;
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
        historicalPositions: (args?: OmitBound<Parameters<typeof fetchHistoricalPositions>[0]> & OptionalAddress & OptionalMarkets) => Promise<any>;
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
        subPositions: (args: OmitBound<Parameters<typeof fetchSubPositions>[0]> & OptionalAddress) => Promise<any>;
        /**
         * Fetches the trade history across all markets for a given address
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @param markets List of {@link SupportedMarket} to fetch trade history for
         * @param fromTs start timestamp in seconds
         * @param toTs end timestamp in seconds
         * @returns User's trade history.
         */
        tradeHistory: (args?: OmitBound<Parameters<typeof fetchTradeHistory>[0]> & OptionalAddress & OptionalMarkets) => Promise<any>;
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
        openOrders: (args?: OmitBound<Parameters<typeof fetchOpenOrders>[0]> & OptionalAddress & OptionalMarkets) => Promise<any>;
        /**
         * Fetches the 24hr volume data for a list of market
         * @param markets List of {@link SupportedMarket}
         * @param chainId {@link SupportedChainId}
         * @returns Markets 24hr volume data.
         */
        markets24hrData: (args?: OmitBound<Parameters<typeof fetchMarkets24hrData>[0]> & OptionalMarkets) => Promise<import("../../constants").SupportedMarketMapping<{
            market: SupportedMarket;
            address: `0x${string}`;
            takerVolumes: any;
            fundingRates: any;
            interestRates: any;
            makerAccumulation: {
                funding: bigint;
                interest: bigint;
                positionFee: bigint;
                exposure: bigint;
            };
        }>>;
        /**
         * Fetches Historical data for markets
         * @param markets List of {@link SupportedMarket}
         * @param chainId {@link SupportedChainId}
         * @param fromTs bigint - Start timestamp in seconds
         * @param toTs bigint - Start timestamp in seconds
         * @param bucket {@link Bucket}
         * @returns Market 7d data.
         */
        marketsHistoricalData: (args: OmitBound<Parameters<typeof fetchMarketsHistoricalData>[0]> & OptionalMarkets) => Promise<import("../../constants").SupportedMarketMapping<{
            market: SupportedMarket;
            address: `0x${string}`;
            takerVolumes: any;
            fundingRates: any;
            interestRates: any;
            makerAccumulation: {
                funding: bigint;
                interest: bigint;
                positionFee: bigint;
                exposure: bigint;
            };
        }>>;
        /**
         * Waits for a perennial transaction to settle and invokes an optional callback
         * @param txHash Transaction hash
         * @param onSettlement Optional callback to invoke on settlement
         */
        waitForOrderSettlement: (txHash: Hash, onSettlement?: ((res: {
            txReceipt?: TransactionReceipt;
            version?: {
                timestamp: bigint;
                valid: boolean;
                price: bigint;
            };
        }) => void) | undefined) => Promise<TransactionReceipt>;
        /**
         * Fetches the market settlement fees for a list of markets
         * @param markets List of {@link SupportedMarket}. Defaults to config supported markets
         * @param chainId {@link SupportedChainId}
         * @returns Markets settlement fees.
         */
        settlementFees: (args?: OmitBound<Parameters<typeof fetchMarketSettlementFees>[0]> & OptionalMarkets) => Promise<import("../../constants").SupportedMarketMapping<{
            commitmentCost: bigint;
            settlementCost: bigint;
            totalCost: bigint;
        }>>;
    };
    get build(): {
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
        modifyPosition: (args: OmitBound<BuildModifyPositionTxArgs> & OptionalAddress) => Promise<{
            data: `0x${string}`;
            value: bigint;
            to: `0x${string}`;
        }>;
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
        update: (args: OmitBound<BuildUpdateMarketTxArgs> & OptionalAddress) => Promise<{
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        } | undefined>;
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
        limitOrder: (args: OmitBound<BuildLimitOrderTxArgs> & OptionalAddress) => Promise<{
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        } | undefined>;
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
        stopLoss: (args: OmitBound<BuildStopLossTxArgs> & OptionalAddress) => Promise<{
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        }>;
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
        takeProfit: (args: OmitBound<BuildTakeProfitTxArgs> & OptionalAddress) => Promise<{
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        }>;
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
        placeOrder: (args: OmitBound<BuildPlaceOrderTxArgs> & OptionalAddress) => Promise<{
            data: `0x${string}`;
            value: bigint;
            to: `0x${string}`;
        }>;
        /**
         * Build a cancel order transaction
         * @param orderDetails List of {@link CancelOrderDetails} to cancel
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns Cancel order transaction data.
         */
        cancelOrder: (args: OmitBound<BuildCancelOrderTxArgs> & OptionalAddress) => {
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        };
        /**
         * Build a claim fee transaction
         * @notice This method only claims for the transaction sending address. OperatingFor is not supported
         * @param marketAddress Market Address to claim fees for
         */
        claimFee: (args: OmitBound<BuildClaimFeeTxArgs> & OptionalAddress) => {
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        };
        /**
         * Build a update intent transaction
         * @param marketAddress Market Address to update intent for
         * @param intent {@link EIP712_Intent}
         * @param signature Signature of the intent
         */
        updateIntent: (args: OmitBound<BuildUpdateIntentTxArgs> & OptionalAddress) => {
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        };
        signed: {
            /**
             * Build a EIP712 paylod for signing a market update intent
             * @param marketAddress Market Address to update intent for
             * @param intent {@link EIP712_Intent}
             * @param signature Signature of the intent
             */
            intent: (args: OmitBound<BuildIntentSigningPayloadArgs> & OptionalAddress) => {
                intent: import("../../constants/eip712").IntentSigningPayload;
            };
            /**
             * Build a EIP712 paylod for signing a take order
             * @param marketAddress Market Address to take for
             * @param amount BigInt - Amount to take
             * @param referrer Address to referrer
             */
            take: (args: OmitBound<BuildTakeSigningPayloadArgs> & OptionalAddress) => {
                take: import("../../constants/eip712").TakeSigningPayload;
            };
            placeOrder: (args: OmitBound<BuildPlaceOrderSigningPayloadArgs> & OptionalAddress) => {
                placeOrder: import("../../constants/eip712").PlaceOrderSigningPayload;
            };
            cancelOrder: (args: OmitBound<BuildCancelOrderSigningPayloadArgs> & OptionalAddress) => {
                cancelOrder: import("../../constants/eip712").CancelOrderSigningPayload;
            };
        };
    };
    get write(): {
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
        modifyPosition: (args: OmitBound<BuildModifyPositionTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
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
        update: (args: OmitBound<BuildUpdateMarketTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
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
        limitOrder: (args: OmitBound<BuildLimitOrderTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
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
        stopLoss: (args: OmitBound<BuildStopLossTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
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
        takeProfit: (args: OmitBound<BuildTakeProfitTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
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
        placeOrder: (args: OmitBound<BuildPlaceOrderTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
        /**
         * Send a cancel order transaction
         * @param orderDetails List of {@link CancelOrderDetails} to cancel
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns Transaction Hash.
         */
        cancelOrder: (args: OmitBound<BuildCancelOrderTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
        /**
         * Send a claim fee transaction
         * @param marketAddress Market Address to claim fees for
         */
        claimFee: (args: OmitBound<BuildClaimFeeTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
        /**
         * Send a update intent transaction
         * @param marketAddress Market Address to update intent for
         * @param intent {@link EIP712_Intent}
         * @param signature Signature of the intent
         */
        updateIntent: (args: OmitBound<BuildUpdateIntentTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
    };
    get sign(): {
        /**
         * Sign a EIP712 intent signing payload
         * @param intent {@link EIP712_Intent}
         * @param signature Signature of the intent
         */
        intent: (args: OmitBound<BuildIntentSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            intent: import("../../constants/eip712").IntentSigningPayload;
        }>;
        /**
         * Sign a EIP712 take signing payload
         * @param take {@link EIP712_Take}
         * @param signature Signature of the take
         */
        take: (args: OmitBound<BuildTakeSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            take: import("../../constants/eip712").TakeSigningPayload;
        }>;
        placeOrder: (args: OmitBound<BuildPlaceOrderSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            placeOrder: import("../../constants/eip712").PlaceOrderSigningPayload;
        }>;
        cancelOrder: (args: OmitBound<BuildCancelOrderSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            cancelOrder: import("../../constants/eip712").CancelOrderSigningPayload;
        }>;
    };
}
export {};
//# sourceMappingURL=index.d.ts.map