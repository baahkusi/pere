import { Address } from 'viem';
import { SupportedChainId } from './network';
type AddressMapping = {
    [chain in SupportedChainId]: Address;
};
export declare const MultiInvokerAddresses: AddressMapping;
export declare const MarketFactoryAddresses: AddressMapping;
export declare const VaultFactoryAddresses: AddressMapping;
export declare const OracleFactoryAddresses: AddressMapping;
export declare const VerifierAddresses: AddressMapping;
export declare const ControllerAddresses: AddressMapping;
export declare const ManagerAddresses: AddressMapping;
export declare const AccountVerifierAddresses: AddressMapping;
export declare const OrderVerifierAddresses: AddressMapping;
export declare const DSUAddresses: AddressMapping;
export declare const EmptysetReserveAddresses: AddressMapping;
export declare const USDCAddresses: AddressMapping;
export declare const PythFactoryAddresses: AddressMapping;
export declare const CryptexFactoryAddresses: AddressMapping;
export declare const StorkFactoryAddresses: AddressMapping;
export declare const ChainlinkFactoryAddresses: AddressMapping;
export {};
//# sourceMappingURL=contracts.d.ts.map