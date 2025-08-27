export declare const ManagerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "Token6";
        readonly name: "usdc";
        readonly type: "address";
    }, {
        readonly internalType: "Token18";
        readonly name: "dsu";
        readonly type: "address";
    }, {
        readonly internalType: "contract IEmptySetReserve";
        readonly name: "reserve";
        readonly type: "address";
    }, {
        readonly internalType: "contract IMarketFactory";
        readonly name: "marketFactory";
        readonly type: "address";
    }, {
        readonly internalType: "contract IOrderVerifier";
        readonly name: "verifier";
        readonly type: "address";
    }, {
        readonly internalType: "contract IController";
        readonly name: "controller";
        readonly type: "address";
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
    readonly name: "ManagerCannotCancelError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ManagerCannotExecuteError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ManagerCannotReduceMaxFee";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ManagerInvalidOrderNonceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ManagerInvalidSignerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ManagerNotOperatorError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TriggerOrderInvalidError";
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
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "TriggerOrderCancelled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
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
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSpent";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "referrer";
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
            }, {
                readonly internalType: "bool";
                readonly name: "fixedFee";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "unwrap";
                readonly type: "bool";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee";
            readonly type: "tuple";
        }];
        readonly indexed: false;
        readonly internalType: "struct TriggerOrder";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "TriggerOrderExecuted";
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
        }, {
            readonly internalType: "bool";
            readonly name: "fixedFee";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "unwrap";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct InterfaceFee";
        readonly name: "fee";
        readonly type: "tuple";
    }];
    readonly name: "TriggerOrderInterfaceFeeCharged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
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
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSpent";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "referrer";
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
            }, {
                readonly internalType: "bool";
                readonly name: "fixedFee";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "unwrap";
                readonly type: "bool";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee";
            readonly type: "tuple";
        }];
        readonly indexed: false;
        readonly internalType: "struct TriggerOrder";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "TriggerOrderPlaced";
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
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "cancelOrder";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IMarket";
                readonly name: "market";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "maxFee";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "signer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "domain";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nonce";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "group";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "expiry";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Common";
                readonly name: "common";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Action";
            readonly name: "action";
            readonly type: "tuple";
        }];
        readonly internalType: "struct CancelOrderAction";
        readonly name: "request";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "cancelOrderWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "checkOrder";
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
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSpent";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "referrer";
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
            }, {
                readonly internalType: "bool";
                readonly name: "fixedFee";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "unwrap";
                readonly type: "bool";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee";
            readonly type: "tuple";
        }];
        readonly internalType: "struct TriggerOrder";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly internalType: "bool";
        readonly name: "canExecute";
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
    readonly name: "controller";
    readonly outputs: readonly [{
        readonly internalType: "contract IController";
        readonly name: "";
        readonly type: "address";
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
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }];
    readonly name: "executeOrder";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "ethOracle_";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed18";
            readonly name: "multiplierBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bufferBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed18";
            readonly name: "multiplierCalldata";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bufferCalldata";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IKept.KeepConfig";
        readonly name: "keepConfig_";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed18";
            readonly name: "multiplierBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bufferBase";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed18";
            readonly name: "multiplierCalldata";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bufferCalldata";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IKept.KeepConfig";
        readonly name: "keepConfigBuffered_";
        readonly type: "tuple";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "keepConfig";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "multiplierBase";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferBase";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed18";
        readonly name: "multiplierCalldata";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferCalldata";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "keepConfigBuffered";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "multiplierBase";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferBase";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed18";
        readonly name: "multiplierCalldata";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferCalldata";
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
    readonly name: "marketFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarketFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "orderId";
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
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSpent";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "referrer";
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
            }, {
                readonly internalType: "bool";
                readonly name: "fixedFee";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "unwrap";
                readonly type: "bool";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee";
            readonly type: "tuple";
        }];
        readonly internalType: "struct TriggerOrder";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "orderId";
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
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "delta";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isSpent";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "referrer";
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
            }, {
                readonly internalType: "bool";
                readonly name: "fixedFee";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "unwrap";
                readonly type: "bool";
            }];
            readonly internalType: "struct InterfaceFee";
            readonly name: "interfaceFee";
            readonly type: "tuple";
        }];
        readonly internalType: "struct TriggerOrder";
        readonly name: "order";
        readonly type: "tuple";
    }];
    readonly name: "placeOrder";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "side";
                readonly type: "uint8";
            }, {
                readonly internalType: "int8";
                readonly name: "comparison";
                readonly type: "int8";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "price";
                readonly type: "int256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "delta";
                readonly type: "int256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "maxFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isSpent";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
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
                }, {
                    readonly internalType: "bool";
                    readonly name: "fixedFee";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "unwrap";
                    readonly type: "bool";
                }];
                readonly internalType: "struct InterfaceFee";
                readonly name: "interfaceFee";
                readonly type: "tuple";
            }];
            readonly internalType: "struct TriggerOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IMarket";
                readonly name: "market";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "maxFee";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "signer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "domain";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nonce";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "group";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "expiry";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Common";
                readonly name: "common";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Action";
            readonly name: "action";
            readonly type: "tuple";
        }];
        readonly internalType: "struct PlaceOrderAction";
        readonly name: "request";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "placeOrderWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "verifier";
    readonly outputs: readonly [{
        readonly internalType: "contract IOrderVerifier";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=Manager.abi.d.ts.map