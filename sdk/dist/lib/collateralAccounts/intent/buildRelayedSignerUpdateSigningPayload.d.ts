import { Address } from 'viem';
import { RelayedSignerUpdateSigningPayload, SignerUpdateSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedSignerUpdateSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    signer: Address;
    approved: boolean;
};
export declare function buildRelayedSignerUpdateSigningPayload({ chainId, address: account, signer, approved, maxFee, overrides, expiry, }: BuildRelayedSignerUpdateSigningPayloadArgs): {
    signerUpdate: SignerUpdateSigningPayload;
    relayedSignerUpdate: RelayedSignerUpdateSigningPayload;
};
//# sourceMappingURL=buildRelayedSignerUpdateSigningPayload.d.ts.map