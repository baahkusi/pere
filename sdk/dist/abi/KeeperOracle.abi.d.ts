export declare const KeeperOracleAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timeout_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "DivisionByZero";
    readonly type: "error";
}, {
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
    readonly name: "KeeperOracleInvalidCallbackError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleInvalidPriceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleNoPriorRequestsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleNotOracleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleVersionOutsideRangeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleProviderUnauthorizedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PriceResponseStorageInvalidError";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IMarket";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly indexed: true;
        readonly internalType: "struct IKeeperOracle.SettlementCallback";
        readonly name: "callback";
        readonly type: "tuple";
    }];
    readonly name: "CallbackFulfilled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IMarket";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly indexed: true;
        readonly internalType: "struct IKeeperOracle.SettlementCallback";
        readonly name: "callback";
        readonly type: "tuple";
    }];
    readonly name: "CallbackRequested";
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
        readonly name: "newOracle";
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
        readonly name: "";
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
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
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
        readonly internalType: "struct OracleVersion";
        readonly name: "version";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "commit";
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
            readonly internalType: "uint64";
            readonly name: "latestVersion";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "currentIndex";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "latestIndex";
            readonly type: "uint64";
        }];
        readonly internalType: "struct IKeeperOracle.KeeperOracleGlobal";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
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
        readonly name: "latestVersion";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "localCallbacks";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "next";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oracle";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracle";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracle";
        readonly name: "newOracle";
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
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "requests";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }];
    readonly name: "responses";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "syncFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "asyncFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "oracleFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly internalType: "struct PriceResponse";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxCount";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "settle";
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
        readonly name: "";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "timeout";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=KeeperOracle.abi.d.ts.map