export declare const MultiInvokerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "Token6";
        readonly name: "usdc_";
        readonly type: "address";
    }, {
        readonly internalType: "Token18";
        readonly name: "dsu_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IFactory";
        readonly name: "marketFactory_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IFactory";
        readonly name: "makerVaultFactory_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IFactory";
        readonly name: "solverVaultFactory_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IBatcher";
        readonly name: "batcher_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IEmptySetReserve";
        readonly name: "reserve_";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "keepBufferBase_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "keepBufferCalldata_";
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
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Fixed18OverflowError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Fixed6OverflowError";
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
    readonly name: "MultiInvokerCantExecuteError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultiInvokerInvalidInstanceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultiInvokerInvalidOrderError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultiInvokerMaxFeeExceededError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultiInvokerOrderMustBeSingleSidedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultiInvokerUnauthorizedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TriggerOrderStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "value";
        readonly type: "int256";
    }];
    readonly name: "UFixed18UnderflowError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "value";
        readonly type: "int256";
    }];
    readonly name: "UFixed6UnderflowError";
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
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct InterfaceFee";
        readonly name: "fee";
        readonly type: "tuple";
    }];
    readonly name: "InterfaceFeeCharged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "applicableGas";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "applicableValue";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "baseFee";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "calldataFee";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed18";
        readonly name: "keeperFee";
        readonly type: "uint256";
    }];
    readonly name: "KeeperCall";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "fee";
        readonly type: "uint256";
    }];
    readonly name: "KeeperFeeCharged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "newEnabled";
        readonly type: "bool";
    }];
    readonly name: "OperatorUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "OrderCancelled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "OrderExecuted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "side";
            readonly type: "uint8";
        }, {
            readonly internalType: "int8";
            readonly name: "comparison";
            readonly type: "int8";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee1";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee2";
            readonly type: "tuple";
        }];
        readonly indexed: false;
        readonly internalType: "struct TriggerOrder";
        readonly name: "order";
        readonly type: "tuple";
    }];
    readonly name: "OrderPlaced";
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
    readonly name: "OPT_BASE_FEE_MULTIPLIER";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
    readonly inputs: readonly [];
    readonly name: "batcher";
    readonly outputs: readonly [{
        readonly internalType: "contract IBatcher";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "canExecuteOrder";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "unwrap";
        readonly type: "bool";
    }];
    readonly name: "claim";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "claimable";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "ethTokenOracleFeed";
    readonly outputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "ethOracle_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IMultiInvoker.PerennialAction";
            readonly name: "action";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "args";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IMultiInvoker.Invocation[]";
        readonly name: "invocations";
        readonly type: "tuple[]";
    }];
    readonly name: "invoke";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum IMultiInvoker.PerennialAction";
            readonly name: "action";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "args";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IMultiInvoker.Invocation[]";
        readonly name: "invocations";
        readonly type: "tuple[]";
    }];
    readonly name: "invoke";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "keepBufferBase";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "keepBufferCalldata";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "keeperToken";
    readonly outputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "latestNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "makerVaultFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "marketFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IFactory";
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
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "operators";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "orders";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "side";
            readonly type: "uint8";
        }, {
            readonly internalType: "int8";
            readonly name: "comparison";
            readonly type: "int8";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee1";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee2";
            readonly type: "tuple";
        }];
        readonly internalType: "struct TriggerOrder";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reserve";
    readonly outputs: readonly [{
        readonly internalType: "contract IEmptySetReserve";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "solverVaultFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "newEnabled";
        readonly type: "bool";
    }];
    readonly name: "updateOperator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=MultiInvoker.abi.d.ts.map