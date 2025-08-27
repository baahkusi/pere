import { Address } from 'viem';
import { RebalanceConfigChangeSigningPayload } from '../../../constants/eip712';
import { SupportedMarket } from '../../../constants/markets';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildRebalanceConfigChangeSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    group: bigint;
    markets: (Address | SupportedMarket)[];
    configs: {
        target: bigint;
        threshold: bigint;
    }[];
    rebalanceMaxFee: bigint;
};
export declare function buildRebalanceConfigChangeSigningPayload({ chainId, address: account, group, markets: markets_, configs, rebalanceMaxFee, maxFee, overrides, expiry, }: BuildRebalanceConfigChangeSigningPayloadArgs): {
    rebalanceConfigChange: RebalanceConfigChangeSigningPayload;
};
//# sourceMappingURL=buildRebalanceConfigChangeSigningPayload.d.ts.map