import { HermesClient } from '@pythnetwork/hermes-client';
import { Chain, PublicClient } from 'viem';
export declare const DefaultChain: {
    blockExplorers: {
        readonly default: {
            readonly name: "Explorer";
            readonly url: "https://explorer.perennial.foundation";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 1;
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 1424;
    name: "Perennial";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.perennial.foundation"];
            readonly webSocket: readonly ["wss://rpc.perennial.foundation"];
        };
    };
    sourceId: 8453;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
};
export declare const SupportedChainIds: readonly [1424, 42161, 421614, 60850];
export declare const chainIdToChainMap: {
    42161: {
        blockExplorers: {
            readonly default: {
                readonly name: "Arbiscan";
                readonly url: "https://arbiscan.io";
                readonly apiUrl: "https://api.arbiscan.io/api";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 7654707;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 42161;
        name: "Arbitrum One";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    };
    421614: {
        blockExplorers: {
            readonly default: {
                readonly name: "Arbiscan";
                readonly url: "https://sepolia.arbiscan.io";
                readonly apiUrl: "https://api-sepolia.arbiscan.io/api";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 81930;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 421614;
        name: "Arbitrum Sepolia";
        nativeCurrency: {
            readonly name: "Arbitrum Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
            };
        };
        sourceId?: number | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    };
    1424: {
        blockExplorers: {
            readonly default: {
                readonly name: "Explorer";
                readonly url: "https://explorer.perennial.foundation";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 1;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 1424;
        name: "Perennial";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.perennial.foundation"];
                readonly webSocket: readonly ["wss://rpc.perennial.foundation"];
            };
        };
        sourceId: 8453;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    };
    60850: {
        blockExplorers: {
            readonly default: {
                readonly name: "Explorer";
                readonly url: "https://explorer-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz/";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                readonly blockCreated: 1;
            };
        };
        ensTlds?: readonly string[] | undefined;
        id: 60850;
        name: "Perennial Sepolia";
        nativeCurrency: {
            readonly decimals: 18;
            readonly name: "Ether";
            readonly symbol: "ETH";
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz"];
                readonly webSocket: readonly ["wss://rpc-perennial-testnet-op-base-tia-dphnnr04wr.t.conduit.xyz"];
            };
        };
        sourceId: 84532;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    };
};
export type SupportedChainId = (typeof SupportedChainIds)[number];
export declare const BackupPythClient: HermesClient;
export declare const pythBenchmarksURL = "https://benchmarks.pyth.network";
export declare const chains: {
    [chainId in SupportedChainId]: Chain;
};
export declare const ExplorerURLs: {
    [chainId in SupportedChainId]: string;
};
export declare const ExplorerNames: {
    [chainId in SupportedChainId]: string;
};
export declare const isSupportedChain: (chainId?: number) => boolean;
export declare const mainnetChains: ({
    blockExplorers: {
        readonly default: {
            readonly name: "Explorer";
            readonly url: "https://explorer.perennial.foundation";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 1;
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 1424;
    name: "Perennial";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.perennial.foundation"];
            readonly webSocket: readonly ["wss://rpc.perennial.foundation"];
        };
    };
    sourceId: 8453;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
} | {
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
            readonly apiUrl: "https://api.arbiscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
    ensTlds?: readonly string[] | undefined;
    id: 42161;
    name: "Arbitrum One";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
})[];
export declare const isTestnet: (chainId?: number) => boolean;
export declare function getRpcURLFromPublicClient(publicClient: PublicClient): any;
//# sourceMappingURL=network.d.ts.map