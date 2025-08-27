import { WithdrawalSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildWithdrawalSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    amount: bigint;
    unwrap: boolean;
};
export declare function buildWithdrawalSigningPayload({ chainId, address: account, amount, unwrap, maxFee, overrides, expiry, }: BuildWithdrawalSigningPayloadArgs): {
    withdrawal: WithdrawalSigningPayload;
};
//# sourceMappingURL=buildWithdrawalSigningPayload.d.ts.map