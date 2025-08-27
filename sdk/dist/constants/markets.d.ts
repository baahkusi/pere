import { Address, Hex } from 'viem';
import { SupportedChainId } from './network';
export declare enum SupportedMarket {
    btc = "btc",
    eth = "eth",
    arb = "arb",
    sol = "sol",
    pol = "pol",
    tia = "tia",
    rlb = "rlb",
    link = "link",
    bnb = "bnb",
    xrp = "xrp",
    msqBTC = "btc\u00B2",
    cmsqETH = "eth\u00B2",
    jup = "jup",
    xau = "xau",
    mog = "mog",
    jpy = "jpy",
    mkr = "mkr",
    doge = "doge",
    eur = "eur",
    gbp = "gbp",
    meem = "meem",
    aero = "aero",
    popcat = "popcat",
    unknown = "unknown"
}
export declare enum QuoteCurrency {
    usd = "USDC"
}
export declare enum PositionSide {
    maker = "maker",
    long = "long",
    short = "short",
    none = "none"
}
export declare enum PositionStatus {
    open = "open",
    closed = "closed",
    opening = "opening",
    closing = "closing",
    pricing = "pricing",
    resolved = "noValue",
    failed = "failed",
    syncError = "syncError",
    notMargined = "notMargined"
}
export type MarketMetadataType = {
    [market in SupportedMarket]: {
        name: string;
        symbol: string;
        baseCurrency: SupportedMarket;
        quoteCurrency: QuoteCurrency;
        providerId: Hex;
        transform: (value18: bigint) => bigint;
        untransform: (value6: bigint) => bigint;
    };
};
export declare const MarketMetadata: MarketMetadataType;
/**
 * @description Map of market addresses organized by chain ID and market
 */
export declare const ChainMarkets: {
    [chainId in SupportedChainId]: {
        [market in SupportedMarket]?: Address;
    };
};
export declare const chainMarketsWithAddress: (chainId: SupportedChainId, supportedMarkets?: SupportedMarket[]) => {
    market: SupportedMarket;
    marketAddress: `0x${string}`;
}[];
/**
 * Helper to retrieve a market name from a market address
 * @param chainId Chain ID
 * @param address Market Address
 * @returns SupportedMarket {@link SupportedMarket}
 */
export declare const addressToMarket: (chainId: SupportedChainId, address: Address | string) => SupportedMarket;
export declare enum TriggerComparison {
    lte = "lte",
    gte = "gte"
}
export declare enum OrderTypes {
    market = "market",
    limit = "limit",
    stopLoss = "stopLoss",
    takeProfit = "takeProfit"
}
export declare const orderTypes: OrderTypes[];
export declare const triggerOrderTypes: OrderTypes[];
export type ReferrerInterfaceFeeInfo = {
    referralCode: string;
    referralTarget: string;
    share: bigint;
    discount: bigint;
    tier: string;
} | null | undefined;
/**
 * @description Interface fee for the contract
 */
export type InterfaceFee = {
    /**
     * Indicates whether to unwrap the value from DSU to USDC
     */
    unwrap: boolean;
    /**
     * Fee recipient address
     */
    receiver: Address;
    /**
     * Fee amount
     */
    amount: bigint;
};
/**
 * @description Deposit required for placing trigger orders
 */
export declare const OrderExecutionDeposit: bigint;
/**
 * @description When passed to trigger orders, this value will fully close the position.
 */
export declare const TriggerOrderFullCloseMagicValue = 0n;
export declare const IntentTriggerOrderFullCloseMagicValue: bigint;
export type SupportedMarketMapping<V> = Record<SupportedMarket, V>;
//# sourceMappingURL=markets.d.ts.map