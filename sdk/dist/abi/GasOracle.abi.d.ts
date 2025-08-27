export declare const GasOracleAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "feed";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "decimals";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "computeGas";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed18";
        readonly name: "computeMultiplier";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "computeBase";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "calldataGas";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed18";
        readonly name: "calldataMultiplier";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "calldataBase";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "value";
        readonly type: "int256";
    }];
    readonly name: "UFixed18UnderflowError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CALLDATA_GAS";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "COMPUTE_GAS";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FEED";
    readonly outputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FEED_OFFSET";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "cost";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=GasOracle.abi.d.ts.map