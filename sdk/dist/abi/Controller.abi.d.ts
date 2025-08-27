export declare const ControllerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }, {
        readonly internalType: "contract IMarketFactory";
        readonly name: "marketFactory";
        readonly type: "address";
    }, {
        readonly internalType: "contract IVerifierBase";
        readonly name: "nonceManager";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerGroupBalancedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerInvalidRebalanceConfigError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerInvalidRebalanceGroupError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerInvalidRebalanceMarketsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerInvalidRebalanceTargetsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerInvalidSignerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "ControllerMarketAlreadyInGroupError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ControllerNotOperatorError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "ControllerUnsupportedMarketError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FactoryNotInstanceError";
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
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "value";
        readonly type: "int256";
    }];
    readonly name: "UFixed18UnderflowError";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IAccount";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AccountDeployed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "GroupRebalanced";
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
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "markets";
        readonly type: "uint256";
    }];
    readonly name: "RebalanceGroupConfigured";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "target";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "threshold";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct RebalanceConfig";
        readonly name: "newConfig";
        readonly type: "tuple";
    }];
    readonly name: "RebalanceMarketConfigured";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "Unpaused";
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
    readonly name: "MAX_GROUPS_PER_OWNER";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MAX_MARKETS_PER_GROUP";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
    readonly name: "SALT";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
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
    readonly name: "acceptOwner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "group";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "markets";
            readonly type: "address[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "target";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "threshold";
                readonly type: "uint256";
            }];
            readonly internalType: "struct RebalanceConfig[]";
            readonly name: "configs";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RebalanceConfigChange";
        readonly name: "configChange";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "changeRebalanceConfigWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "chargeFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "checkGroup";
    readonly outputs: readonly [{
        readonly internalType: "Fixed6";
        readonly name: "groupCollateral";
        readonly type: "int256";
    }, {
        readonly internalType: "bool";
        readonly name: "canRebalance";
        readonly type: "bool";
    }, {
        readonly internalType: "Fixed6[]";
        readonly name: "imbalances";
        readonly type: "int256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "deployAccount";
    readonly outputs: readonly [{
        readonly internalType: "contract IAccount";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
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
        readonly internalType: "struct DeployAccount";
        readonly name: "deployAccount_";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "deployAccountWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "getAccountAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
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
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "groupToMarkets";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarket";
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
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "groupToMaxRebalanceFee";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "";
        readonly type: "uint256";
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
        readonly internalType: "contract IAccountVerifier";
        readonly name: "verifier_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IAccountVerifier";
        readonly name: "verifier_";
        readonly type: "address";
    }, {
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "chainlinkFeed_";
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
        readonly name: "keepConfigWithdrawal_";
        readonly type: "tuple";
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
    readonly name: "keepConfigWithdrawal";
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
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "marketToGroup";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "amount";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct MarketTransfer";
        readonly name: "marketTransfer";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "marketTransferWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "nonceManager";
    readonly outputs: readonly [{
        readonly internalType: "contract IVerifierBase";
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
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "rebalanceConfigs";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "target";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "threshold";
            readonly type: "uint256";
        }];
        readonly internalType: "struct RebalanceConfig";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "rebalanceGroup";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "rebalanceGroupMarkets";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarket[]";
        readonly name: "markets";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "accessor";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly internalType: "struct AccessUpdate[]";
                readonly name: "operators";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "accessor";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly internalType: "struct AccessUpdate[]";
                readonly name: "signers";
                readonly type: "tuple[]";
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
            readonly internalType: "struct AccessUpdateBatch";
            readonly name: "accessUpdateBatch";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedAccessUpdateBatch";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relayAccessUpdateBatch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "group";
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
            readonly internalType: "struct GroupCancellation";
            readonly name: "groupCancellation";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedGroupCancellation";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relayGroupCancellation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
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
            readonly name: "nonceCancellation";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedNonceCancellation";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relayNonceCancellation";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "accessor";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly internalType: "struct AccessUpdate";
                readonly name: "access";
                readonly type: "tuple";
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
            readonly internalType: "struct OperatorUpdate";
            readonly name: "operatorUpdate";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedOperatorUpdate";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relayOperatorUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "accessor";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly internalType: "struct AccessUpdate";
                readonly name: "access";
                readonly type: "tuple";
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
            readonly internalType: "struct SignerUpdate";
            readonly name: "signerUpdate";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedSignerUpdate";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relaySignerUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "amount";
                readonly type: "int256";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
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
            readonly internalType: "struct Take";
            readonly name: "take";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct RelayedTake";
        readonly name: "message";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "outerSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "innerSignature";
        readonly type: "bytes";
    }];
    readonly name: "relayTake";
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
}, {
    readonly inputs: readonly [];
    readonly name: "verifier";
    readonly outputs: readonly [{
        readonly internalType: "contract IAccountVerifier";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "unwrap";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
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
        readonly internalType: "struct Withdrawal";
        readonly name: "withdrawal";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "withdrawWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=Controller.abi.d.ts.map