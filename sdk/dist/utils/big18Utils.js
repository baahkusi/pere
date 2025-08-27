"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Big18Math = exports.formatBig18Percent = exports.formatBig18USDPrice = exports.formatBig18 = void 0;
// eslint-disable-next-line no-restricted-imports
const viem_1 = require("viem");
const units_1 = require("../constants/units");
const formatBig18 = (value = 0n, { numSigFigs = 2, useGrouping = true, minDecimals, } = {}) => {
    return Intl.NumberFormat('en-US', {
        minimumSignificantDigits: numSigFigs,
        maximumSignificantDigits: numSigFigs,
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: minDecimals,
        useGrouping,
        // @ts-ignore
        roundingPriority: 'morePrecision',
    }).format(Big18Math.toUnsafeFloat(value));
};
exports.formatBig18 = formatBig18;
// Formats an 18 decimal bigint as a USD price
const formatBig18USDPrice = (value = 0n, { compact = false, fromUsdc = false, fractionDigits, significantDigits, } = {}) => {
    if (value === 0n) {
        return '$0.00';
    }
    const valueToFormat = fromUsdc ? Number((0, viem_1.formatUnits)(value, 6)) : Big18Math.toUnsafeFloat(value);
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: compact ? 'compact' : undefined,
        minimumFractionDigits: fractionDigits ?? (compact ? 1 : 2),
        maximumFractionDigits: fractionDigits ?? (compact ? 1 : 2),
        minimumSignificantDigits: significantDigits ?? (compact ? 2 : 6),
        maximumSignificantDigits: significantDigits ?? (compact ? 2 : 6),
        // @ts-ignore
        roundingPriority: 'morePrecision',
    }).format(valueToFormat);
};
exports.formatBig18USDPrice = formatBig18USDPrice;
// Formats an 18 decimal bigint as a USD price
const formatBig18Percent = (value = 0n, { numDecimals = 2 } = {}) => {
    return Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: numDecimals,
        maximumFractionDigits: numDecimals,
    }).format(Big18Math.toUnsafeFloat(value));
};
exports.formatBig18Percent = formatBig18Percent;
class Big18Math {
    static mul(a, b) {
        return (a * b) / this.BASE;
    }
    static div(a, b) {
        return (a * this.BASE) / b;
    }
    static add(a, b) {
        return a + b;
    }
    static sub(a, b) {
        return a - b;
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
    static max(a, b) {
        return a >= b ? a : b;
    }
    static min(a, b) {
        return a <= b ? a : b;
    }
    static cmp(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    static fromFloatString(a) {
        if (!a || a === '.')
            return 0n;
        return (0, viem_1.parseEther)(a.replace(/,/g, ''));
    }
    static toFloatString(a) {
        return (0, viem_1.formatUnits)(a, Big18Math.FIXED_DECIMALS);
    }
    static toUnsafeFloat(a) {
        return parseFloat(Big18Math.toFloatString(a));
    }
    static fromDecimals(amount, decimals) {
        return amount * 10n ** BigInt(Big18Math.FIXED_DECIMALS - decimals);
    }
    static toDecimals(amount, decimals) {
        return amount / 10n ** BigInt(Big18Math.FIXED_DECIMALS - decimals);
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
        return newtonIteration(a, 1n) * BigInt(10 ** 9);
    }
}
exports.Big18Math = Big18Math;
Big18Math.FIXED_DECIMALS = 18;
Big18Math.BASE = units_1.WeiPerEther;
Big18Math.ZERO = 0n;
Big18Math.ONE = 1n * Big18Math.BASE;
Big18Math.TWO = 2n * Big18Math.BASE;
