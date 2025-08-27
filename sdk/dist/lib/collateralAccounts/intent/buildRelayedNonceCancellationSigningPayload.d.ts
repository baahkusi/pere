import { CommonSigningPayload, RelayedNonceCancellationSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedNonceCancellationSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    nonceToCancel: bigint;
};
export declare function buildRelayedNonceCancellationSigningPayload({ chainId, address: account, nonceToCancel, maxFee, overrides, expiry, }: BuildRelayedNonceCancellationSigningPayloadArgs): {
    nonceCancellation: CommonSigningPayload;
    relayedNonceCancellation: RelayedNonceCancellationSigningPayload;
};
//# sourceMappingURL=buildRelayedNonceCancellationSigningPayload.d.ts.map