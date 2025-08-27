import { Address, PublicClient } from 'viem';
import { SupportedChainId } from '../../../constants';
export type ReadCollateralAccountAddressArgs = {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
};
export declare function readCollateralAccountAddress({ chainId, publicClient, address: owner, }: ReadCollateralAccountAddressArgs): Promise<`0x${string}`>;
//# sourceMappingURL=collateralAccountAddress.d.ts.map