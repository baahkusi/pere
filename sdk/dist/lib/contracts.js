"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsModule = exports.getManagerContract = exports.getControllerContract = exports.getKeeperOracleContract = exports.getOracleContract = exports.getMarketContract = exports.getVaultContract = exports.getVaultFactoryContract = exports.getPythFactoryContract = exports.getGasOracleContract = exports.getOracleFactoryContract = exports.getKeeperFactoryContract = exports.getMarketFactoryContract = exports.getMultiInvokerContract = exports.getEmptysetReserveContarct = exports.getUSDCContract = exports.getDSUContract = void 0;
const viem_1 = require("viem");
const __1 = require("..");
const ERC20_abi_1 = require("../abi/ERC20.abi");
const GasOracle_abi_1 = require("../abi/GasOracle.abi");
const KeeperFactory_abi_1 = require("../abi/KeeperFactory.abi");
const MarketFactory_abi_1 = require("../abi/MarketFactory.abi");
const MultiInvoker_abi_1 = require("../abi/MultiInvoker.abi");
const VaultFactory_abi_1 = require("../abi/VaultFactory.abi");
const contracts_1 = require("../constants/contracts");
/**
 * Returns the DSU contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The DSU contract instance.
 */
const getDSUContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.DSUAddresses[chainId],
        abi: ERC20_abi_1.ERC20Abi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getDSUContract = getDSUContract;
/**
 * Returns the USDC contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The USDC contract instance.
 */
const getUSDCContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.USDCAddresses[chainId],
        abi: ERC20_abi_1.ERC20Abi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getUSDCContract = getUSDCContract;
/**
 * Returns the EmptysetReserve contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The EmptysetReserve contract instance.
 */
const getEmptysetReserveContarct = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.EmptysetReserveAddresses[chainId],
        abi: __1.EmptysetReserveAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getEmptysetReserveContarct = getEmptysetReserveContarct;
/**
 * Returns the MultiInvoker contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The MultiInvoker contract instance.
 */
const getMultiInvokerContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.MultiInvokerAddresses[chainId],
        abi: MultiInvoker_abi_1.MultiInvokerAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getMultiInvokerContract = getMultiInvokerContract;
/**
 * Returns the MarketFactory contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The MarketFactory contract instance.
 */
const getMarketFactoryContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.MarketFactoryAddresses[chainId],
        abi: MarketFactory_abi_1.MarketFactoryAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getMarketFactoryContract = getMarketFactoryContract;
// Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
/**
 * Returns the KeeperFactory contract instance.
 * @param keeperFactoryAddress {@link Address}
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The KeeperFactory contract instance.
 */
const getKeeperFactoryContract = (keeperFactoryAddress, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: keeperFactoryAddress,
        abi: KeeperFactory_abi_1.KeeperFactoryAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getKeeperFactoryContract = getKeeperFactoryContract;
/**
 * Returns the OracleFactory contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The OracleFactory contract instance.
 */
const getOracleFactoryContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.OracleFactoryAddresses[chainId],
        abi: __1.OracleFactoryAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getOracleFactoryContract = getOracleFactoryContract;
/**
 * Returns the GasOracle contract instance.
 * @param gasOracleAddress {@link Address}
 * @param publicClient {@link PublicClient}
 * @returns The GasOracle contract instance.
 */
const getGasOracleContract = (gasOracleAddress, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: gasOracleAddress,
        abi: GasOracle_abi_1.GasOracleAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getGasOracleContract = getGasOracleContract;
// Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
/**
 * Returns the PythFactory contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The PythFactory contract instance.
 */
const getPythFactoryContract = (chainId = __1.DefaultChain.id, publicClient) => {
    return (0, exports.getKeeperFactoryContract)(contracts_1.PythFactoryAddresses[chainId], publicClient);
};
exports.getPythFactoryContract = getPythFactoryContract;
/**
 * Returns the VaultFactory contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The VaultFactory contract instance.
 */
const getVaultFactoryContract = (chainId = __1.DefaultChain.id, publicClient) => {
    const contract = (0, viem_1.getContract)({
        address: contracts_1.VaultFactoryAddresses[chainId],
        abi: VaultFactory_abi_1.VaultFactoryAbi,
        client: { public: publicClient },
    });
    return contract;
};
exports.getVaultFactoryContract = getVaultFactoryContract;
// Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
/**
 * Returns the Vault contract instance.
 * @param vaultAddress Vault {@link Address}
 * @param publicClient {@link PublicClient}
 * @returns The Vault contract instance.
 */
function getVaultContract(vaultAddress, publicClient) {
    return (0, viem_1.getContract)({ abi: __1.VaultAbi, address: vaultAddress, client: { public: publicClient } });
}
exports.getVaultContract = getVaultContract;
// Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
/**
 * Returns the Market contract instance.
 * @param marketAddress Market {@link Address}
 * @param publicClient {@link PublicClient}
 * @returns The Market contract instance.
 */
function getMarketContract(marketAddress, publicClient) {
    return (0, viem_1.getContract)({ abi: __1.MarketAbi, address: marketAddress, client: { public: publicClient } });
}
exports.getMarketContract = getMarketContract;
/**
 * Returns the Oracle contract instance.
 * @param oracleAddress Oracle {@link Address}
 * @param publicClient {@link PublicClient}
 * @returns The Oracle contract instance.
 */
function getOracleContract(oracleAddress, publicClient) {
    return (0, viem_1.getContract)({ abi: __1.OracleAbi, address: oracleAddress, client: { public: publicClient } });
}
exports.getOracleContract = getOracleContract;
/**
 * Returns the KeeperOracle contract instance.
 * @param keeperOracleAddress Keeper oracle {@link Address}
 * @param publicClient {@link PublicClient}
 * @returns The KeeperOracle contract instance.
 */
function getKeeperOracleContract(keeperOracleAddress, publicClient) {
    return (0, viem_1.getContract)({
        abi: __1.KeeperOracleAbi,
        address: keeperOracleAddress,
        client: { public: publicClient },
    });
}
exports.getKeeperOracleContract = getKeeperOracleContract;
/**
 * Returns the Collateral Account Controller contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The Collateral Account Controller contract instance.
 */
function getControllerContract(chainId = __1.DefaultChain.id, publicClient) {
    return (0, viem_1.getContract)({ abi: __1.ControllerAbi, address: contracts_1.ControllerAddresses[chainId], client: { public: publicClient } });
}
exports.getControllerContract = getControllerContract;
/**
 * Returns the Manager contract instance.
 * @param chainId {@link SupportedChainId}
 * @param publicClient {@link PublicClient}
 * @returns The Manager contract instance.
 */
function getManagerContract(chainId = __1.DefaultChain.id, publicClient) {
    return (0, viem_1.getContract)({ abi: __1.ManagerAbi, address: contracts_1.ManagerAddresses[chainId], client: { public: publicClient } });
}
exports.getManagerContract = getManagerContract;
/**
 * Contracts module class
 * @param config SDK configuration
 * @param config.chainId {@link SupportedChainId}
 * @param config.publicClient {@link PublicClient}
 * @param config.signer {@link WalletClient}
 *
 * @returns Contracts module instance
 */
class ContractsModule {
    constructor(config) {
        this.config = config;
    }
    /**
     * Returns the DSU contract instance.
     * @returns The DSU contract instance.
     */
    getDSUContract() {
        return (0, exports.getDSUContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the USDC contract instance.
     * @returns The USDC contract instance.
     */
    getUSDCContract() {
        return (0, exports.getUSDCContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the EmptysetReserve contract instance.
     * @returns The EmptysetReserve contract instance.
     */
    getEmptysetReserveContract() {
        return (0, exports.getEmptysetReserveContarct)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the MultiInvoker contract instance.
     * @returns The MultiInvoker contract instance.
     */
    getMultiInvokerContract() {
        return (0, exports.getMultiInvokerContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the MarketFactory contract instance.
     * @returns The MarketFactory contract instance.
     */
    getMarketFactoryContract() {
        return (0, exports.getMarketFactoryContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the OracleFactory contract instance.
     * @returns The OracleFactory contract instance.
     */
    getOracleFactoryContract() {
        return (0, exports.getOracleFactoryContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the GasOracle contract instance.
     * @returns The GasOracle contract instance.
     */
    getGasOracleContract(gasOracleAddress) {
        return (0, exports.getGasOracleContract)(gasOracleAddress, this.config.publicClient);
    }
    // Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
    /**
     * Returns the KeeperFactory contract instance.
     * @param keeperFactoryAddress - The keeper factory address.
     * @returns The KeeperFactory contract instance.
     */
    getKeeperFactoryContract(keeperFactoryAddress) {
        return (0, exports.getKeeperFactoryContract)(keeperFactoryAddress, this.config.publicClient);
    }
    // Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
    /**
     * Returns the PythFactory contract instance.
     * @returns The PythFactory contract instance.
     */
    getPythFactoryContract() {
        return (0, exports.getPythFactoryContract)(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the VaultFactory contract instance.
     * @returns The VaultFactory contract instance.
     */
    getVaultFactoryContract() {
        return (0, exports.getVaultFactoryContract)(this.config.chainId, this.config.publicClient);
    }
    // Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
    /**
     * Returns the Market contract instance.
     * @param marketAddress - The market address.
     * @returns The Market contract instance.
     */
    getMarketContract(marketAddress) {
        return getMarketContract(marketAddress, this.config.publicClient);
    }
    // Needs explicit return type due to: 'The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.'
    /**
     * Returns the Vault contract instance.
     * @param vaultAddress - The vault address.
     * @returns The Vault contract instance.
     */
    getVaultContract(vaultAddress) {
        return getVaultContract(vaultAddress, this.config.publicClient);
    }
    /**
     * Returns the Oracle contract instance.
     * @param oracleAddress - The oracle address.
     * @returns The Oracle contract instance.
     */
    getOracleContract(oracleAddress) {
        return getOracleContract(oracleAddress, this.config.publicClient);
    }
    /**
     * Returns the KeeperOracle contract instance.
     * @param keeperOracleAddress - The keeper oracle address.
     * @returns The KeeperOracle contract instance.
     */
    getKeeperOracleContract(keeperOracleAddress) {
        return getKeeperOracleContract(keeperOracleAddress, this.config.publicClient);
    }
    /**
     * Returns the Collateral Account Controller contract instance.
     * @returns The Collateral Account Controller contract instance.
     */
    getControllerContract() {
        return getControllerContract(this.config.chainId, this.config.publicClient);
    }
    /**
     * Returns the Manager contract instance.
     * @returns The Manager contract instance.
     */
    getManagerContract() {
        return getManagerContract(this.config.chainId, this.config.publicClient);
    }
}
exports.ContractsModule = ContractsModule;
