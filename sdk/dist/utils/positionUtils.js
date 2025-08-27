"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForOrderSettlement = exports.orderDelta = exports.calcExecutionPriceWithImpact = exports.calcMaxLeverage = exports.isFailedClose = exports.calcTotalPositionChangeFee = exports.calcInterfaceFee = exports.calcEstExecutionPrice = exports.calcTradeFee = exports.calcFundingRates = exports.calcSkew = exports.isActivePosition = exports.calcLpExposure = exports.calcTakerLiquidity = exports.getStatusForSnapshot = exports.getPositionFromSelectedMarket = exports.calcMakerStats = exports.calcNotional = exports.closedOrResolved = exports.calcMakerExposure = exports.calcLeverage = exports.calcBelowMarginPrice = exports.calcLiquidationPrice = exports.calcEfficiency = exports.orderSize = exports.sideFromPosition = exports.side = exports.magnitude = exports.UpdateNoOp = void 0;
const viem_1 = require("viem");
const __1 = require("..");
const constants_1 = require("../constants");
const units_1 = require("../constants/units");
const big6Utils_1 = require("./big6Utils");
const big18Utils_1 = require("./big18Utils");
const timeUtils_1 = require("./timeUtils");
exports.UpdateNoOp = units_1.MaxUint256;
function magnitude(maker, long, short) {
    return big6Utils_1.Big6Math.max(BigInt(maker), big6Utils_1.Big6Math.max(BigInt(long), BigInt(short)));
}
exports.magnitude = magnitude;
function side(maker, long, short) {
    if (BigInt(maker) > 0n)
        return constants_1.PositionSide.maker;
    if (BigInt(long) > 0n)
        return constants_1.PositionSide.long;
    if (BigInt(short) > 0n)
        return constants_1.PositionSide.short;
    return constants_1.PositionSide.none;
}
exports.side = side;
function sideFromPosition(position) {
    if (!position)
        return constants_1.PositionSide.none;
    return side(position.maker, position.long, position.short);
}
exports.sideFromPosition = sideFromPosition;
function orderSize(maker, long, short) {
    return BigInt(maker) + BigInt(long) + BigInt(short);
}
exports.orderSize = orderSize;
function calcEfficiency(maker, major) {
    return major > 0n ? big6Utils_1.Big6Math.min(big6Utils_1.Big6Math.div(maker, major), big6Utils_1.Big6Math.ONE) : big6Utils_1.Big6Math.ONE;
}
exports.calcEfficiency = calcEfficiency;
// LiquidationPrice = ((position * abs(price) + collateral) / (position * (1 + maintenanceRatio))
/**
 * Calculates the liquidation price for a position. Liquidation price is the price at which the collateral falls below
 * the required maintenance.
 * @param params - { marketSnapshot, collateral, position, limitPrice }
 * @returns Liquidation price for long and short positions
 */
const calcLiquidationPrice = ({ marketSnapshot, collateral, position, limitPrice, }) => {
    const noValue = { long: 0n, short: 0n };
    if (!collateral || !marketSnapshot || !position)
        return noValue;
    const price = limitPrice ? limitPrice : marketSnapshot.global.latestPrice;
    const notional = (0, exports.calcNotional)(position, price);
    const maintenance = big6Utils_1.Big6Math.mul(notional, marketSnapshot.riskParameter.maintenance);
    // If maintenance is less than minMaintenance, then the liquidation calc is slightly simplified:
    // LiqPrice = ((minMaintenance - collateral) / (position * (long ? 1 : -1)) + price
    if (maintenance < marketSnapshot.riskParameter.minMaintenance) {
        const minMaintenanceLiqPriceLong = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(marketSnapshot.riskParameter.minMaintenance - collateral, position) + price);
        const minMaintenanceLiqPriceShort = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(marketSnapshot.riskParameter.minMaintenance - collateral, position * -1n) + price);
        return { long: minMaintenanceLiqPriceLong, short: minMaintenanceLiqPriceShort };
    }
    const longNumerator = notional - collateral;
    const longDenominator = big6Utils_1.Big6Math.mul(position, marketSnapshot.riskParameter.maintenance - big6Utils_1.Big6Math.ONE);
    const long = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(longNumerator, longDenominator));
    const shortNumerator = collateral + notional;
    const shortDenominator = big6Utils_1.Big6Math.mul(position, marketSnapshot.riskParameter.maintenance + big6Utils_1.Big6Math.ONE);
    const short = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(shortNumerator, shortDenominator));
    const { long: longBelowMargin, short: shortBelowMargin } = (0, exports.calcBelowMarginPrice)({
        marketSnapshot,
        collateral,
        position,
        limitPrice,
    });
    return { long, short, longBelowMargin, shortBelowMargin };
};
exports.calcLiquidationPrice = calcLiquidationPrice;
/**
 * Calculates the price at which collateral falls below the margin requirement for the position.
 * @param params - { marketSnapshot, collateral, position, limitPrice }
 * @returns Price at which collateral falls below the margin requirement for long and short positions
 */
const calcBelowMarginPrice = ({ marketSnapshot, collateral, position, limitPrice, }) => {
    const noValue = { long: 0n, short: 0n };
    if (!collateral || !marketSnapshot || !position)
        return noValue;
    const price = limitPrice ? limitPrice : marketSnapshot.global.latestPrice;
    const notional = (0, exports.calcNotional)(position, price);
    const margin = big6Utils_1.Big6Math.mul(notional, marketSnapshot.riskParameter.margin);
    if (margin < marketSnapshot.riskParameter.minMargin) {
        const minMarginPriceLong = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(marketSnapshot.riskParameter.minMargin - collateral, position) + price);
        const minMarginPriceShort = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(marketSnapshot.riskParameter.minMargin - collateral, position * -1n) + price);
        return { long: minMarginPriceLong, short: minMarginPriceShort };
    }
    const longNumerator = notional - collateral;
    const longDenominator = big6Utils_1.Big6Math.mul(position, marketSnapshot.riskParameter.margin - big6Utils_1.Big6Math.ONE);
    const long = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(longNumerator, longDenominator));
    const shortNumerator = collateral + notional;
    const shortDenominator = big6Utils_1.Big6Math.mul(position, marketSnapshot.riskParameter.margin + big6Utils_1.Big6Math.ONE);
    const short = big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(shortNumerator, shortDenominator));
    return { long, short };
};
exports.calcBelowMarginPrice = calcBelowMarginPrice;
/**
 * Calculates the leverage for a position
 * @param price - Current price
 * @param position - Position size
 * @param collateral - Collateral
 * @returns Leverage
 */
const calcLeverage = (price, position, collateral) => {
    if (big6Utils_1.Big6Math.isZero(collateral))
        return 0n;
    return big6Utils_1.Big6Math.div((0, exports.calcNotional)(position, price), collateral);
};
exports.calcLeverage = calcLeverage;
const calcMakerExposure = (userMaker, globalMaker, globalLong, globalShort) => {
    if (globalMaker === 0n)
        return 0n;
    const exposure = big6Utils_1.Big6Math.div(globalShort - globalLong, globalMaker);
    const cappedExposure = big6Utils_1.Big6Math.max(big6Utils_1.Big6Math.min(exposure, big6Utils_1.Big6Math.ONE), -1n * big6Utils_1.Big6Math.ONE);
    return big6Utils_1.Big6Math.mul(userMaker, cappedExposure);
};
exports.calcMakerExposure = calcMakerExposure;
/**
 * Returns whether a position is closed or inactive
 * @param status
 * @returns True if the position is closed or resolved
 */
const closedOrResolved = (status) => status && [constants_1.PositionStatus.closed, constants_1.PositionStatus.resolved].includes(status);
exports.closedOrResolved = closedOrResolved;
const calcNotional = (position, price) => {
    return big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.mul(position, price));
};
exports.calcNotional = calcNotional;
const calcMakerStats = ({ funding, interest, positionFee, positionSize, collateral, }) => {
    if (collateral === 0n)
        return { fundingAPR: 0n, interestAPR: 0n, positionFeeAPR: 0n };
    const fundingAccumulated = big6Utils_1.Big6Math.mul(funding, positionSize);
    const interestAccumulated = big6Utils_1.Big6Math.mul(interest, positionSize);
    const positionFeeAccumulated = big6Utils_1.Big6Math.mul(positionFee, positionSize);
    return {
        fundingAPR: big6Utils_1.Big6Math.div(fundingAccumulated * 52n, collateral),
        interestAPR: big6Utils_1.Big6Math.div(interestAccumulated * 52n, collateral),
        positionFeeAPR: big6Utils_1.Big6Math.div(positionFeeAccumulated * 52n, collateral),
    };
};
exports.calcMakerStats = calcMakerStats;
/**
 * Gets a user's position from a selected market
 */
const getPositionFromSelectedMarket = ({ isMaker, userMarketSnapshots, selectedMarket, selectedMakerMarket, }) => {
    if (!userMarketSnapshots)
        return undefined;
    if (isMaker) {
        // TODO: we need to check also if the user has collateral
        const userMarketSnapshot = userMarketSnapshots[selectedMakerMarket];
        return [userMarketSnapshot.side, userMarketSnapshot.nextSide].includes(constants_1.PositionSide.maker)
            ? userMarketSnapshot
            : undefined;
    }
    const userMarketSnapshot = userMarketSnapshots[selectedMarket];
    return [constants_1.PositionSide.long, constants_1.PositionSide.short].includes(userMarketSnapshot.side) ||
        [constants_1.PositionSide.long, constants_1.PositionSide.short].includes(userMarketSnapshot.nextSide)
        ? userMarketSnapshot
        : undefined;
};
exports.getPositionFromSelectedMarket = getPositionFromSelectedMarket;
/**
 * Helper to get the status of a position
 * @param magnitude
 * @param nextMagnitude
 * @param collateral
 * @param hasVersionError
 * @param priceUpdate
 * @returns Position status {@link PositionStatus}
 */
function getStatusForSnapshot(magnitude, nextMagnitude, collateral, hasVersionError, priceUpdate) {
    if (hasVersionError && magnitude !== nextMagnitude)
        return constants_1.PositionStatus.failed;
    if (priceUpdate === (0, viem_1.encodeErrorResult)({ abi: __1.MarketAbi, errorName: 'MarketInsufficientMarginError' }))
        return constants_1.PositionStatus.notMargined;
    if (priceUpdate !== '0x')
        return constants_1.PositionStatus.syncError;
    if (big6Utils_1.Big6Math.isZero(magnitude) && !big6Utils_1.Big6Math.isZero(nextMagnitude))
        return constants_1.PositionStatus.opening;
    if (!big6Utils_1.Big6Math.isZero(magnitude) && big6Utils_1.Big6Math.eq(magnitude, nextMagnitude))
        return constants_1.PositionStatus.open;
    if (!big6Utils_1.Big6Math.isZero(magnitude) && big6Utils_1.Big6Math.isZero(nextMagnitude))
        return constants_1.PositionStatus.closing;
    if (!big6Utils_1.Big6Math.isZero(magnitude) && !big6Utils_1.Big6Math.eq(magnitude, nextMagnitude))
        return constants_1.PositionStatus.pricing;
    if (big18Utils_1.Big18Math.isZero(magnitude) && big18Utils_1.Big18Math.isZero(nextMagnitude) && !big18Utils_1.Big18Math.isZero(collateral))
        return constants_1.PositionStatus.closed;
    return constants_1.PositionStatus.resolved;
}
exports.getStatusForSnapshot = getStatusForSnapshot;
/**
 * Calculates liquidity for a market
 * @param marketSnapshot
 * @returns Available and total liquidity for long and short positions
 */
function calcTakerLiquidity(marketSnapshot) {
    const { nextPosition: { long, short, maker }, riskParameter: { efficiencyLimit }, } = marketSnapshot;
    const makerEfficiencyLimit = big6Utils_1.Big6Math.div(maker, efficiencyLimit);
    const availableLongLiquidity = big6Utils_1.Big6Math.min(short + maker - long, makerEfficiencyLimit - long);
    const totalLongLiquidity = big6Utils_1.Big6Math.min(short + maker, makerEfficiencyLimit);
    const availableShortLiquidity = big6Utils_1.Big6Math.min(long + maker - short, makerEfficiencyLimit - short);
    const totalShortLiquidity = big6Utils_1.Big6Math.min(long + maker, makerEfficiencyLimit);
    return {
        availableLongLiquidity: big6Utils_1.Big6Math.max(availableLongLiquidity, 0n),
        totalLongLiquidity,
        availableShortLiquidity: big6Utils_1.Big6Math.max(availableShortLiquidity, 0n),
        totalShortLiquidity,
    };
}
exports.calcTakerLiquidity = calcTakerLiquidity;
function calcLpExposure(marketSnapshot) {
    if (!marketSnapshot)
        return undefined;
    const { majorSide, minorSide, nextPosition: { long, short, maker }, } = marketSnapshot;
    const majorPosition = majorSide === constants_1.PositionSide.long ? long : short;
    const minorPosition = majorSide === constants_1.PositionSide.long ? short : long;
    const lpExposure = maker > 0n ? big6Utils_1.Big6Math.min(big6Utils_1.Big6Math.div(majorPosition - minorPosition, maker), big6Utils_1.Big6Math.ONE) : 0n;
    return {
        lpExposure: lpExposure,
        formattedLpExposure: (0, big6Utils_1.formatBig6Percent)(lpExposure, { numDecimals: 2 }),
        exposureSide: minorSide,
    };
}
exports.calcLpExposure = calcLpExposure;
const isActivePosition = (userMarketSnapshot) => {
    return userMarketSnapshot?.status !== constants_1.PositionStatus.resolved;
};
exports.isActivePosition = isActivePosition;
/**
 * Calculates market skew
 * @param marketSnapshot
 * @returns Skew, long skew, and short skew
 */
const calcSkew = (marketSnapshot) => {
    if (!marketSnapshot)
        return undefined;
    const { nextPosition: { long, short }, } = marketSnapshot;
    const nextMajor = long > short ? long : short;
    const skew = nextMajor > 0n ? big6Utils_1.Big6Math.div(long - short, nextMajor) : 0n;
    const totalTaker = long + short;
    const longSkew = totalTaker > 0n ? big6Utils_1.Big6Math.div(long, totalTaker) : 0n;
    const shortSkew = totalTaker > 0n ? big6Utils_1.Big6Math.div(short, totalTaker) : 0n;
    return {
        skew,
        longSkew,
        shortSkew,
    };
};
exports.calcSkew = calcSkew;
/**
 * Calculates the funding rates for a position organized by time period
 * @param fundingRate
 * @returns Funding rates for hourly, 8-hour, daily, and yearly periods
 */
const calcFundingRates = (fundingRate = 0n) => {
    const rate = big6Utils_1.Big6Math.div(fundingRate, timeUtils_1.Year);
    const hourlyFunding = big6Utils_1.Big6Math.mul(rate, timeUtils_1.Hour);
    const eightHourFunding = big6Utils_1.Big6Math.mul(rate, timeUtils_1.Hour * 8n);
    const dailyFunding = big6Utils_1.Big6Math.mul(rate, timeUtils_1.Day);
    return {
        hourlyFunding,
        eightHourFunding,
        dailyFunding,
        yearlyFunding: fundingRate,
    };
};
exports.calcFundingRates = calcFundingRates;
/**
 * Calculates the trade fee for a position
 * @param positionDelta - Position change
 * @param marketSnapshot - Market snapshot
 * @param isMaker - Is maker
 * @param direction - Position direction
 * @returns Trade fee info
 */
const calcTradeFee = ({ positionDelta, marketSnapshot, side, usePreGlobalPosition = false, }) => {
    let tradeFeeInfo = {
        tradeFee: {
            total: 0n,
            pct: 0n,
        },
        tradeImpact: {
            total: 0n,
            pct: 0n,
            perPosition: 0n,
            components: {
                proportionalFee: 0n,
                linearFee: 0n,
                adiabaticFee: 0n,
            },
        },
    };
    if (!marketSnapshot || !positionDelta)
        return tradeFeeInfo;
    const { riskParameter: { takerFee, makerFee }, nextPosition: { long, short }, pre: { position: { long: preLong, short: preShort }, }, parameter: { makerFee: marketMakerFee, takerFee: marketTakerFee }, global: { latestPrice }, makerTotal, takerTotal, } = marketSnapshot;
    const notional = (0, exports.calcNotional)(positionDelta, latestPrice);
    if (side === constants_1.PositionSide.maker) {
        const adjustedMakerTotal = makerTotal + big6Utils_1.Big6Math.abs(positionDelta);
        const makerProportionalFeeRate = big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.mul(makerFee.proportionalFee, adjustedMakerTotal), makerFee.scale);
        const makerProportionalFee = big6Utils_1.Big6Math.mul(notional, makerProportionalFeeRate);
        const makerLinearFee = big6Utils_1.Big6Math.mul(notional, makerFee.linearFee);
        const tradeFee = big6Utils_1.Big6Math.mul(marketMakerFee, notional);
        const tradeFeePct = notional !== 0n ? big6Utils_1.Big6Math.div(tradeFee, notional) : 0n;
        const tradeImpact = makerLinearFee + makerProportionalFee;
        const perPositionImpact = positionDelta !== 0n ? big6Utils_1.Big6Math.div(tradeImpact, big6Utils_1.Big6Math.abs(positionDelta)) : 0n;
        const tradeImpactPct = notional !== 0n ? big6Utils_1.Big6Math.div(tradeImpact, notional) : 0n;
        tradeFeeInfo = {
            tradeFee: {
                total: tradeFee,
                pct: tradeFeePct,
            },
            tradeImpact: {
                total: tradeImpact,
                pct: tradeImpactPct,
                perPosition: perPositionImpact,
                components: {
                    linearFee: makerLinearFee,
                    proportionalFee: makerProportionalFee,
                    adiabaticFee: 0n,
                },
            },
        };
        return tradeFeeInfo;
    }
    const globalLong = usePreGlobalPosition ? preLong : long;
    const globalShort = usePreGlobalPosition ? preShort : short;
    const adjustedLong = side === constants_1.PositionSide.long ? globalLong + positionDelta : globalLong;
    const adjustedShort = side === constants_1.PositionSide.short ? globalShort + positionDelta : globalShort;
    const currentSkew = globalLong - globalShort;
    const newSkew = adjustedLong - adjustedShort;
    const takerAdiabaticFeeNumerator = big6Utils_1.Big6Math.mul(takerFee.adiabaticFee, newSkew + currentSkew);
    const signedNotional = big6Utils_1.Big6Math.mul(positionDelta * (side === constants_1.PositionSide.short ? -1n : 1n), latestPrice);
    const takerAdiabaticFee = big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.mul(signedNotional, takerAdiabaticFeeNumerator), takerFee.scale * 2n);
    const adjustedTakerTotal = takerTotal + big6Utils_1.Big6Math.abs(positionDelta);
    const takerProportionalFeeNumerator = big6Utils_1.Big6Math.mul(takerFee.proportionalFee, adjustedTakerTotal);
    const takerProportionalFee = big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.mul(notional, takerProportionalFeeNumerator), takerFee.scale);
    const takerLinearFee = big6Utils_1.Big6Math.mul(notional, takerFee.linearFee);
    const tradeFee = big6Utils_1.Big6Math.mul(marketTakerFee, notional);
    const tradeFeePct = notional !== 0n ? big6Utils_1.Big6Math.div(tradeFee, notional) : 0n;
    const tradeImpact = takerLinearFee + takerProportionalFee + takerAdiabaticFee;
    const perPositionImpact = positionDelta !== 0n ? big6Utils_1.Big6Math.div(tradeImpact, big6Utils_1.Big6Math.abs(positionDelta)) : 0n;
    const tradeImpactPct = notional !== 0n ? big6Utils_1.Big6Math.div(tradeImpact, notional) : 0n;
    tradeFeeInfo = {
        tradeFee: {
            total: tradeFee,
            pct: tradeFeePct,
        },
        tradeImpact: {
            total: tradeImpact,
            pct: tradeImpactPct,
            perPosition: perPositionImpact,
            components: {
                linearFee: takerLinearFee,
                proportionalFee: takerProportionalFee,
                adiabaticFee: takerAdiabaticFee,
            },
        },
    };
    return tradeFeeInfo;
};
exports.calcTradeFee = calcTradeFee;
function calcEstExecutionPrice({ indexPrice, side, positionDelta, marketSnapshot, }) {
    const { tradeImpact } = (0, exports.calcTradeFee)({
        positionDelta,
        side: side,
        marketSnapshot,
    });
    const perPositionImpact = tradeImpact.perPosition;
    const directionalPriceImpact = positionDelta > 0n ? perPositionImpact : -perPositionImpact;
    return side === constants_1.PositionSide.long ? indexPrice + directionalPriceImpact : indexPrice - directionalPriceImpact;
}
exports.calcEstExecutionPrice = calcEstExecutionPrice;
function calcInterfaceFee({ positionStatus = constants_1.PositionStatus.resolved, latestPrice, positionDelta, referrerInterfaceFeeDiscount, referrerInterfaceFeeShare, interfaceFeeBps, }) {
    if (!latestPrice || !positionDelta || !interfaceFeeBps || positionStatus === constants_1.PositionStatus.failed) {
        return {
            interfaceFeeBps: interfaceFeeBps ?? 0n,
            interfaceFee: 0n,
            referrerFee: 0n,
            ecosystemFee: 0n,
        };
    }
    const notional = (0, exports.calcNotional)(positionDelta, latestPrice);
    const discountedFeeAmount = interfaceFeeBps - big6Utils_1.Big6Math.mul(interfaceFeeBps, referrerInterfaceFeeDiscount);
    const discountedInterfaceFee = big6Utils_1.Big6Math.mul(notional, discountedFeeAmount);
    const referrerFee = big6Utils_1.Big6Math.mul(discountedInterfaceFee, referrerInterfaceFeeShare);
    const ecosystemFee = discountedInterfaceFee - referrerFee;
    return {
        interfaceFeeBps: discountedFeeAmount,
        interfaceFee: discountedInterfaceFee,
        referrerFee,
        ecosystemFee,
    };
}
exports.calcInterfaceFee = calcInterfaceFee;
// Returns the tradeFee + interfaceFee + settlementFee
function calcTotalPositionChangeFee({ positionStatus = constants_1.PositionStatus.resolved, chainId, marketSnapshot, positionDelta, direction, referrerInterfaceFeeDiscount, interfaceFeeBps, settlementFee, }) {
    const tradeFeeData = (0, exports.calcTradeFee)({
        positionDelta,
        marketSnapshot,
        side: direction,
    });
    const interfaceFee = calcInterfaceFee({
        positionStatus,
        latestPrice: marketSnapshot?.global.latestPrice ?? 0n,
        chainId,
        positionDelta,
        side: direction,
        referrerInterfaceFeeDiscount,
        referrerInterfaceFeeShare: 0n,
        interfaceFeeBps,
    });
    return {
        total: tradeFeeData.tradeFee.total + tradeFeeData.tradeImpact.total + interfaceFee.interfaceFee + settlementFee,
        tradeFeeData,
        interfaceFee,
        settlementFee,
    };
}
exports.calcTotalPositionChangeFee = calcTotalPositionChangeFee;
const isFailedClose = (position) => {
    if (!position)
        return false;
    return (position.status === constants_1.PositionStatus.failed &&
        !big6Utils_1.Big6Math.isZero(position.magnitude) &&
        big6Utils_1.Big6Math.isZero(position.nextMagnitude));
};
exports.isFailedClose = isFailedClose;
/* MaxLeverage is the minimum of the following:
  min(100x, 1/margin, collateral/minCollateralForFullRange * 1/margin)
*/
const calcMaxLeverage = ({ margin, minMargin, collateral, } = {}) => {
    if (!margin)
        return big6Utils_1.Big6Math.ONE * 10n;
    const marginMaxLeverage = big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.ONE, margin);
    const minCollateralForFullRange = big6Utils_1.Big6Math.mul(minMargin ?? 0n, marginMaxLeverage);
    const collateralMaxLeverage = !!collateral
        ? big6Utils_1.Big6Math.div(big6Utils_1.Big6Math.mul(collateral, marginMaxLeverage), minCollateralForFullRange)
        : marginMaxLeverage;
    const maxLeverage = big6Utils_1.Big6Math.min(marginMaxLeverage, collateralMaxLeverage);
    return big6Utils_1.Big6Math.max(maxLeverage, big6Utils_1.Big6Math.ONE);
};
exports.calcMaxLeverage = calcMaxLeverage;
const calcExecutionPriceWithImpact = ({ notional, offset, side, size, }) => {
    let numerator = notional;
    if (side === constants_1.PositionSide.long)
        numerator = numerator - (size < 0n ? -offset : offset);
    if (side === constants_1.PositionSide.short)
        numerator = numerator + (size < 0n ? -offset : offset);
    return size !== 0n ? big6Utils_1.Big6Math.abs(big6Utils_1.Big6Math.div(numerator, size)) : 0n;
};
exports.calcExecutionPriceWithImpact = calcExecutionPriceWithImpact;
const orderDelta = ({ longPos, shortPos, longNeg, shortNeg, makerPos, makerNeg, }) => {
    return longPos - longNeg + (shortNeg - shortPos) + (makerPos - makerNeg);
};
exports.orderDelta = orderDelta;
async function waitForOrderSettlement({ publicClient, txHash, timeoutMs = 30000, onSettlement, }) {
    return new Promise(async (resolve, reject) => {
        let timeoutId;
        let unwatch;
        const cleanup = () => {
            if (timeoutId)
                clearTimeout(timeoutId);
            if (unwatch)
                unwatch();
        };
        try {
            // Wait for transaction receipt
            const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
            const logs = (0, viem_1.parseEventLogs)({ logs: receipt.logs, abi: __1.OracleAbi, eventName: 'OracleProviderVersionRequested' });
            const oracleVersionRequestedEvent = logs.at(0);
            if (!oracleVersionRequestedEvent) {
                throw new Error('OracleVersionRequested event not found');
            }
            const { version } = oracleVersionRequestedEvent.args;
            unwatch = publicClient.watchContractEvent({
                address: oracleVersionRequestedEvent.address,
                abi: __1.OracleAbi,
                eventName: 'OracleProviderVersionFulfilled',
                onLogs: (logs) => {
                    const versionFulfilledEvent = logs.at(0);
                    if (versionFulfilledEvent?.args?.version?.timestamp === version) {
                        onSettlement?.({ txReceipt: receipt, version: versionFulfilledEvent?.args?.version });
                        cleanup();
                        resolve(receipt);
                    }
                },
            });
            timeoutId = setTimeout(() => {
                cleanup();
                reject(new Error('Timeout waiting for OracleVersionFulfilled event'));
            }, timeoutMs);
        }
        catch (error) {
            cleanup();
            reject(error);
        }
    });
}
exports.waitForOrderSettlement = waitForOrderSettlement;
