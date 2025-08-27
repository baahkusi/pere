import { Address } from 'viem';
import { OperatorUpdateSigningPayload, RelayedOperatorUpdateSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedOperatorUpdateSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    operator: Address;
    approved: boolean;
};
export declare function buildRelayedOperatorUpdateSigningPayload({ chainId, address: account, operator, approved, maxFee, overrides, expiry, }: BuildRelayedOperatorUpdateSigningPayloadArgs): {
    operatorUpdate: OperatorUpdateSigningPayload;
    relayedOperatorUpdate: RelayedOperatorUpdateSigningPayload;
};
//# sourceMappingURL=buildRelayedOperatorUpdateSigningPayload.d.ts.map