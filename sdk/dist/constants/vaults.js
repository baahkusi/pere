"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainVaultsWithAddress = exports.ChainVaults = exports.VaultMetadata = exports.SupportedVaults = exports.PerennialVaultType = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const arrayUtils_1 = require("../utils/arrayUtils");
const customChains_1 = require("./customChains");
var PerennialVaultType;
(function (PerennialVaultType) {
    PerennialVaultType["alpha"] = "alpha";
    PerennialVaultType["bravo"] = "bravo";
})(PerennialVaultType || (exports.PerennialVaultType = PerennialVaultType = {}));
exports.SupportedVaults = {
    [chains_1.arbitrum.id]: { alpha: true, bravo: true },
    [chains_1.arbitrumSepolia.id]: { alpha: false, bravo: false },
    [customChains_1.perennial.id]: { alpha: false, bravo: false },
    [customChains_1.perennialSepolia.id]: { alpha: false, bravo: false },
};
exports.VaultMetadata = {
    [chains_1.arbitrum.id]: {
        [PerennialVaultType.alpha]: { name: 'ETH Vault' },
        [PerennialVaultType.bravo]: { name: 'BTC Vault' },
    },
    [chains_1.arbitrumSepolia.id]: {
        [PerennialVaultType.alpha]: { name: 'ETH Vault' },
        [PerennialVaultType.bravo]: { name: 'BTC Vault' },
    },
    [customChains_1.perennial.id]: {
        [PerennialVaultType.alpha]: { name: 'Perennial AMM Vault' },
    },
    [customChains_1.perennialSepolia.id]: {
        [PerennialVaultType.alpha]: { name: 'Perennial AMM Vault' },
    },
};
exports.ChainVaults = {
    [chains_1.arbitrum.id]: {
        alpha: (0, viem_1.getAddress)('0xF8b6010FD6ba8F3E52c943A1473B1b1459a73094'),
        bravo: (0, viem_1.getAddress)('0x699e37DfCEe5c6E4c5D0bC1C2FFbC2afEC55f6FB'),
    },
    [chains_1.arbitrumSepolia.id]: {
        alpha: (0, viem_1.getAddress)('0x1602A47BbFB5a3a59cA1788d35ee5e8e79AB84aF'),
    },
    [customChains_1.perennial.id]: {
        alpha: (0, viem_1.getAddress)('0xD7dA94b3F07843bD851FD61166F2C62Ae6267714'),
    },
    [customChains_1.perennialSepolia.id]: {
        alpha: (0, viem_1.getAddress)('0x39bF98E3829Ea7ca9F3e711DB86a8BFd41a29c55'),
    },
};
const chainVaultsWithAddress = (chainId) => {
    return Object.entries(exports.ChainVaults[chainId])
        .map(([vault, vaultAddress]) => (!!vaultAddress ? { vault: vault, vaultAddress } : null))
        .filter(arrayUtils_1.notEmpty);
};
exports.chainVaultsWithAddress = chainVaultsWithAddress;
