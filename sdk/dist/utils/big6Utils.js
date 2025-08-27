"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Big6Math = exports.formatBig6Percent = exports.formatBig6USDPrice = exports.formatBig6 = exports.BigOrZero = void 0;
// eslint-disable-next-line no-restricted-imports
const viem_1 = require("viem");
const BigOrZero = (value) => {
    return BigInt(value ?? 0);
};
exports.BigOrZero = BigOrZero;
/**
 * Formats 6 decimal bigint values to string
 * @param value
 * @param options - { numSigFigs?: number; useGrouping?: boolean | undefined; minDecimals?: number }
 * @returns
 */
const formatBig6 = (value = 0n, { numSigFigs = 2, useGrouping = true, minDecimals, } = {}) => {
    return Intl.NumberFormat('en-US', {
        minimumSignificantDigits: numSigFigs,
        maximumSignificantDigits: numSigFigs,
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: minDecimals,
        useGrouping,
        // @ts-ignore
        roundingPriority: 'morePrecision',
    }).format(Big6Math.toUnsafeFloat(value));
};
exports.formatBig6 = formatBig6;
/**
 * Formats 6 decimal bigint values to USD
 * @param value - bigint
 * @param options - { compact?: boolean; fromUsdc?: boolean; fullPrecision?: boolean }
 * @returns Value formatted in USD.
 */
const formatBig6USDPrice = (value = 0n, { compact = false, fromUsdc = false, fullPrecision = false, fractionDigits, significantDigits, } = {}) => {
    // Hardcoding this to return $0.00 because 'roundingPriority' option is not supported in node 18
    // resulting in a hydration error when the resolution occurs on first client render
    if (value === 0n) {
        return '$0.00';
    }
    const valueToFormat = fromUsdc ? Number((0, viem_1.formatUnits)(value, 6)) : Big6Math.toUnsafeFloat(value);
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: compact ? 'compact' : undefined,
        minimumFractionDigits: fractionDigits ?? 2,
        maximumFractionDigits: fractionDigits ?? (fullPrecision ? 6 : 2),
        minimumSignificantDigits: significantDigits ?? (compact ? 2 : 6),
        maximumSignificantDigits: significantDigits ?? (compact ? 2 : 6),
        // @ts-ignore
        roundingPriority: 'morePrecision',
    }).format(valueToFormat);
};
exports.formatBig6USDPrice = formatBig6USDPrice;
/**
 * Formats 6 decimal bigint values to percentage
 * @param value
 * @param options - { numDecimals?: number }
 * @returns value formatted as percentage.
 */
const formatBig6Percent = (value = 0n, { numDecimals = 2 } = {}) => {
    return Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: numDecimals,
        maximumFractionDigits: numDecimals,
    }).format(Big6Math.toUnsafeFloat(value));
};
exports.formatBig6Percent = formatBig6Percent;
/**
 * Utility class for 6 decimal bigint arithmetic
 */
class Big6Math {
    static mul(a, b) {
        return (a * b) / this.BASE;
    }
    static div(a, b) {
        if (b === 0n) {
            console.trace('[Big6Math] Division by zero');
            return 0n;
        }
        return (a * this.BASE) / b;
    }
    static isZero(a) {
        return this.ZERO === a;
    }
    static eq(a, b) {
        return a === b;
    }
    static abs(a) {
        return a < 0n ? -a : a;
    }
    static max(...values) {
        let maxVal = values[0];
        for (const val of values) {
            maxVal = val > maxVal ? val : maxVal;
        }
        return maxVal;
    }
    static min(...values) {
        let minVal = values[0];
        for (const val of values) {
            minVal = val < minVal ? val : minVal;
        }
        return minVal;
    }
    static cmp(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    static fromFloatString(a, floor = false) {
        if (!a || a === '.')
            return 0n;
        if (floor) {
            return (0, viem_1.parseUnits)(this.max6Decimals(a), Big6Math.FIXED_DECIMALS);
        }
        return (0, viem_1.parseUnits)(a.replace(/,/g, ''), Big6Math.FIXED_DECIMALS);
    }
    static toFloatString(a) {
        return (0, viem_1.formatUnits)(a, Big6Math.FIXED_DECIMALS);
    }
    static toUnsafeFloat(a) {
        return parseFloat(Big6Math.toFloatString(a));
    }
    static fromDecimals(amount, decimals) {
        const exponent = BigInt(Big6Math.FIXED_DECIMALS - decimals);
        if (exponent >= 0n)
            return amount * 10n ** exponent;
        return amount / 10n ** (exponent * -1n);
    }
    static to18Decimals(amount) {
        return amount * BigInt('1000000000000');
    }
    static sqrt(a) {
        if (a < 0n) {
            throw 'square root of negative numbers is not supported';
        }
        if (a < 2n) {
            return a;
        }
        function newtonIteration(n, x0) {
            const x1 = (n / x0 + x0) >> 1n;
            if (x0 === x1 || x0 === x1 - 1n) {
                return x0;
            }
            return newtonIteration(n, x1);
        }
        return newtonIteration(a, 1n) * BigInt(10 ** 3);
    }
}
exports.Big6Math = Big6Math;
Big6Math.FIXED_DECIMALS = 6;
Big6Math.BASE = BigInt('1000000');
Big6Math.ZERO = 0n;
Big6Math.ONE = 1n * Big6Math.BASE;
Big6Math.max6Decimals = (amount) => {
    const [first, decimals] = amount.split('.');
    if (!decimals || decimals.length <= 6) {
        return amount;
    }
    return `${first}.${decimals.substring(0, 6)}`;
};
