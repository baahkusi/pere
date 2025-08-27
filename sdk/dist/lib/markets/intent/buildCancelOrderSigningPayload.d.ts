import { Address } from 'viem';
import { SupportedMarket } from '../../../constants';
import { CancelOrderSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
export type BuildCancelOrderSigningPayloadArgs = CommonRequired & CommonOverrides & {
    market: Address | SupportedMarket;
    orderId: bigint;
    maxFee: bigint;
};
export declare function buildCancelOrderSigningPayload({ chainId, expiry, address: account, overrides, market: market_, orderId, maxFee, }: BuildCancelOrderSigningPayloadArgs): {
    cancelOrder: CancelOrderSigningPayload;
};
//# sourceMappingURL=buildCancelOrderSigningPayload.d.ts.map