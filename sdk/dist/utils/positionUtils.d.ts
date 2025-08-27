import { Address, Hash, PublicClient, TransactionReceipt } from 'viem';
import { PositionSide, PositionStatus, SupportedChainId, SupportedMarket } from '../constants';
import { MarketSnapshot, MarketSnapshots, UserMarketSnapshot } from '../lib';
export declare const UpdateNoOp: bigint;
export declare function magnitude(maker: bigint | string, long: bigint | string, short: bigint | string): bigint;
export declare function side(maker: bigint | string, long: bigint | string, short: bigint | string): PositionSide;
export declare function sideFromPosition(position?: {
    maker: bigint | string;
    long: bigint | string;
    short: bigint | string;
}): PositionSide;
export declare function orderSize(maker: bigint | string, long: bigint | string, short: bigint | string): bigint;
export declare function calcEfficiency(maker: bigint, major: bigint): bigint;
/**
 * Calculates the liquidation price for a position. Liquidation price is the price at which the collateral falls below
 * the required maintenance.
 * @param params - { marketSnapshot, collateral, position, limitPrice }
 * @returns Liquidation price for long and short positions
 */
export declare const calcLiquidationPrice: ({ marketSnapshot, collateral, position, limitPrice, }: {
    marketSnapshot?: MarketSnapshot | undefined;
    collateral?: bigint | undefined;
    position?: bigint | undefined;
    limitPrice?: bigint | undefined;
}) => {
    long: bigint;
    short: bigint;
} | {
    long: bigint;
    short: bigint;
    longBelowMargin: bigint;
    shortBelowMargin: bigint;
};
/**
 * Calculates the price at which collateral falls below the margin requirement for the position.
 * @param params - { marketSnapshot, collateral, position, limitPrice }
 * @returns Price at which collateral falls below the margin requirement for long and short positions
 */
export declare const calcBelowMarginPrice: ({ marketSnapshot, collateral, position, limitPrice, }: {
    marketSnapshot?: MarketSnapshot | undefined;
    collateral?: bigint | undefined;
    position?: bigint | undefined;
    limitPrice?: bigint | undefined;
}) => {
    long: bigint;
    short: bigint;
};
/**
 * Calculates the leverage for a position
 * @param price - Current price
 * @param position - Position size
 * @param collateral - Collateral
 * @returns Leverage
 */
export declare const calcLeverage: (price: bigint, position: bigint, collateral: bigint) => bigint;
export declare const calcMakerExposure: (userMaker: bigint, globalMaker: bigint, globalLong: bigint, globalShort: bigint) => bigint;
/**
 * Returns whether a position is closed or inactive
 * @param status
 * @returns True if the position is closed or resolved
 */
export declare const closedOrResolved: (status?: PositionStatus) => boolean | undefined;
export declare const calcNotional: (position: bigint, price: bigint) => bigint;
export declare const calcMakerStats: ({ funding, interest, positionFee, positionSize, collateral, }: {
    funding: bigint;
    interest: bigint;
    positionFee: bigint;
    positionSize: bigint;
    collateral: bigint;
}) => {
    fundingAPR: bigint;
    interestAPR: bigint;
    positionFeeAPR: bigint;
};
/**
 * Gets a user's position from a selected market
 */
export declare const getPositionFromSelectedMarket: ({ isMaker, userMarketSnapshots, selectedMarket, selectedMakerMarket, }: {
    isMaker?: boolean | undefined;
    userMarketSnapshots?: MarketSnapshots['user'];
    selectedMarket: SupportedMarket;
    selectedMakerMarket: SupportedMarket;
}) => UserMarketSnapshot | undefined;
/**
 * Helper to get the status of a position
 * @param magnitude
 * @param nextMagnitude
 * @param collateral
 * @param hasVersionError
 * @param priceUpdate
 * @returns Position status {@link PositionStatus}
 */
export declare function getStatusForSnapshot(magnitude: bigint, nextMagnitude: bigint, collateral: bigint, hasVersionError: boolean, priceUpdate?: Address): PositionStatus;
/**
 * Calculates liquidity for a market
 * @param marketSnapshot
 * @returns Available and total liquidity for long and short positions
 */
export declare function calcTakerLiquidity(marketSnapshot: MarketSnapshot): {
    availableLongLiquidity: bigint;
    totalLongLiquidity: bigint;
    availableShortLiquidity: bigint;
    totalShortLiquidity: bigint;
};
export declare function calcLpExposure(marketSnapshot?: MarketSnapshot): {
    lpExposure: bigint;
    formattedLpExposure: string;
    exposureSide: PositionSide;
} | undefined;
export declare const isActivePosition: (userMarketSnapshot?: UserMarketSnapshot) => boolean;
/**
 * Calculates market skew
 * @param marketSnapshot
 * @returns Skew, long skew, and short skew
 */
export declare const calcSkew: (marketSnapshot?: MarketSnapshot) => {
    skew: bigint;
    longSkew: bigint;
    shortSkew: bigint;
} | undefined;
/**
 * Calculates the funding rates for a position organized by time period
 * @param fundingRate
 * @returns Funding rates for hourly, 8-hour, daily, and yearly periods
 */
export declare const calcFundingRates: (fundingRate?: bigint) => {
    hourlyFunding: bigint;
    eightHourFunding: bigint;
    dailyFunding: bigint;
    yearlyFunding: bigint;
};
export type TradeFeeInfo = {
    tradeFee: {
        total: bigint;
        pct: bigint;
    };
    tradeImpact: {
        total: bigint;
        pct: bigint;
        perPosition: bigint;
        components: {
            proportionalFee: bigint;
            linearFee: bigint;
            adiabaticFee: bigint;
        };
    };
};
/**
 * Calculates the trade fee for a position
 * @param positionDelta - Position change
 * @param marketSnapshot - Market snapshot
 * @param isMaker - Is maker
 * @param direction - Position direction
 * @returns Trade fee info
 */
export declare const calcTradeFee: ({ positionDelta, marketSnapshot, side, usePreGlobalPosition, }: {
    positionDelta: bigint;
    marketSnapshot: MarketSnapshot;
    side: PositionSide;
    usePreGlobalPosition?: boolean | undefined;
}) => TradeFeeInfo;
export declare function calcEstExecutionPrice({ indexPrice, side, positionDelta, marketSnapshot, }: {
    positionDelta: bigint;
    indexPrice: bigint;
    side: PositionSide.long | PositionSide.short;
    marketSnapshot: MarketSnapshot;
    referralFee?: bigint;
}): bigint;
export declare function calcInterfaceFee({ positionStatus, latestPrice, positionDelta, referrerInterfaceFeeDiscount, referrerInterfaceFeeShare, interfaceFeeBps, }: {
    positionStatus?: PositionStatus;
    latestPrice: bigint;
    chainId: SupportedChainId;
    positionDelta: bigint;
    side: PositionSide;
    referrerInterfaceFeeDiscount: bigint;
    referrerInterfaceFeeShare: bigint;
    interfaceFeeBps?: bigint;
}): {
    interfaceFeeBps: bigint;
    interfaceFee: bigint;
    referrerFee: bigint;
    ecosystemFee: bigint;
};
export declare function calcTotalPositionChangeFee({ positionStatus, chainId, marketSnapshot, positionDelta, direction, referrerInterfaceFeeDiscount, interfaceFeeBps, settlementFee, }: {
    chainId: SupportedChainId;
    positionDelta: bigint;
    marketSnapshot: MarketSnapshot;
    direction: PositionSide;
    positionStatus?: PositionStatus;
    referrerInterfaceFeeDiscount: bigint;
    interfaceFeeBps?: bigint;
    settlementFee: bigint;
}): {
    total: bigint;
    tradeFeeData: TradeFeeInfo;
    interfaceFee: {
        interfaceFeeBps: bigint;
        interfaceFee: bigint;
        referrerFee: bigint;
        ecosystemFee: bigint;
    };
    settlementFee: bigint;
};
export declare const isFailedClose: (position?: UserMarketSnapshot) => boolean;
export declare const calcMaxLeverage: ({ margin, minMargin, collateral, }?: {
    margin?: bigint | undefined;
    minMargin?: bigint | undefined;
    collateral?: bigint | undefined;
}) => bigint;
export declare const calcExecutionPriceWithImpact: ({ notional, offset, side, size, }: {
    notional: bigint;
    offset: bigint;
    side: PositionSide;
    size: bigint;
}) => bigint;
export declare const orderDelta: ({ longPos, shortPos, longNeg, shortNeg, makerPos, makerNeg, }: {
    longPos: bigint;
    shortPos: bigint;
    longNeg: bigint;
    shortNeg: bigint;
    makerPos: bigint;
    makerNeg: bigint;
}) => bigint;
export declare function waitForOrderSettlement({ publicClient, txHash, timeoutMs, onSettlement, }: {
    publicClient: PublicClient;
    txHash: Hash;
    timeoutMs: number;
    onSettlement?: (res: {
        txReceipt?: TransactionReceipt;
        version?: {
            timestamp: bigint;
            valid: boolean;
            price: bigint;
        };
    }) => void;
}): Promise<TransactionReceipt>;
//# sourceMappingURL=positionUtils.d.ts.map