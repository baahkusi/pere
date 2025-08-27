import { Address, Hex, PublicClient } from 'viem';
import { SupportedMarket } from '../constants';
import { SupportedChainId } from '../constants';
import { CommonOverrides } from '../types/shared';
export declare function generateNonce(bytes?: number): bigint;
/**
 * Adds a signer override to the overrides object if the signer is not already set.
 * @param walletClientSigner - The address of the wallet client signer.
 * @param overrides - The {@link CommonOverrides} object.
 * @returns The updated overrides object.
 */
export declare function addSignerOverrideFromWalletClientSigner({ walletClientSigner, overrides, }: {
    walletClientSigner?: Address;
} & CommonOverrides): {
    signer?: `0x${string}` | undefined;
    group?: bigint | undefined;
    nonce?: bigint | undefined;
} | undefined;
/**
 * The address used to simulate intent updates.
 */
export declare const IntentSimulationSender: `0x${string}`;
/**
 * Checks if an intent is fillable by simulating the intent update on the market.
 * @param txData - The transaction data to be sent.
 * @param market - The address or {@link SupportedMarket} of the market.
 * @param publicClient - The public client to be used for the simulation.
 * @param chainId - The chain ID to be used for the simulation.
 * @returns An object with a boolean indicating if the intent is fillable and an optional error string.
 */
export declare function checkIntentFillable({ txData, market, chainId, publicClient, }: {
    txData: {
        to: Address;
        data: Hex;
        value: bigint;
    };
    market: Address | SupportedMarket;
    chainId: SupportedChainId;
    publicClient: PublicClient;
}): Promise<{
    fillable: boolean;
    error?: string;
}>;
//# sourceMappingURL=intentUtils.d.ts.map