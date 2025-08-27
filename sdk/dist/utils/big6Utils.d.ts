export declare const BigOrZero: (value: number | bigint | string | undefined | null) => bigint;
/**
 * Formats 6 decimal bigint values to string
 * @param value
 * @param options - { numSigFigs?: number; useGrouping?: boolean | undefined; minDecimals?: number }
 * @returns
 */
export declare const formatBig6: (value?: bigint, { numSigFigs, useGrouping, minDecimals, }?: {
    numSigFigs?: number | undefined;
    useGrouping?: boolean | undefined;
    minDecimals?: number | undefined;
}) => string;
/**
 * Formats 6 decimal bigint values to USD
 * @param value - bigint
 * @param options - { compact?: boolean; fromUsdc?: boolean; fullPrecision?: boolean }
 * @returns Value formatted in USD.
 */
export declare const formatBig6USDPrice: (value?: bigint, { compact, fromUsdc, fullPrecision, fractionDigits, significantDigits, }?: {
    compact?: boolean | undefined;
    fromUsdc?: boolean | undefined;
    fullPrecision?: boolean | undefined;
    significantDigits?: number | undefined;
    fractionDigits?: number | undefined;
}) => string;
/**
 * Formats 6 decimal bigint values to percentage
 * @param value
 * @param options - { numDecimals?: number }
 * @returns value formatted as percentage.
 */
export declare const formatBig6Percent: (value?: bigint, { numDecimals }?: {
    numDecimals?: number | undefined;
}) => string;
/**
 * Utility class for 6 decimal bigint arithmetic
 */
export declare class Big6Math {
    static FIXED_DECIMALS: number;
    static BASE: bigint;
    static ZERO: bigint;
    static ONE: bigint;
    static mul(a: bigint, b: bigint): bigint;
    static div(a: bigint, b: bigint): bigint;
    static isZero(a: bigint): boolean;
    static eq(a: bigint, b: bigint): boolean;
    static abs(a: bigint): bigint;
    static max(...values: bigint[]): bigint;
    static min(...values: bigint[]): bigint;
    static cmp(a: bigint, b: bigint): number;
    static fromFloatString(a: string, floor?: boolean): bigint;
    static toFloatString(a: bigint): string;
    static toUnsafeFloat(a: bigint): number;
    static fromDecimals(amount: bigint, decimals: number): bigint;
    static to18Decimals(amount: bigint): bigint;
    static max6Decimals: (amount: string) => string;
    static sqrt(a: bigint): bigint;
}
//# sourceMappingURL=big6Utils.d.ts.map