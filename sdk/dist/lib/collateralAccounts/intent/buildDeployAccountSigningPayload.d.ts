import { DeployAccountSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildDeployAccountSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides;
export declare function buildDeployAccountSigningPayload({ chainId, address: account, maxFee, overrides, expiry, }: BuildDeployAccountSigningPayloadArgs): {
    deployAccount: DeployAccountSigningPayload;
};
//# sourceMappingURL=buildDeployAccountSigningPayload.d.ts.map