export declare const formatBig18: (value?: bigint, { numSigFigs, useGrouping, minDecimals, }?: {
    numSigFigs?: number | undefined;
    useGrouping?: boolean | undefined;
    minDecimals?: number | undefined;
}) => string;
export declare const formatBig18USDPrice: (value?: bigint, { compact, fromUsdc, fractionDigits, significantDigits, }?: {
    compact?: boolean | undefined;
    fromUsdc?: boolean | undefined;
    fractionDigits?: number | undefined;
    significantDigits?: number | undefined;
}) => string;
export declare const formatBig18Percent: (value?: bigint, { numDecimals }?: {
    numDecimals?: number | undefined;
}) => string;
export declare class Big18Math {
    static FIXED_DECIMALS: number;
    static BASE: bigint;
    static ZERO: bigint;
    static ONE: bigint;
    static TWO: bigint;
    static mul(a: bigint, b: bigint): bigint;
    static div(a: bigint, b: bigint): bigint;
    static add(a: bigint, b: bigint): bigint;
    static sub(a: bigint, b: bigint): bigint;
    static isZero(a: bigint): boolean;
    static eq(a: bigint, b: bigint): boolean;
    static abs(a: bigint): bigint;
    static max(a: bigint, b: bigint): bigint;
    static min(a: bigint, b: bigint): bigint;
    static cmp(a: bigint, b: bigint): number;
    static fromFloatString(a: string): bigint;
    static toFloatString(a: bigint): string;
    static toUnsafeFloat(a: bigint): number;
    static fromDecimals(amount: bigint, decimals: number): bigint;
    static toDecimals(amount: bigint, decimals: number): bigint;
    static sqrt(a: bigint): bigint;
}
//# sourceMappingURL=big18Utils.d.ts.map