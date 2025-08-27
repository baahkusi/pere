"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFundingAndInterestForSides = exports.computeInterestRate = void 0;
const big6Utils_1 = require("./big6Utils");
const timeUtils_1 = require("./timeUtils");
const computeInterestRate = (curve, utilization) => {
    if (utilization < big6Utils_1.Big6Math.ZERO)
        return curve.minRate;
    if (utilization < curve.targetUtilization)
        return linearInterpolation(big6Utils_1.Big6Math.ZERO, curve.minRate, curve.targetUtilization, curve.targetRate, utilization);
    if (utilization < big6Utils_1.Big6Math.ONE)
        return linearInterpolation(curve.targetUtilization, curve.targetRate, big6Utils_1.Big6Math.ONE, curve.maxRate, utilization);
    return curve.maxRate;
};
exports.computeInterestRate = computeInterestRate;
function linearInterpolation(startX, startY, endX, endY, targetX) {
    if (targetX < startX || targetX > endX)
        throw 'CurveMath18OutOfBoundsError';
    const xRange = endX - startX;
    const yRange = endY - startY;
    const xRatio = big6Utils_1.Big6Math.div(targetX - startX, xRange);
    return big6Utils_1.Big6Math.mul(yRange, xRatio) + startY;
}
/**
 * Calculates the funding for each side of the market
 * @param snapshot
 * @returns The long, short and maker funding + interest rates, along with per side funding and interest rates.
 *          Negative values indicate receiving, positive values indicate paying.
 */
function calculateFundingAndInterestForSides(snapshot) {
    const { global: { pAccumulator }, parameter: { fundingFee, interestFee }, riskParameter: { pController, utilizationCurve, efficiencyLimit }, nextPosition: { maker, long, short, timestamp }, } = snapshot;
    // Funding
    const timeDelta = BigInt((0, timeUtils_1.nowSeconds)()) - timestamp;
    const marketFunding = pAccumulator._value + big6Utils_1.Big6Math.mul(timeDelta, big6Utils_1.Big6Math.div(pAccumulator._skew, pController.k));
    const funding = big6Utils_1.Big6Math.max(big6Utils_1.Big6Math.min(marketFunding, pController.max), pController.min);
    const major = big6Utils_1.Big6Math.max(long, short);
    const minor = big6Utils_1.Big6Math.min(long, short);
    // Interest
    const netUtilization = maker + minor > 0n ? big6Utils_1.Big6Math.div(major, maker + minor) : 0n;
    const efficiencyUtilization = maker > 0n ? big6Utils_1.Big6Math.mul(major, big6Utils_1.Big6Math.div(efficiencyLimit, maker)) : 100n * big6Utils_1.Big6Math.ONE;
    const utilization = big6Utils_1.Big6Math.min(100n * big6Utils_1.Big6Math.ONE, big6Utils_1.Big6Math.max(netUtilization, efficiencyUtilization));
    const interestRate = (0, exports.computeInterestRate)(utilizationCurve, utilization);
    const applicableNotional = big6Utils_1.Big6Math.min(maker, long + short);
    const interest = long + short > 0n ? big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.mul(interestRate, applicableNotional), long + short) : 0n;
    const totalInterestFee = big6Utils_1.Big6Math.mul(interest, interestFee);
    const totalFundingFee = big6Utils_1.Big6Math.mul(big6Utils_1.Big6Math.abs(funding), fundingFee) / 2n;
    const longFunding = funding + totalFundingFee;
    const shortFunding = -funding + totalFundingFee;
    const makerUtil = maker > 0n ? big6Utils_1.Big6Math.max(big6Utils_1.Big6Math.min(big6Utils_1.Big6Math.div(long - short, maker), big6Utils_1.Big6Math.ONE), -big6Utils_1.Big6Math.ONE) : 0n;
    const makerFunding = big6Utils_1.Big6Math.mul(makerUtil, funding);
    const makerFundingFee = big6Utils_1.Big6Math.mul(big6Utils_1.Big6Math.abs(makerUtil), totalFundingFee);
    const makerRate = (makerFunding - makerFundingFee + (interest - totalInterestFee)) * -1n;
    return {
        long: longFunding + interest,
        short: shortFunding + interest,
        maker: makerRate,
        fundingRates: {
            long: funding + totalFundingFee,
            short: -funding + totalFundingFee,
            maker: -1n * (makerFunding - makerFundingFee),
        },
        interestRates: {
            long: interest,
            short: interest,
            maker: -1n * (interest - totalInterestFee),
        },
    };
}
exports.calculateFundingAndInterestForSides = calculateFundingAndInterestForSides;
