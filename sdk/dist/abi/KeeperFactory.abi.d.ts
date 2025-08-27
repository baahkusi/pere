export declare const KeeperFactoryAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "FactoryNotInstanceError";
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
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryAlreadyCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidIdError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidParameterError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidPayoffError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidSettleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryNotCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryNotInstanceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryVersionOutsideRangeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OwnableAlreadyInitializedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "OwnableNotOwnerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "OwnableNotPendingOwnerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "PausableNotPauserError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PausablePausedError";
    readonly type: "error";
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
        readonly internalType: "contract IInstance";
        readonly name: "instance";
        readonly type: "address";
    }];
    readonly name: "InstanceRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "underlyingId";
        readonly type: "bytes32";
    }];
    readonly name: "OracleAssociated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IOracleProvider";
        readonly name: "oracle";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }];
    readonly name: "OracleCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnerUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "latestGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "effectiveAfter";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "oracleFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "validFrom";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "validTo";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct KeeperOracleParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
    }];
    readonly name: "ParameterUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Paused";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newPauser";
        readonly type: "address";
    }];
    readonly name: "PauserUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IPayoffProvider";
        readonly name: "payoff";
        readonly type: "address";
    }];
    readonly name: "PayoffRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newPendingOwner";
        readonly type: "address";
    }];
    readonly name: "PendingOwnerUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Unpaused";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "_toUnderlyingPayoff";
    readonly outputs: readonly [{
        readonly internalType: "contract IPayoffProvider";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "int16";
        readonly name: "decimals";
        readonly type: "int16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "acceptOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "oracleIds";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "commit";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "commitmentGasOracle";
    readonly outputs: readonly [{
        readonly internalType: "contract IGasOracle";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "oracleId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "underlyingId";
        readonly type: "bytes32";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IPayoffProvider";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "int16";
            readonly name: "decimals";
            readonly type: "int16";
        }];
        readonly internalType: "struct IKeeperFactory.PayoffDefinition";
        readonly name: "payoff";
        readonly type: "tuple";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "contract IKeeperOracle";
        readonly name: "newOracle";
        readonly type: "address";
    }];
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
    readonly name: "factoryType";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IPayoffProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "fromUnderlying";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracleProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "ids";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracleFactory";
        readonly name: "oracleFactory_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IInstance";
        readonly name: "instance";
        readonly type: "address";
    }];
    readonly name: "instances";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oracleFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracleFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "oracles";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracleProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "parameter";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "latestGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "effectiveAfter";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "oracleFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "validFrom";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "validTo";
            readonly type: "uint256";
        }];
        readonly internalType: "struct KeeperOracleParameter";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pauser";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IPayoffProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "payoffs";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pendingOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IPayoffProvider";
        readonly name: "payoff";
        readonly type: "address";
    }];
    readonly name: "register";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "oracleIds";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "versions";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "maxCounts";
        readonly type: "uint256[]";
    }];
    readonly name: "settle";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "settlementGasOracle";
    readonly outputs: readonly [{
        readonly internalType: "contract IGasOracle";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "toUnderlyingId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }];
    readonly name: "toUnderlyingPayoff";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IPayoffProvider";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "int16";
            readonly name: "decimals";
            readonly type: "int16";
        }];
        readonly internalType: "struct IKeeperFactory.PayoffDefinition";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newGranularity";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newOraclefee";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "newValidFrom";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "newValidTo";
        readonly type: "uint256";
    }];
    readonly name: "updateParameter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newPauser";
        readonly type: "address";
    }];
    readonly name: "updatePauser";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newPendingOwner";
        readonly type: "address";
    }];
    readonly name: "updatePendingOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=KeeperFactory.abi.d.ts.map