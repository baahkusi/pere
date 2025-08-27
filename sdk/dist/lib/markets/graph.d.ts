import { GraphQLClient } from 'graphql-request';
import { Address, PublicClient } from 'viem';
import { PositionSide, SupportedChainId, SupportedMarket, SupportedMarketMapping } from '../../constants';
import { Bucket, PositionDataFragment } from '../../types/gql/graphql';
import { AccumulatorType, RealizedAccumulations } from '../../utils/accumulatorUtils';
import { OracleClients } from '../oracle';
import { MarketOracles, MarketSnapshots } from './chain';
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
export declare function fetchActivePositionsPnl({ markets, marketOracles, marketSnapshots, chainId, address, markToMarket, includeFeesInRealtimePnl, oracleClients, publicClient, graphClient, minBlock, }: {
    markets: SupportedMarket[];
    address: Address;
    marketSnapshots?: MarketSnapshots;
    marketOracles?: MarketOracles;
    markToMarket?: boolean;
    includeFeesInRealtimePnl?: boolean;
    chainId: SupportedChainId;
    oracleClients: OracleClients;
    publicClient: PublicClient;
    graphClient: GraphQLClient;
    minBlock?: number;
}): Promise<SupportedMarketMapping<ProcessedGraphPosition & {
    realtime: bigint;
    realtimePercent: bigint;
    pendingMarkToMarketAccumulations: RealizedAccumulations | null;
}>>;
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
export declare function fetchActivePositionHistory({ market, address, positionId, first, skip, chainId, graphClient, }: {
    market: SupportedMarket;
    address: Address;
    positionId: bigint;
    first?: number;
    skip?: number;
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
}): Promise<any>;
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
export declare function fetchHistoricalPositions({ markets, address, graphClient, chainId, fromTs, toTs, first, skip, maker, minBlock, }: {
    markets: SupportedMarket[];
    address: Address;
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    fromTs?: bigint;
    toTs?: bigint;
    first?: number;
    skip?: number;
    maker?: boolean;
    minBlock?: number;
}): Promise<any>;
type ProcessedGraphPosition = ReturnType<typeof processGraphPosition>;
declare function processGraphPosition(market: SupportedMarket, graphPosition: PositionDataFragment, latestToGlobalRealized?: Record<AccumulatorType, bigint>, pendingPositionData?: {
    currentId: bigint;
    latestPrice: bigint;
    collateral: bigint;
    size: bigint;
    offset: bigint;
    settlementFee: bigint;
    tradeFee: bigint;
    additiveFee: bigint;
}): {
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
    pnlAccumulations: RealizedAccumulations;
    feeAccumulations: import("../../utils").RealizedFeeAccumulations;
    averageEntryPrice: bigint;
    averageExitPrice: bigint;
    liquidation: boolean;
    liquidationFee: bigint;
    totalNotional: bigint;
};
export type SubPositionChange = Awaited<ReturnType<typeof fetchSubPositions>>[number];
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
export declare function fetchSubPositions({ address, market, positionId, first, skip, chainId, graphClient, minBlock, }: {
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    address: Address;
    market: SupportedMarket;
    positionId: bigint;
    first?: number;
    skip?: number;
    minBlock?: number;
}): Promise<any>;
/**
 * Fetches the trade history for a given address
 * @param address Wallet Address
 * @param markets {Optional} List of {@link SupportedMarket} to fetch trade history for
 * @param fromTs start timestamp in seconds (defaults to 7 days before toTs)
 * @param toTs end timestamp in seconds (defaults to now)
 * @param graphClient GraphQLClient
 * @returns User's trade history.
 */
export declare function fetchTradeHistory({ chainId, graphClient, address, markets, fromTs, toTs, minBlock, }: {
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    address: Address;
    markets?: SupportedMarket[];
    fromTs?: bigint;
    toTs?: bigint;
    minBlock?: number;
}): Promise<any>;
export type OpenOrder = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchOpenOrders>>>>[number];
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
export declare function fetchOpenOrders({ chainId, graphClient, markets, address, first, skip, isMaker, minBlock, }: {
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    markets: SupportedMarket[];
    address: Address;
    first?: number;
    skip?: number;
    isMaker?: boolean;
    minBlock?: number;
}): Promise<any>;
/**
 * Fetches the 24hr volume data for a list of market
 * @param markets List of {@link SupportedMarket}
 * @param chainId {@link SupportedChainId}
 * @param graphClient GraphQLClient
 * @returns Markets 24hr volume data.
 */
export declare function fetchMarkets24hrData({ chainId, graphClient, markets, }: {
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    markets: SupportedMarket[];
}): Promise<SupportedMarketMapping<{
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
 * @param graphClient GraphQLClient
 * @param fromTs bigint - Start timestamp in seconds
 * @param toTs bigint - Start timestamp in seconds
 * @param bucket {@link Bucket}
 * @returns Market 7d data.
 */
export declare function fetchMarketsHistoricalData({ chainId, graphClient, markets, fromTs, toTs, bucket, minBlock, }: {
    chainId: SupportedChainId;
    graphClient: GraphQLClient;
    markets: SupportedMarket[];
    fromTs: bigint;
    toTs: bigint;
    bucket?: Bucket;
    minBlock?: number;
}): Promise<SupportedMarketMapping<{
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
export {};
//# sourceMappingURL=graph.d.ts.map