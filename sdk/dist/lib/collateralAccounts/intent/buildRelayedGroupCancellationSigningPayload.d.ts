import { GroupCancellationSigningPayload, RelayedGroupCancellationSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedGroupCancellationSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    groupToCancel: bigint;
};
export declare function buildRelayedGroupCancellationSigningPayload({ chainId, address: account, groupToCancel, maxFee, overrides, expiry, }: BuildRelayedGroupCancellationSigningPayloadArgs): {
    groupCancellation: GroupCancellationSigningPayload;
    relayedGroupCancellation: RelayedGroupCancellationSigningPayload;
};
//# sourceMappingURL=buildRelayedGroupCancellationSigningPayload.d.ts.map