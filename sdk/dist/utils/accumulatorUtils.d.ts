export type AccumulatorType = (typeof AccumulatorTypes)[number]['type'];
export declare const AccumulatorTypes: readonly [{
    readonly type: "offset";
    readonly realizedKey: "collateral_subAccumulation_offset";
    readonly unrealizedKey: {
        readonly maker: "";
        readonly long: "";
        readonly short: "";
    };
}, {
    readonly type: "pnl";
    readonly realizedKey: "collateral_subAccumulation_pnl";
    readonly unrealizedKey: {
        readonly maker: "pnlMaker";
        readonly long: "pnlLong";
        readonly short: "pnlShort";
    };
}, {
    readonly type: "funding";
    readonly realizedKey: "collateral_subAccumulation_funding";
    readonly unrealizedKey: {
        readonly maker: "fundingMaker";
        readonly long: "fundingLong";
        readonly short: "fundingShort";
    };
}, {
    readonly type: "interest";
    readonly realizedKey: "collateral_subAccumulation_interest";
    readonly unrealizedKey: {
        readonly maker: "interestMaker";
        readonly long: "interestLong";
        readonly short: "interestShort";
    };
}, {
    readonly type: "makerPositionFee";
    readonly realizedKey: "collateral_subAccumulation_makerPositionFee";
    readonly unrealizedKey: {
        readonly maker: "positionFeeMaker";
        readonly long: "";
        readonly short: "";
    };
}, {
    readonly type: "makerExposure";
    readonly realizedKey: "collateral_subAccumulation_makerExposure";
    readonly unrealizedKey: {
        readonly maker: "exposureMaker";
        readonly long: "";
        readonly short: "";
    };
}, {
    readonly type: "priceOverride";
    readonly realizedKey: "collateral_subAccumulation_priceOverride";
    readonly unrealizedKey: {
        readonly maker: "";
        readonly long: "";
        readonly short: "";
    };
}];
export type RealizedAccumulations = Record<(typeof AccumulatorTypes)[number]['type'], bigint>;
export declare function accumulateRealized(payload: Record<(typeof AccumulatorTypes)[number]['realizedKey'], bigint | string>[]): RealizedAccumulations;
export type FeeAccumulatorType = (typeof FeeAccumulatorTypes)[number]['type'];
export type RealizedFeeAccumulations = Record<(typeof FeeAccumulatorTypes)[number]['type'], bigint>;
export declare const FeeAccumulatorTypes: readonly [{
    readonly type: "trade";
    readonly realizedKey: "fee_subAccumulation_trade";
}, {
    readonly type: "settlement";
    readonly realizedKey: "fee_subAccumulation_settlement";
}, {
    readonly type: "additive";
    readonly realizedKey: "fee_subAccumulation_additive";
}, {
    readonly type: "triggerOrder";
    readonly realizedKey: "fee_subAccumulation_triggerOrder";
}, {
    readonly type: "liquidation";
    readonly realizedKey: "fee_subAccumulation_liquidation";
}];
export declare function accumulateRealizedFees(payload: Record<(typeof FeeAccumulatorTypes)[number]['realizedKey'], bigint | string>[]): RealizedFeeAccumulations;
export declare const DefaultRealizedAccumulations: RealizedAccumulations;
//# sourceMappingURL=accumulatorUtils.d.ts.map