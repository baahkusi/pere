"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRpcURLFromPublicClient = exports.isTestnet = exports.mainnetChains = exports.isSupportedChain = exports.ExplorerNames = exports.ExplorerURLs = exports.chains = exports.pythBenchmarksURL = exports.BackupPythClient = exports.chainIdToChainMap = exports.SupportedChainIds = exports.DefaultChain = void 0;
const hermes_client_1 = require("@pythnetwork/hermes-client");
const chains_1 = require("viem/chains");
const customChains_1 = require("./customChains");
exports.DefaultChain = customChains_1.perennial;
exports.SupportedChainIds = [customChains_1.perennial.id, chains_1.arbitrum.id, chains_1.arbitrumSepolia.id, customChains_1.perennialSepolia.id];
exports.chainIdToChainMap = {
    [chains_1.arbitrum.id]: chains_1.arbitrum,
    [chains_1.arbitrumSepolia.id]: chains_1.arbitrumSepolia,
    [customChains_1.perennial.id]: customChains_1.perennial,
    [customChains_1.perennialSepolia.id]: customChains_1.perennialSepolia,
};
exports.BackupPythClient = new hermes_client_1.HermesClient('https://hermes.pyth.network', {
    timeout: 30000,
});
exports.pythBenchmarksURL = 'https://benchmarks.pyth.network';
exports.chains = {
    [chains_1.arbitrum.id]: chains_1.arbitrum,
    [chains_1.arbitrumSepolia.id]: chains_1.arbitrumSepolia,
    [customChains_1.perennial.id]: customChains_1.perennial,
    [customChains_1.perennialSepolia.id]: customChains_1.perennialSepolia,
};
exports.ExplorerURLs = {
    [chains_1.arbitrum.id]: chains_1.arbitrum.blockExplorers.default.url,
    [chains_1.arbitrumSepolia.id]: chains_1.arbitrumSepolia.blockExplorers.default.url,
    [customChains_1.perennial.id]: customChains_1.perennial.blockExplorers.default.url,
    [customChains_1.perennialSepolia.id]: customChains_1.perennialSepolia.blockExplorers.default.url,
};
exports.ExplorerNames = {
    [chains_1.arbitrum.id]: chains_1.arbitrum.blockExplorers.default.name,
    [chains_1.arbitrumSepolia.id]: chains_1.arbitrumSepolia.blockExplorers.default.name,
    [customChains_1.perennial.id]: customChains_1.perennial.blockExplorers.default.name,
    [customChains_1.perennialSepolia.id]: customChains_1.perennialSepolia.blockExplorers.default.name,
};
const isSupportedChain = (chainId) => chainId !== undefined && exports.SupportedChainIds.includes(chainId);
exports.isSupportedChain = isSupportedChain;
exports.mainnetChains = [customChains_1.perennial, chains_1.arbitrum];
const isTestnet = (chainId) => exports.mainnetChains.every((c) => c.id !== chainId);
exports.isTestnet = isTestnet;
function getRpcURLFromPublicClient(publicClient) {
    if (publicClient.transport.type === 'fallback')
        return publicClient.transport.transports[0].value.url;
    return publicClient.transport.url;
}
exports.getRpcURLFromPublicClient = getRpcURLFromPublicClient;
