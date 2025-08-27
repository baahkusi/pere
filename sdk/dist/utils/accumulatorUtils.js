"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRealizedAccumulations = exports.accumulateRealizedFees = exports.FeeAccumulatorTypes = exports.accumulateRealized = exports.AccumulatorTypes = void 0;
const arrayUtils_1 = require("./arrayUtils");
exports.AccumulatorTypes = [
    {
        type: 'offset',
        realizedKey: `collateral_subAccumulation_offset`,
        unrealizedKey: { maker: ``, long: ``, short: `` },
    },
    {
        type: 'pnl',
        realizedKey: `collateral_subAccumulation_pnl`,
        unrealizedKey: { maker: `pnlMaker`, long: `pnlLong`, short: `pnlShort` },
    },
    {
        type: 'funding',
        realizedKey: `collateral_subAccumulation_funding`,
        unrealizedKey: { maker: `fundingMaker`, long: `fundingLong`, short: `fundingShort` },
    },
    {
        type: 'interest',
        realizedKey: `collateral_subAccumulation_interest`,
        unrealizedKey: { maker: `interestMaker`, long: `interestLong`, short: `interestShort` },
    },
    {
        type: 'makerPositionFee',
        realizedKey: `collateral_subAccumulation_makerPositionFee`,
        unrealizedKey: { maker: `positionFeeMaker`, long: ``, short: `` },
    },
    {
        type: 'makerExposure',
        realizedKey: `collateral_subAccumulation_makerExposure`,
        unrealizedKey: { maker: `exposureMaker`, long: ``, short: `` },
    },
    {
        type: 'priceOverride',
        realizedKey: `collateral_subAccumulation_priceOverride`,
        unrealizedKey: { maker: ``, long: ``, short: `` },
    },
];
function accumulateRealized(payload) {
    return exports.AccumulatorTypes.reduce((acc, { realizedKey, type }) => {
        const total = (0, arrayUtils_1.sum)(payload.map((p) => BigInt(p[realizedKey])));
        return { ...acc, [type]: total };
    }, {});
}
exports.accumulateRealized = accumulateRealized;
exports.FeeAccumulatorTypes = [
    {
        type: 'trade',
        realizedKey: `fee_subAccumulation_trade`,
    },
    {
        type: 'settlement',
        realizedKey: `fee_subAccumulation_settlement`,
    },
    {
        type: 'additive',
        realizedKey: `fee_subAccumulation_additive`,
    },
    {
        type: 'triggerOrder',
        realizedKey: `fee_subAccumulation_triggerOrder`,
    },
    {
        type: 'liquidation',
        realizedKey: `fee_subAccumulation_liquidation`,
    },
];
function accumulateRealizedFees(payload) {
    return exports.FeeAccumulatorTypes.reduce((acc, { realizedKey, type }) => {
        const total = (0, arrayUtils_1.sum)(payload.map((p) => BigInt(p[realizedKey])));
        return { ...acc, [type]: total };
    }, {});
}
exports.accumulateRealizedFees = accumulateRealizedFees;
exports.DefaultRealizedAccumulations = exports.AccumulatorTypes.reduce((acc, { type }) => ({ ...acc, [type]: 0n }), {});
