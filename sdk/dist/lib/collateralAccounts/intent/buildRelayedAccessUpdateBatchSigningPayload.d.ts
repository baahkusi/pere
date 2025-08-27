import { Address } from 'viem';
import { AccessUpdateBatchSigningPayload, RelayedAccessUpdateBatchSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedAccessUpdateBatchSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    signers: {
        signer: Address;
        approved: boolean;
    }[];
    operators: {
        operator: Address;
        approved: boolean;
    }[];
};
export declare function buildRelayedAccessUpdateBatchSigningPayload({ chainId, address: account, signers, operators, maxFee, overrides, expiry, }: BuildRelayedAccessUpdateBatchSigningPayloadArgs): {
    relayedAccessUpdateBatch: RelayedAccessUpdateBatchSigningPayload;
    accessUpdateBatch: AccessUpdateBatchSigningPayload;
};
//# sourceMappingURL=buildRelayedAccessUpdateBatchSigningPayload.d.ts.map