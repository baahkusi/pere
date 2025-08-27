"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorModule = exports.checkMultiInvokerOperatorApproval = exports.checkVaultFactoryApproval = exports.checkMarketFactoryAccessors = exports.checkMarketFactoryApproval = exports.getDSUAllowance = exports.getUSDCAllowance = exports.buildUnwrapDSUTx = exports.buildAccessUpdateBatchTx = exports.buildUpdateMultiInvokerOperatorTx = exports.buildApproveVaultFactoryTx = exports.buildApproveMarketFactoryTx = exports.buildApproveDSUReserveTx = exports.buildApproveUSDCTx = void 0;
const viem_1 = require("viem");
const __1 = require("../..");
/**
 * Builds a transaction to approve USDC for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param suggestedAmount - The amount to approve. Defaults to the maximum value.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildApproveUSDCTx({ chainId, suggestedAmount = __1.MaxUint256, }) {
    const data = (0, viem_1.encodeFunctionData)({
        functionName: 'approve',
        abi: __1.ERC20Abi,
        args: [__1.MultiInvokerAddresses[chainId], __1.Big6Math.abs(suggestedAmount)],
    });
    return {
        data,
        to: __1.USDCAddresses[chainId],
        value: 0n,
    };
}
exports.buildApproveUSDCTx = buildApproveUSDCTx;
/**
 * Builds a transaction to approve DSU for the EmptysetReserve contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param suggestedAmount - The amount to approve in 18 decimal precision. Defaults to the maximum value.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildApproveDSUReserveTx({ chainId, suggestedAmount = __1.MaxUint256, }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.ERC20Abi,
        functionName: 'approve',
        args: [__1.EmptysetReserveAddresses[chainId], __1.Big6Math.abs(suggestedAmount)],
    });
    return {
        to: __1.DSUAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildApproveDSUReserveTx = buildApproveDSUReserveTx;
/**
 * Builds a transaction to approve the MarketFactory contract for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildApproveMarketFactoryTx({ chainId }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.MarketFactoryAbi,
        functionName: 'updateOperator',
        args: [__1.MultiInvokerAddresses[chainId], true],
    });
    return {
        to: __1.MarketFactoryAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildApproveMarketFactoryTx = buildApproveMarketFactoryTx;
/**
 * Builds a transaction to approve the VaultFactory contract for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildApproveVaultFactoryTx({ chainId }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.VaultFactoryAbi,
        functionName: 'updateOperator',
        args: [__1.MultiInvokerAddresses[chainId], true],
    });
    return {
        to: __1.VaultFactoryAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildApproveVaultFactoryTx = buildApproveVaultFactoryTx;
/**
 * Builds a transaction to update the MultiInvoker operator.
 *
 * @param chainId {@link SupportedChainId}
 * @param operator - The operator address.
 * @param enabled - Set the address as enabled or disabled.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildUpdateMultiInvokerOperatorTx({ chainId, operator, enabled, }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.MarketFactoryAbi,
        functionName: 'updateOperator',
        args: [operator, enabled],
    });
    return {
        to: __1.MultiInvokerAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildUpdateMultiInvokerOperatorTx = buildUpdateMultiInvokerOperatorTx;
/**
 * Builds a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param signers - The signers to update access for.
 * @param operators - The operators to update access for.
 *
 * @returns Transaction calldata, destination address and transaction value.
 */
async function buildAccessUpdateBatchTx({ chainId, signers, operators, }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.MarketFactoryAbi,
        functionName: 'updateAccessBatch',
        args: [
            operators.map(({ operator, approved }) => ({ accessor: operator, approved })),
            signers.map(({ signer, approved }) => ({ accessor: signer, approved })),
        ],
    });
    return {
        to: __1.MarketFactoryAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildAccessUpdateBatchTx = buildAccessUpdateBatchTx;
/**
 * Builds a transaction to unwrap DSU into USDC.
 * @param chainId {@link SupportedChainId}
 * @param amount - The amount to unwrap in 18 decimal precision.
 */
async function buildUnwrapDSUTx({ chainId, amount }) {
    const data = (0, viem_1.encodeFunctionData)({
        abi: __1.EmptysetReserveAbi,
        functionName: 'redeem',
        args: [amount],
    });
    return {
        to: __1.EmptysetReserveAddresses[chainId],
        value: 0n,
        data,
    };
}
exports.buildUnwrapDSUTx = buildUnwrapDSUTx;
/**
 * Gets the USDC allowance for the MultiInvoker contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns The USDC allowance.
 */
async function getUSDCAllowance({ chainId, publicClient, address, }) {
    const contract = (0, __1.getUSDCContract)(chainId, publicClient);
    const allowance = await contract.read.allowance([address, __1.MultiInvokerAddresses[chainId]]);
    return allowance;
}
exports.getUSDCAllowance = getUSDCAllowance;
/**
 * Gets the DSU allowance for the EmptysetReserve contract.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns The DSU allowance.
 */
async function getDSUAllowance({ chainId, publicClient, address, }) {
    const contract = (0, __1.getDSUContract)(chainId, publicClient);
    const allowance = await contract.read.allowance([address, __1.EmptysetReserveAddresses[chainId]]);
    return allowance;
}
exports.getDSUAllowance = getDSUAllowance;
/**
 * Checks if the MultiInvoker contract is approved to interact with Perennial Markets by the provided address.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns Whether the MultiInvoker contract is approved.
 */
async function checkMarketFactoryApproval({ chainId, publicClient, address, }) {
    const { operators } = await checkMarketFactoryAccessors({
        chainId,
        publicClient,
        address,
        signers: [],
        operators: [__1.MultiInvokerAddresses[chainId]],
    });
    return Boolean(operators.find(({ operator }) => operator === __1.MultiInvokerAddresses[chainId])?.approved);
}
exports.checkMarketFactoryApproval = checkMarketFactoryApproval;
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
async function checkMarketFactoryAccessors({ chainId, publicClient, address, signers, operators, }) {
    const marketFactory = (0, __1.getMarketFactoryContract)(chainId, publicClient);
    const signerAccess = await Promise.all(signers.map(async (signer) => ({
        signer: (0, viem_1.getAddress)(signer),
        approved: await marketFactory.read.signers([address, signer]),
    })));
    const operatorAccess = await Promise.all(operators.map(async (operator) => ({
        operator: (0, viem_1.getAddress)(operator),
        approved: (await marketFactory.read.operators([address, operator])) || (await marketFactory.read.extensions([operator])),
    })));
    return {
        signers: signerAccess,
        operators: operatorAccess,
    };
}
exports.checkMarketFactoryAccessors = checkMarketFactoryAccessors;
/**
 * Checks if the MultiInvoker contract is approved to interact with Perennial Vaults by the provided address.
 *
 * @param chainId {@link SupportedChainId}
 * @param publicClient Public Client
 * @param address Wallet Address
 *
 * @returns Whether the MultiInvoker contract is approved.
 */
async function checkVaultFactoryApproval({ chainId, publicClient, address, }) {
    const isVaultFactoryApproved = await (0, __1.getVaultFactoryContract)(chainId, publicClient).read.operators([
        address,
        __1.MultiInvokerAddresses[chainId],
    ]);
    return isVaultFactoryApproved;
}
exports.checkVaultFactoryApproval = checkVaultFactoryApproval;
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
async function checkMultiInvokerOperatorApproval({ chainId, publicClient, address, operator, }) {
    const isOperatorApproved = await (0, __1.getMultiInvokerContract)(chainId, publicClient).read.operators([address, operator]);
    return isOperatorApproved;
}
exports.checkMultiInvokerOperatorApproval = checkMultiInvokerOperatorApproval;
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
class OperatorModule {
    constructor(config) {
        this.defaultAddress = viem_1.zeroAddress;
        this.config = config;
        this.defaultAddress = config.operatingFor ?? config.walletClient?.account?.address ?? this.defaultAddress;
    }
    get read() {
        return {
            /**
             * Get USDC allowance for the MultiInvoker contract
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns The USDC allowance
             */
            usdcAllowance: (args = {}) => getUSDCAllowance({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
            /**
             * Get DSU allowance for the EmptysetReserve contract
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns The DSU allowance
             */
            dsuAllowance: (args = {}) => getDSUAllowance({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
            /**
             * Check if the MultiInvoker contract is approved to interact with Perennial Markets by the provided address.
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Whether the MarketFactory contract is approved
             */
            marketFactoryApproval: (args = {}) => checkMarketFactoryApproval({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
            /**
             * Check if the MultiInvoker contract is approved to interact with Perennial Vaults by the provided address.
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Whether the VaultFactory contract is approved
             */
            vaultFactoryApproval: (args = {}) => checkVaultFactoryApproval({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
            /**
             * Check if the provided operator address is approved to operator on behalf of the address in the MultiInvoker contract
             * @param operator Operator Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Whether the Operator is approve in the MultiInvoker contract
             */
            multiInvokerOperatorApproval: (args) => checkMultiInvokerOperatorApproval({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
            /**
             * Check if the provided signers and operators have access to operate on Perennial markets by the provided address.
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns The access status for the provided signers and operators.
             */
            marketFactoryAccessors: (args) => checkMarketFactoryAccessors({
                chainId: this.config.chainId,
                address: this.defaultAddress,
                publicClient: this.config.publicClient,
                ...args,
            }),
        };
    }
    get build() {
        return {
            /**
             * Build a transaction to approve USDC for the MultiInvoker contract
             * @param suggestedAmount - The amount to approve
             * @returns Transaction calldata, destination address and transaction value
             */
            approveUSDC: ({ suggestedAmount } = {}) => buildApproveUSDCTx({ chainId: this.config.chainId, suggestedAmount }),
            /**
             * Build a transaction to approve DSU for the EmptysetReserve contract
             * @param suggestedAmount - The amount to approve
             * @returns Transaction calldata, destination address and transaction value
             */
            approveDSU: ({ suggestedAmount } = {}) => buildApproveDSUReserveTx({ chainId: this.config.chainId, suggestedAmount }),
            /**
             * Build a transaction to approve the MultiInvoker contract as an operator in the MarketFactory contract
             * @returns Transaction calldata, destination address and transaction value
             */
            approveMarketFactoryTx: () => buildApproveMarketFactoryTx({ chainId: this.config.chainId }),
            /**
             * Build a transaction to approve the MultiInvoker contract as an operator in the VaultFactory contract
             * @returns Transaction calldata, destination address and transaction value
             */
            approveVaultFactoryTx: () => buildApproveVaultFactoryTx({ chainId: this.config.chainId }),
            /**
             * Build a transaction to update the MultiInvoker operator
             * @param operator - The operator address
             * @param enabled - Set the address as enabled or disabled
             * @returns Transaction calldata, destination address and transaction value
             */
            approveMultiInvokerOperatorTx: (args) => buildUpdateMultiInvokerOperatorTx({ chainId: this.config.chainId, ...args }),
            /**
             * Build a transaction to unwrap DSU into USDC
             * @param amount - The amount to unwrap in 18 decimal precision
             * @returns Transaction calldata, destination address and transaction value
             */
            unwrapDSU: ({ amount }) => buildUnwrapDSUTx({ chainId: this.config.chainId, amount }),
            /**
             * Build a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
             * @param signers - The signers to update access for.
             * @param operators - The operators to update access for.
             * @returns Transaction calldata, destination address and transaction value
             */
            accessUpdateBatch: (args) => buildAccessUpdateBatchTx({ chainId: this.config.chainId, ...args }),
        };
    }
    /**
     * Operator module write methods
     * @throws Error if wallet client is not provided
     */
    get write() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const txOpts = { account: address, chainId, chain: __1.chainIdToChainMap[chainId] };
        return {
            /**
             * approves USDC for the MultiInvoker contract
             * @param suggestedAmount - The amount to approve
             * @returns Transaction hash
             */
            approveUSDC: async ({ suggestedAmount } = {}) => {
                const tx = await this.build.approveUSDC({ suggestedAmount });
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * approves DSU for the EmptysetReserve contract
             * @param suggestedAmount - The amount to approve
             * @returns Transaction hash
             */
            approveDSU: async ({ suggestedAmount } = {}) => {
                const tx = await this.build.approveDSU({ suggestedAmount });
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * approves the MultiInvoker contract as an operator in the MarketFactory contract
             * @returns Transaction hash
             */
            approveMarketFactory: async () => {
                const tx = await this.build.approveMarketFactoryTx();
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * approves the MultiInvoker contract as an operator in the VaultFactory contract
             * @returns Transaction hash
             */
            approveVaultFactory: async () => {
                const tx = await this.build.approveVaultFactoryTx();
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * updates the MultiInvoker operator
             * @param operator - The operator address
             * @param enabled - Set the address as enabled or disabled
             * @returns Transaction hash
             */
            approveMultiInvokerOperator: async (...args) => {
                const tx = await this.build.approveMultiInvokerOperatorTx(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Build a transaction to unwrap DSU into USDC
             * @param amount - The amount to unwrap in 18 decimal precision
             * @returns Transaction calldata, destination address and transaction value
             */
            unwrapDSU: async (...args) => {
                const tx = await this.build.unwrapDSU(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Build a transaction to update the access for a batch of signers and operators in the MarketFactory contract.
             * @param signers - The signers to update access for.
             * @param operators - The operators to update access for.
             * @returns Transaction calldata, destination address and transaction value
             */
            accessUpdateBatch: async (...args) => {
                const tx = await this.build.accessUpdateBatch(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
        };
    }
}
exports.OperatorModule = OperatorModule;
