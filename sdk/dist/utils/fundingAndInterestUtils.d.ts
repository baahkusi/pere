import { ChainMarketSnapshot } from '../lib';
import { JumpRateUtilizationCurve } from '../types/perennial';
export declare const computeInterestRate: (curve: JumpRateUtilizationCurve, utilization: bigint) => bigint;
/**
 * Calculates the funding for each side of the market
 * @param snapshot
 * @returns The long, short and maker funding + interest rates, along with per side funding and interest rates.
 *          Negative values indicate receiving, positive values indicate paying.
 */
export declare function calculateFundingAndInterestForSides(snapshot: ChainMarketSnapshot): {
    long: bigint;
    short: bigint;
    maker: bigint;
    fundingRates: {
        long: bigint;
        short: bigint;
        maker: bigint;
    };
    interestRates: {
        long: bigint;
        short: bigint;
        maker: bigint;
    };
};
//# sourceMappingURL=fundingAndInterestUtils.d.ts.map