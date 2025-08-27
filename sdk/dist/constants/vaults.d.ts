import { Address } from 'viem';
import { SupportedChainId } from './network';
export declare enum PerennialVaultType {
    alpha = "alpha",
    bravo = "bravo"
}
export declare const SupportedVaults: {
    [chainId in SupportedChainId]: {
        [vault in PerennialVaultType]?: boolean;
    };
};
export declare const VaultMetadata: {
    [chainId in SupportedChainId]: {
        [key in PerennialVaultType]?: {
            name: string;
        };
    };
};
export declare const ChainVaults: {
    [chainId in SupportedChainId]: {
        [vault in PerennialVaultType]?: Address;
    };
};
export declare const chainVaultsWithAddress: (chainId: SupportedChainId) => {
    vault: PerennialVaultType;
    vaultAddress: `0x${string}`;
}[];
//# sourceMappingURL=vaults.d.ts.map