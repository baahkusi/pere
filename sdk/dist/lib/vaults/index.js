"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultsModule = exports.fetchVaultCommitments = void 0;
const viem_1 = require("viem");
const __1 = require("..");
const __2 = require("../..");
const constants_1 = require("../../constants");
const addressUtils_1 = require("../../utils/addressUtils");
const oracle_1 = require("../oracle");
const chain_1 = require("./chain");
/**
 * Fetches the vault commitments for a given chain.
 * @param chainId - The chain ID.
 * @param oracleClients - {@link OracleClients}
 * @param preMarketSnapshots - The pre-market snapshots.
 * @param marketOracles - The market oracles.
 * @param publicClient - The public client.
 * @returns The vault commitments.
 */
const fetchVaultCommitments = async ({ chainId, oracleClients, preMarketSnapshots, marketOracles, publicClient, }) => {
    const oracles = preMarketSnapshots
        .map((marketSnapshot) => {
        const oracle = Object.values(marketOracles).find((o) => o.oracleAddress === marketSnapshot.oracle);
        if (!oracle)
            return;
        return oracle;
    })
        .filter(__2.notEmpty);
    const commitments = await (0, oracle_1.oracleCommitmentsLatest)({
        chainId,
        oracleClients: oracleClients,
        publicClient,
        requests: (0, oracle_1.marketOraclesToUpdateDataRequest)(Object.values(oracles)),
    });
    return commitments.map((c) => ({
        value: c.value,
        commitAction: (0, __2.buildCommitPrice)({
            keeperFactory: c.keeperFactory,
            version: c.version,
            ids: c.ids,
            vaa: c.updateData,
            revertOnFailure: false,
            value: c.value,
        }),
    }));
};
exports.fetchVaultCommitments = fetchVaultCommitments;
/**
 * Vaults module class
 * @param config SDK configuration
 * @param config.chainId {@link SupportedChainId}
 * @param config.publicClient Public Client
 * @param config.graphClient GraphQl Client
 * @param config.oracleClients Oracle Clients
 * @param config.walletClient Wallet Client
 * @param config.operatingFor If set, the module will read data and send multi-invoker transactions on behalf of this address.
 *
 * @returns Vaults module instance
 */
class VaultsModule {
    constructor(config) {
        this.defaultAddress = viem_1.zeroAddress;
        this.config = config;
        this.config.operatingFor = config.operatingFor ?? config.walletClient?.account?.address ?? this.defaultAddress;
    }
    get read() {
        return {
            /**
             * Fetches the vault snapshots
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketOracles {@link MarketOracles}
             * @param onError Error callback
             * @param onSuccess Success callback
             * @returns {@link VaultSnapshots}
             */
            vaultSnapshots: (args = {}) => {
                return (0, chain_1.fetchVaultSnapshots)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    address: this.defaultAddress,
                    ...args,
                });
            },
            /**
             * Fetches the vault commitments
             * @param preMarketSnapshots {@link VaultSnapshot['pre']['marketSnapshots']}
             * @param marketOracles {@link MarketOracles}
             * @returns The vault commitments.
             */
            vaultCommitments: (args) => {
                return (0, exports.fetchVaultCommitments)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    ...args,
                });
            },
            /**
             * Fetches the vault position history
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns The vault position history.
             */
            vaultPositionHistory: (args = {}) => {
                return (0, chain_1.fetchVaultPositionHistory)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    address: this.defaultAddress,
                    ...args,
                });
            },
        };
    }
    get build() {
        return {
            /**
             * Build a transaction to deposit into a vault
             * @param vaultAddress Vault Address
             * @param amount Amount to deposit
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @returns Vault deposit transaction data.
             */
            deposit: (args) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                return (0, __1.buildDepositTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    ...args,
                    address,
                });
            },
            /**
             * Build a transaction to redeem shares from a vault
             *
             * @param vaultAddress Vault Address
             * @param amount Amount to redeem
             * @param assets (optional) boolean - Whether to redeem assets
             * @param max (optional) boolean - Whether to redeem max
             * @param marketOracles {@link MarketOracles}
             * @param vaultSnapshots {@link VaultSnapshots}
             */
            redeem: (args) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                return (0, __1.buildRedeemSharesTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    ...args,
                    address,
                });
            },
            /**
             * Build a transaction to claim rewards from a vault
             * @param vaultAddress Vault Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketOracles {@link MarketOracles}
             * @param vaultSnapshots {@link VaultSnapshots}
             * @returns Vault claim transaction data.
             */
            claim: (args) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                return (0, __1.buildClaimTx)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    ...args,
                    address,
                });
            },
        };
    }
    get write() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const txOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {
            /**
             * Deposit into a vault
             * @param vaultAddress Vault Address
             * @param amount Amount to deposit
             * @param marketOracles {@link MarketOracles}
             * @param vaultSnapshots {@link VaultSnapshots}
             * @returns Transaction hash
             * */
            deposit: async (...args) => {
                const tx = await this.build.deposit(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Redeem shares from a vault
             * @param vaultAddress Vault Address
             * @param amount Amount to redeem
             * @param assets (optional) boolean - Whether to redeem assets
             * @param max (optional) boolean - Whether to redeem max
             * @param marketOracles {@link MarketOracles}
             * @param vaultSnapshots {@link VaultSnapshots}
             * @returns Transaction hash
             */
            redeem: async (...args) => {
                const tx = await this.build.redeem(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
            /**
             * Claim rewards from a vault
             * @param vaultAddress Vault Address
             * @param address Wallet Address [defaults to operatingFor or walletSigner address if set]
             * @param marketOracles {@link MarketOracles}
             * @param vaultSnapshots {@link VaultSnapshots}
             * @returns Transaction hash
             */
            claim: async (...args) => {
                const tx = await this.build.claim(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
        };
    }
}
exports.VaultsModule = VaultsModule;
