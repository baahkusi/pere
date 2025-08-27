export declare const OracleAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "InitializableAlreadyInitializedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InitializableNotInitializingError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InitializableZeroVersionError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "InstanceNotFactoryError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "InstanceNotOwnerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InstancePausedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleNotBeneficiaryError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleNotMarketError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleNotSubOracleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleOutOfOrderCommitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleOutOfSyncError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleProviderUnauthorizedError";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newBeneficiary";
        readonly type: "address";
    }];
    readonly name: "BeneficiaryUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "settlementFee";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "oracleFee";
        readonly type: "uint256";
    }];
    readonly name: "FeeReceived";
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
        readonly indexed: false;
        readonly internalType: "contract IMarket";
        readonly name: "newMarket";
        readonly type: "address";
    }];
    readonly name: "MarketUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct OracleVersion";
        readonly name: "version";
        readonly type: "tuple";
    }];
    readonly name: "OracleProviderVersionFulfilled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "newPrice";
        readonly type: "bool";
    }];
    readonly name: "OracleProviderVersionRequested";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "contract IOracleProvider";
        readonly name: "newProvider";
        readonly type: "address";
    }];
    readonly name: "OracleUpdated";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }];
    readonly name: "at";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly internalType: "struct OracleVersion";
        readonly name: "atVersion";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "settlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "oracleFee";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OracleReceipt";
        readonly name: "atReceipt";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "beneficiary";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "settlementFeeRequested";
        readonly type: "uint256";
    }];
    readonly name: "claimFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "current";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "contract IFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "global";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint128";
            readonly name: "current";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "latest";
            readonly type: "uint128";
        }];
        readonly internalType: "struct IOracle.OracleGlobal";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracleProvider";
        readonly name: "initialProvider";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "name_";
        readonly type: "string";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "latest";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly internalType: "struct OracleVersion";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "market";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "oracles";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracleProvider";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint96";
        readonly name: "timestamp";
        readonly type: "uint96";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "newMarket";
        readonly type: "address";
    }];
    readonly name: "register";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "request";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "status";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly internalType: "struct OracleVersion";
        readonly name: "latestVersion";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "currentTimestamp";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracleProvider";
        readonly name: "newProvider";
        readonly type: "address";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newBeneficiary";
        readonly type: "address";
    }];
    readonly name: "updateBeneficiary";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=Oracle.abi.d.ts.map