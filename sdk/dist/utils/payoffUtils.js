"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseUntransform = exports.inverseTransform = exports.decimalUntransform = exports.decimalTransform = exports.centimilliPowerTwoUntransform = exports.centimilliPowerTwoTransform = exports.microPowerTwoUntransform = exports.microPowerTwoTransform = exports.linearUntransform = exports.linearTransform = void 0;
const big6Utils_1 = require("./big6Utils");
const big18Utils_1 = require("./big18Utils");
const linearTransform = (value18) => big18Utils_1.Big18Math.toDecimals(value18, big6Utils_1.Big6Math.FIXED_DECIMALS);
exports.linearTransform = linearTransform;
const linearUntransform = (value6) => big18Utils_1.Big18Math.fromDecimals(value6, big6Utils_1.Big6Math.FIXED_DECIMALS);
exports.linearUntransform = linearUntransform;
const microPowerTwoTransform = (value18) => big18Utils_1.Big18Math.toDecimals(big18Utils_1.Big18Math.div(big18Utils_1.Big18Math.mul(value18, value18), big18Utils_1.Big18Math.fromFloatString('1000000')), big6Utils_1.Big6Math.FIXED_DECIMALS);
exports.microPowerTwoTransform = microPowerTwoTransform;
const microPowerTwoUntransform = (value6) => big18Utils_1.Big18Math.sqrt(big18Utils_1.Big18Math.mul(big18Utils_1.Big18Math.fromDecimals(value6, big18Utils_1.Big18Math.FIXED_DECIMALS), big18Utils_1.Big18Math.fromFloatString('1000000')));
exports.microPowerTwoUntransform = microPowerTwoUntransform;
const centimilliPowerTwoTransform = (value18) => big18Utils_1.Big18Math.toDecimals(big18Utils_1.Big18Math.div(big18Utils_1.Big18Math.mul(value18, value18), big18Utils_1.Big18Math.fromFloatString('100000')), big6Utils_1.Big6Math.FIXED_DECIMALS);
exports.centimilliPowerTwoTransform = centimilliPowerTwoTransform;
const centimilliPowerTwoUntransform = (value6) => big18Utils_1.Big18Math.sqrt(big18Utils_1.Big18Math.mul(big18Utils_1.Big18Math.fromDecimals(value6, big6Utils_1.Big6Math.FIXED_DECIMALS), big18Utils_1.Big18Math.fromFloatString('100000')));
exports.centimilliPowerTwoUntransform = centimilliPowerTwoUntransform;
const decimalTransform = (decimals) => (value18) => {
    const base = big18Utils_1.Big18Math.fromDecimals(10n ** big18Utils_1.Big18Math.abs(decimals), 0);
    return big18Utils_1.Big18Math.toDecimals(decimals < 0n ? big18Utils_1.Big18Math.div(value18, base) : big18Utils_1.Big18Math.mul(value18, base), big6Utils_1.Big6Math.FIXED_DECIMALS);
};
exports.decimalTransform = decimalTransform;
const decimalUntransform = (decimals) => (value6) => {
    const value18 = big18Utils_1.Big18Math.fromDecimals(value6, big6Utils_1.Big6Math.FIXED_DECIMALS);
    const base = big18Utils_1.Big18Math.fromDecimals(10n ** big18Utils_1.Big18Math.abs(decimals), 0);
    return decimals < 0n ? big18Utils_1.Big18Math.mul(value18, base) : big18Utils_1.Big18Math.div(value18, base);
};
exports.decimalUntransform = decimalUntransform;
const inverseTransform = (decimals = 0n) => (value18) => {
    if (big18Utils_1.Big18Math.isZero(value18))
        return 0n;
    const base = big18Utils_1.Big18Math.fromDecimals(10n ** big18Utils_1.Big18Math.abs(decimals), 0);
    const transformed = big18Utils_1.Big18Math.div(big18Utils_1.Big18Math.ONE, value18);
    const scaled = decimals < 0n ? big18Utils_1.Big18Math.div(transformed, base) : big18Utils_1.Big18Math.mul(transformed, base);
    return big18Utils_1.Big18Math.toDecimals(scaled, big6Utils_1.Big6Math.FIXED_DECIMALS);
};
exports.inverseTransform = inverseTransform;
const inverseUntransform = (decimals = 0n) => (value6) => {
    if (big18Utils_1.Big18Math.isZero(value6))
        return 0n;
    return big18Utils_1.Big18Math.fromDecimals((0, exports.inverseTransform)(decimals)(big18Utils_1.Big18Math.fromDecimals(value6, big6Utils_1.Big6Math.FIXED_DECIMALS)), big6Utils_1.Big6Math.FIXED_DECIMALS);
};
exports.inverseUntransform = inverseUntransform;
