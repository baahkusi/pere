import { Address } from 'viem';
import { SupportedChainId } from '../../../constants';
import { CommonOverrides } from '../../../types/shared';
export type ActionRequred = {
    maxFee: bigint;
};
export declare function buildActionMessage({ maxFee, overrides, expiry, account, chainId, }: {
    maxFee: bigint;
    expiry: bigint;
    account: Address;
    chainId: SupportedChainId;
} & CommonOverrides): {
    maxFee: bigint;
    common: {
        nonce: bigint;
        group: bigint;
        account: `0x${string}`;
        signer: `0x${string}`;
        domain: `0x${string}`;
        expiry: bigint;
    };
};
//# sourceMappingURL=_util.d.ts.map