import { Address } from 'viem';
import { SupportedMarket } from '../../../constants';
import { IntentSigningPayload } from '../../../constants/eip712';
import { Intent } from '../../../types/perennial';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
export type BuildIntentSigningPayloadArgs = CommonRequired & CommonOverrides & {
    intent: Omit<Intent, 'common'>;
    market: SupportedMarket | Address;
};
export declare function buildIntentSigningPayload({ chainId, intent, address: account, market, expiry, overrides, }: BuildIntentSigningPayloadArgs): {
    intent: IntentSigningPayload;
};
//# sourceMappingURL=buildIntentSigningPayload.d.ts.map