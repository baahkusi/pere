export declare const OracleFactoryAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation_";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
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
    readonly name: "OracleFactoryAlreadyCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleFactoryInvalidIdError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleFactoryNotCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleFactoryNotRegisteredError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleParameterStorageInvalidError";
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
        readonly internalType: "contract IFactory";
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "CallerAuthorized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "contract IOracleProviderFactory";
        readonly name: "factory";
        readonly type: "address";
    }];
    readonly name: "FactoryRegistered";
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
    readonly inputs: readonly [];
    readonly name: "acceptOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IOracleProviderFactory";
        readonly name: "factory";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracle";
        readonly name: "newOracle";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOracleProviderFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "factories";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
    readonly inputs: readonly [];
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
            readonly name: "maxGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxSettlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxOracleFee";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OracleParameter";
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
        readonly internalType: "contract IOracleProviderFactory";
        readonly name: "factory";
        readonly type: "address";
    }];
    readonly name: "register";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "id";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IOracleProviderFactory";
        readonly name: "factory";
        readonly type: "address";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxGranularity";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxSettlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxOracleFee";
            readonly type: "uint256";
        }];
        readonly internalType: "struct OracleParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
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
//# sourceMappingURL=OracleFactory.abi.d.ts.map