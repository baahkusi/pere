import { Address } from 'viem';
import { SupportedMarket } from '../../../constants';
import { TakeSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
export type BuildTakeSigningPayloadArgs = CommonRequired & CommonOverrides & {
    market: SupportedMarket | Address;
    amount: bigint;
    referrer: Address;
};
export declare function buildTakeSigningPayload({ chainId, address: account, market, amount, referrer, expiry, overrides, }: BuildTakeSigningPayloadArgs): {
    take: TakeSigningPayload;
};
//# sourceMappingURL=buildTakeSigningPayload.d.ts.map