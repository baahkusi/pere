"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollateralAccountModule = void 0;
const viem_1 = require("viem");
const constants_1 = require("../../constants");
const addressUtils_1 = require("../../utils/addressUtils");
const intentUtils_1 = require("../../utils/intentUtils");
const intent_1 = require("./intent");
const buildDeployAccountSigningPayload_1 = require("./intent/buildDeployAccountSigningPayload");
const buildMarketTransferSigningPayload_1 = require("./intent/buildMarketTransferSigningPayload");
const buildRebalanceConfigChangeSigningPayload_1 = require("./intent/buildRebalanceConfigChangeSigningPayload");
const buildRelayedAccessUpdateBatchSigningPayload_1 = require("./intent/buildRelayedAccessUpdateBatchSigningPayload");
const buildRelayedGroupCancellationSigningPayload_1 = require("./intent/buildRelayedGroupCancellationSigningPayload");
const buildRelayedNonceCancellationSigningPayload_1 = require("./intent/buildRelayedNonceCancellationSigningPayload");
const buildRelayedOperatorUpdateSigningPayload_1 = require("./intent/buildRelayedOperatorUpdateSigningPayload");
const buildRelayedSignerUpdateSigningPayload_1 = require("./intent/buildRelayedSignerUpdateSigningPayload");
const buildWithdrawalSigningPayload_1 = require("./intent/buildWithdrawalSigningPayload");
const collateralAccountAddress_1 = require("./read/collateralAccountAddress");
class CollateralAccountModule {
    constructor(config) {
        this.defaultAddress = viem_1.zeroAddress;
        this.config = config;
        this.defaultAddress = config.operatingFor ?? config.walletClient?.account?.address ?? this.defaultAddress;
    }
    get read() {
        return {
            collateralAccountAddress: (args = {}) => {
                const address = args.address ?? this.defaultAddress;
                (0, addressUtils_1.throwIfZeroAddress)(address);
                return (0, collateralAccountAddress_1.readCollateralAccountAddress)({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    ...args,
                    address,
                });
            },
        };
    }
    get build() {
        return {
            signed: {
                deployAccount: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildDeployAccountSigningPayload_1.buildDeployAccountSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                withdrawal: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildWithdrawalSigningPayload_1.buildWithdrawalSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                marketTransfer: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildMarketTransferSigningPayload_1.buildMarketTransferSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                rebalanceConfigChange: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRebalanceConfigChangeSigningPayload_1.buildRebalanceConfigChangeSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedSignerUpdate: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRelayedSignerUpdateSigningPayload_1.buildRelayedSignerUpdateSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedOperatorUpdate: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRelayedOperatorUpdateSigningPayload_1.buildRelayedOperatorUpdateSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedAccessUpdateBatch: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRelayedAccessUpdateBatchSigningPayload_1.buildRelayedAccessUpdateBatchSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedGroupCancellation: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRelayedGroupCancellationSigningPayload_1.buildRelayedGroupCancellationSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedNonceCancellation: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, buildRelayedNonceCancellationSigningPayload_1.buildRelayedNonceCancellationSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
                relayedTake: (args) => {
                    const address = args.address ?? this.defaultAddress;
                    (0, addressUtils_1.throwIfZeroAddress)(address);
                    args.overrides = (0, intentUtils_1.addSignerOverrideFromWalletClientSigner)({
                        walletClientSigner: this.config.walletClient?.account?.address,
                        overrides: args.overrides,
                    });
                    return (0, intent_1.buildRelayedTakeSigningPayload)({ chainId: this.config.chainId, ...args, address });
                },
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const txOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {};
    }
    get sign() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const signOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {
            deployAccount: async (...args) => {
                const { deployAccount } = this.build.signed.deployAccount(...args);
                const signature = await walletClient.signTypedData({ ...deployAccount, ...signOpts });
                return {
                    signature,
                    deployAccount,
                };
            },
            withdrawal: async (...args) => {
                const { withdrawal } = this.build.signed.withdrawal(...args);
                const signature = await walletClient.signTypedData({ ...withdrawal, ...signOpts });
                return {
                    signature,
                    withdrawal,
                };
            },
            marketTransfer: async (...args) => {
                const { marketTransfer } = this.build.signed.marketTransfer(...args);
                const signature = await walletClient.signTypedData({ ...marketTransfer, ...signOpts });
                return {
                    signature,
                    marketTransfer,
                };
            },
            rebalanceConfigChange: async (...args) => {
                const { rebalanceConfigChange } = this.build.signed.rebalanceConfigChange(...args);
                const signature = await walletClient.signTypedData({ ...rebalanceConfigChange, ...signOpts });
                return {
                    signature,
                    rebalanceConfigChange,
                };
            },
            relayedSignerUpdate: async (...args) => {
                const { signerUpdate, relayedSignerUpdate } = this.build.signed.relayedSignerUpdate(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedSignerUpdate, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...signerUpdate, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    signerUpdate,
                    relayedSignerUpdate,
                };
            },
            relayedOperatorUpdate: async (...args) => {
                const { operatorUpdate, relayedOperatorUpdate } = this.build.signed.relayedOperatorUpdate(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedOperatorUpdate, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...operatorUpdate, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    operatorUpdate,
                    relayedOperatorUpdate,
                };
            },
            relayedAccessUpdateBatch: async (...args) => {
                const { relayedAccessUpdateBatch, accessUpdateBatch } = this.build.signed.relayedAccessUpdateBatch(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedAccessUpdateBatch, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...accessUpdateBatch, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    relayedAccessUpdateBatch,
                    accessUpdateBatch,
                };
            },
            relayedGroupCancellation: async (...args) => {
                const { groupCancellation, relayedGroupCancellation } = this.build.signed.relayedGroupCancellation(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedGroupCancellation, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...groupCancellation, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    groupCancellation,
                    relayedGroupCancellation,
                };
            },
            relayedNonceCancellation: async (...args) => {
                const { nonceCancellation, relayedNonceCancellation } = this.build.signed.relayedNonceCancellation(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedNonceCancellation, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...nonceCancellation, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    nonceCancellation,
                    relayedNonceCancellation,
                };
            },
            relayedTake: async (...args) => {
                const { relayedTake, take } = this.build.signed.relayedTake(...args);
                const outerSignature = await walletClient.signTypedData({ ...relayedTake, ...signOpts });
                const innerSignature = await walletClient.signTypedData({ ...take, ...signOpts });
                return {
                    outerSignature,
                    innerSignature,
                    relayedTake,
                    take,
                };
            },
        };
    }
}
exports.CollateralAccountModule = CollateralAccountModule;
