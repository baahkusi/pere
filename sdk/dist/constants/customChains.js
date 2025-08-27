"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perennial = exports.perennialSepolia = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
exports.perennialSepolia = (0, viem_1.defineChain)({
    id: 60850,
    name: 'Perennial Sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz'],
            webSocket: ['wss://rpc-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz/' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1,
        },
    },
    sourceId: chains_1.baseSepolia.id,
});
exports.perennial = (0, viem_1.defineChain)({
    id: 1424,
    name: 'Perennial',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.perennial.foundation'],
            webSocket: ['wss://rpc.perennial.foundation'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer.perennial.foundation' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1,
        },
    },
    sourceId: chains_1.base.id,
});
