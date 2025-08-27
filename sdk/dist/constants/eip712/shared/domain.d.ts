import { Address } from 'viem';
import { SupportedChainId } from '../..';
export type VerifierType = 'core' | 'collateralAccount' | 'orders';
export declare function VerifyingContractForType(chainId: SupportedChainId, verifierType: VerifierType): Address;
export type PerennialEIP712DomainName = 'Perennial' | 'Perennial V2 Collateral Accounts' | 'Perennial V2 Trigger Orders';
export declare function DomainNameForType(verifierType: VerifierType): PerennialEIP712DomainName;
export type PerennialEIP712Domain = {
    name: PerennialEIP712DomainName;
    version: '1.0.0';
    chainId: SupportedChainId;
    verifyingContract: Address;
};
export declare const EIP712_Domain: (chainId: SupportedChainId, verifierType: VerifierType) => PerennialEIP712Domain;
//# sourceMappingURL=domain.d.ts.map