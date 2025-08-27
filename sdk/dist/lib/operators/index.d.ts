import { Address, PublicClient, WalletClient } from 'viem';
import { SupportedChainId } from '../..';
import { OptionalAddress } from '../../types/shared';
/**
 * Builds a transaction to approve USDC for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param suggestedAmount - The amount to approve. Defaults to the maximum value.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildApproveUSDCTx({ chainId, suggestedAmount, }: {
    chainId: SupportedChainId;
    suggestedAmount?: bigint;
}): Promise<{
    data: `0x${string}`;
    to: `0x${string}`;
    value: bigint;
}>;
/**
 * Builds a transaction to approve DSU for the EmptysetReserve contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param suggestedAmount - The amount to approve in 18 decimal precision. Defaults to the maximum value.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildApproveDSUReserveTx({ chainId, suggestedAmount, }: {
    chainId: SupportedChainId;
    suggestedAmount?: bigint;
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Builds a transaction to approve the MarketFactory contract for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildApproveMarketFactoryTx({ chainId }: {
    chainId: SupportedChainId;
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Builds a transaction to approve the VaultFactory contract for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildApproveVaultFactoryTx({ chainId }: {
    chainId: SupportedChainId;
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Builds a transaction to update the MultiInvoker operator.
 *
 * @param chainId {@link SupportedChainId}
 * @param operator - The operator address.
 * @param enabled - Set the address as enabled or disabled.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildUpdateMultiInvokerOperatorTx({ chainId, operator, enabled, }: {
    chainId: SupportedChainId;
    operator: Address;
    enabled: boolean;
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Builds a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param signers - The signers to update access for.
 * @param operators - The operators to update access for.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
export declare function buildAccessUpdateBatchTx({ chainId, signers, operators, }: {
    chainId: SupportedChainId;
    signers: {
        signer: Address;
        approved: boolean;
    }[];
    operators: {
        operator: Address;
        approved: boolean;
    }[];
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Builds a transaction to unwrap DSU into USDC.
 * @param chainId {@link SupportedChainId}
 * @param amount - The amount to unwrap in 18 decimal precision.
 */
export declare function buildUnwrapDSUTx({ chainId, amount }: {
    chainId: SupportedChainId;
    amount: bigint;
}): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
/**
 * Gets the USDC allowance for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns The USDC allowance.
 */
export declare function getUSDCAllowance({ chainId, publicClient, address, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
}): Promise<bigint>;
/**
 * Gets the DSU allowance for the EmptysetReserve contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns The DSU allowance.
 */
export declare function getDSUAllowance({ chainId, publicClient, address, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
}): Promise<any>;
/**
 * Checks if the MultiInvoker contract is approved to interact with Perennial Markets by the provided address.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns Whether the MultiInvoker contract is approved.
 */
export declare function checkMarketFactoryApproval({ chainId, publicClient, address, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
}): Promise<boolean>;
/**
 * Checks if the provided signers and operators have access to the MarketFactory contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 * @param signers - The signers to check access for.
 * @param operators - The operators to check access for.
 *
 * @returns The access status for the provided signers and operators.
 */
export declare function checkMarketFactoryAccessors({ chainId, publicClient, address, signers, operators, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
    signers: Address[];
    operators: Address[];
}): Promise<{
    signers: {
        signer: Address;
        approved: boolean;
    }[];
    operators: {
        operator: Address;
        approved: boolean;
    }[];
}>;
/**
 * Checks if the MultiInvoker contract is approved to interact with Perennial Vaults by the provided address.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns Whether the MultiInvoker contract is approved.
 */
export declare function checkVaultFactoryApproval({ chainId, publicClient, address, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
}): Promise<boolean>;
/**
 * Checks if the provided operator address is approved to operator on behalf of the address in the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 * @param operator Operator Address
 *
 * @returns Whether the Operator is approve in the MultiInvoker contract.
 */
export declare function checkMultiInvokerOperatorApproval({ chainId, publicClient, address, operator, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    address: Address;
    operator: Address;
}): Promise<boolean>;
type OmitBound<T> = Omit<T, 'chainId' | 'publicClient' | 'address'>;
/**
 * Operator module class
 *
 * @param config SDK configuration
 * @param config.chainId {@link SupportedChainId}
 * @param config.publicClient Public Client
 * @param config.walletClient Wallet Client
 * @param config.operatingFor If set, the module will read data on behalf of this address.
 *
 * @returns Operator module instance
 */
export declare class OperatorModule {
    private config;
    private defaultAddress;
    constructor(config: {
        chainId: SupportedChainId;
        publicClient: PublicClient;
        walletClient?: WalletClient;
        operatingFor?: Address;
    });
    get read(): {
        /**
         * Get USDC allowance for the MultiInvoker contract
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns The USDC allowance
         */
        usdcAllowance: (args?: OmitBound<Parameters<typeof getUSDCAllowance>[0]> & OptionalAddress) => Promise<bigint>;
        /**
         * Get DSU allowance for the EmptysetReserve contract
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns The DSU allowance
         */
        dsuAllowance: (args?: OmitBound<Parameters<typeof getDSUAllowance>[0]> & OptionalAddress) => Promise<any>;
        /**
         * Check if the MultiInvoker contract is approved to interact with Perennial Markets by the provided address.
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns Whether the MarketFactory contract is approved
         */
        marketFactoryApproval: (args?: OmitBound<Parameters<typeof checkMarketFactoryApproval>[0]> & OptionalAddress) => Promise<boolean>;
        /**
         * Check if the MultiInvoker contract is approved to interact with Perennial Vaults by the provided address.
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns Whether the VaultFactory contract is approved
         */
        vaultFactoryApproval: (args?: OmitBound<Parameters<typeof checkVaultFactoryApproval>[0]> & OptionalAddress) => Promise<boolean>;
        /**
         * Check if the provided operator address is approved to operator on behalf of the address in the MultiInvoker contract
         * @param operator Operator Address
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns Whether the Operator is approve in the MultiInvoker contract
         */
        multiInvokerOperatorApproval: (args: OmitBound<Parameters<typeof checkMultiInvokerOperatorApproval>[0]> & OptionalAddress) => Promise<boolean>;
        /**
         * Check if the provided signers and operators have access to operate on Perennial markets by the provided address.
         * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
         * @returns The access status for the provided signers and operators.
         */
        marketFactoryAccessors: (args: OmitBound<Parameters<typeof checkMarketFactoryAccessors>[0]> & OptionalAddress) => Promise<{
            signers: {
                signer: `0x${string}`;
                approved: boolean;
            }[];
            operators: {
                operator: `0x${string}`;
                approved: boolean;
            }[];
        }>;
    };
    get build(): {
        /**
         * Build a transaction to approve USDC for the MultiInvoker contract
         * @param suggestedAmount - The amount to approve
         * @returns Transaction calldata, destination address and transaction value
         */
        approveUSDC: ({ suggestedAmount }?: {
            suggestedAmount?: bigint | undefined;
        }) => Promise<{
            data: `0x${string}`;
            to: `0x${string}`;
            value: bigint;
        }>;
        /**
         * Build a transaction to approve DSU for the EmptysetReserve contract
         * @param suggestedAmount - The amount to approve
         * @returns Transaction calldata, destination address and transaction value
         */
        approveDSU: ({ suggestedAmount }?: {
            suggestedAmount?: bigint | undefined;
        }) => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
        /**
         * Build a transaction to approve the MultiInvoker contract as an operator in the MarketFactory contract
         * @returns Transaction calldata, destination address and transaction value
         */
        approveMarketFactoryTx: () => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
        /**
         * Build a transaction to approve the MultiInvoker contract as an operator in the VaultFactory contract
         * @returns Transaction calldata, destination address and transaction value
         */
        approveVaultFactoryTx: () => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
        /**
         * Build a transaction to update the MultiInvoker operator
         * @param operator - The operator address
         * @param enabled - Set the address as enabled or disabled
         * @returns Transaction calldata, destination address and transaction value
         */
        approveMultiInvokerOperatorTx: (args: OmitBound<Parameters<typeof buildUpdateMultiInvokerOperatorTx>[0]>) => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
        /**
         * Build a transaction to unwrap DSU into USDC
         * @param amount - The amount to unwrap in 18 decimal precision
         * @returns Transaction calldata, destination address and transaction value
         */
        unwrapDSU: ({ amount }: {
            amount: bigint;
        }) => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
        /**
         * Build a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
         * @param signers - The signers to update access for.
         * @param operators - The operators to update access for.
         * @returns Transaction calldata, destination address and transaction value
         */
        accessUpdateBatch: (args: OmitBound<Parameters<typeof buildAccessUpdateBatchTx>[0]>) => Promise<{
            to: `0x${string}`;
            value: bigint;
            data: `0x${string}`;
        }>;
    };
    /**
     * Operator module write methods
     * @throws Error if wallet client is not provided
     */
    get write(): {
        /**
         * approves USDC for the MultiInvoker contract
         * @param suggestedAmount - The amount to approve
         * @returns Transaction hash
         */
        approveUSDC: ({ suggestedAmount }?: {
            suggestedAmount?: bigint | undefined;
        }) => Promise<`0x${string}`>;
        /**
         * approves DSU for the EmptysetReserve contract
         * @param suggestedAmount - The amount to approve
         * @returns Transaction hash
         */
        approveDSU: ({ suggestedAmount }?: {
            suggestedAmount?: bigint | undefined;
        }) => Promise<`0x${string}`>;
        /**
         * approves the MultiInvoker contract as an operator in the MarketFactory contract
         * @returns Transaction hash
         */
        approveMarketFactory: () => Promise<`0x${string}`>;
        /**
         * approves the MultiInvoker contract as an operator in the VaultFactory contract
         * @returns Transaction hash
         */
        approveVaultFactory: () => Promise<`0x${string}`>;
        /**
         * updates the MultiInvoker operator
         * @param operator - The operator address
         * @param enabled - Set the address as enabled or disabled
         * @returns Transaction hash
         */
        approveMultiInvokerOperator: (args: OmitBound<{
            chainId: 60850 | 1424 | 42161 | 421614;
            operator: `0x${string}`;
            enabled: boolean;
        }>) => Promise<`0x${string}`>;
        /**
         * Build a transaction to unwrap DSU into USDC
         * @param amount - The amount to unwrap in 18 decimal precision
         * @returns Transaction calldata, destination address and transaction value
         */
        unwrapDSU: (args_0: {
            amount: bigint;
        }) => Promise<`0x${string}`>;
        /**
         * Build a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
         * @param signers - The signers to update access for.
         * @param operators - The operators to update access for.
         * @returns Transaction calldata, destination address and transaction value
         */
        accessUpdateBatch: (args: OmitBound<{
            chainId: 60850 | 1424 | 42161 | 421614;
            signers: {
                signer: `0x${string}`;
                approved: boolean;
            }[];
            operators: {
                operator: `0x${string}`;
                approved: boolean;
            }[];
        }>) => Promise<`0x${string}`>;
    };
}
export {};
//# sourceMappingURL=index.d.ts.map