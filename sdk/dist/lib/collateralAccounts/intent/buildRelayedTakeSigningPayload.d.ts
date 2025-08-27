import { Address } from 'viem';
import { SupportedMarket } from '../../../constants';
import { RelayedTakeSigningPayload, TakeSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRelayedTakeSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    market: SupportedMarket | Address;
    amount: bigint;
    referrer: Address;
};
export declare function buildRelayedTakeSigningPayload({ chainId, address: account, amount, referrer, maxFee, overrides, expiry, market, }: BuildRelayedTakeSigningPayloadArgs): {
    relayedTake: RelayedTakeSigningPayload;
    take: TakeSigningPayload;
};
//# sourceMappingURL=buildRelayedTakeSigningPayload.d.ts.map