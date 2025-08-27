export declare const EmptysetReserveAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "dsu_";
        readonly type: "address";
    }, {
        readonly internalType: "Token6";
        readonly name: "usdc_";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "UInitializableAlreadyInitializedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UInitializableNotInitializingError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UInitializableZeroVersionError";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "borrowAmount";
        readonly type: "uint256";
    }];
    readonly name: "Borrow";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "mintAmount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "costAmount";
        readonly type: "uint256";
    }];
    readonly name: "Mint";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "costAmount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "redeemAmount";
        readonly type: "uint256";
    }];
    readonly name: "Redeem";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "repayAmount";
        readonly type: "uint256";
    }];
    readonly name: "Repay";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DSU";
    readonly outputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "USDC";
    readonly outputs: readonly [{
        readonly internalType: "Token6";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "debt";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "redeemPrice";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "repay";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
    readonly type: "function";
}];
//# sourceMappingURL=EmptysetReserve.abi.d.ts.map