export declare const perennialSepolia: {
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
export declare const perennial: {
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
//# sourceMappingURL=customChains.d.ts.map