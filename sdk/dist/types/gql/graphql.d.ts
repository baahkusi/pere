export declare enum Bucket {
    Hourly = "Hourly",
    Daily = "Daily"
}
export type OrderDataFragment = any;
export type PositionDataFragment = any;
export type QueryLatestAccountPositionVariables = {
    account: string;
    markets: string[];
    latestVersions: string[];
    minBlock?: number | null;
};
export type QueryLatestAccountPositionQuery = {
    marketAccounts: any[];
};
export type QueryMarketAccountTakerPositionsVariables = {
    account: string;
    markets: string[];
    fromTs?: string | null;
    toTs?: string | null;
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryMarketAccountTakerPositionsQuery = {
    positions: any[];
};
export type QueryMarketAccountMakerPositionsVariables = {
    account: string;
    markets: string[];
    fromTs?: string | null;
    toTs?: string | null;
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryMarketAccountMakerPositionsQuery = {
    positions: any[];
};
export type QueryMarketAccountPositionOrdersVariables = {
    account: string;
    market: string;
    positionId: string;
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryMarketAccountPositionOrdersQuery = {
    orders: any[];
};
export type QueryMarketOrdersVariables = {
    account: string;
    fromTs?: string | null;
    toTs?: string | null;
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryMarketOrdersQuery = {
    orders: any[];
};
export type QueryAccountMarketOrdersVariables = {
    account: string;
    markets: string[];
    fromTs?: string | null;
    toTs?: string | null;
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryAccountMarketOrdersQuery = {
    orders: any[];
};
export type QueryMarketAccumulationDataVariables = {
    markets: string[];
    fromTs: string;
    toTs: string;
    bucket: string;
    minBlock?: number | null;
};
export type QueryMarketAccumulationDataQuery = {
    marketData: any[];
};
export type QueryOpenTriggerOrdersVariables = {
    account: string;
    markets: string[];
    side: number[];
    first: number;
    skip: number;
    minBlock?: number | null;
};
export type QueryOpenTriggerOrdersQuery = {
    multiInvokerTriggerOrders: any[];
};
//# sourceMappingURL=graphql.d.ts.map