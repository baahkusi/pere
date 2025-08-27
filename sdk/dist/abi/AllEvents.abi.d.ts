export declare const AllEventsAbi: readonly [{
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
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
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
        readonly name: "borrowAmount";
        readonly type: "uint256";
    }];
    readonly name: "Borrow";
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
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "orders";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "protection";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "invalidation";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerReferral";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerReferral";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct Order";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "priceOverride";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "tradeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "offset";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "settlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "liquidationFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "subtractiveFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "solverFee";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct CheckpointAccumulationResult";
        readonly name: "accumulationResult";
        readonly type: "tuple";
    }];
    readonly name: "AccountPositionProcessed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "newCoordinator";
        readonly type: "address";
    }];
    readonly name: "CoordinatorUpdated";
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
        readonly internalType: "Fixed6";
        readonly name: "amount";
        readonly type: "int256";
    }];
    readonly name: "ExposureClaimed";
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
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "FeeClaimed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "orders";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "protection";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "invalidation";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerReferral";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerReferral";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct Order";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "orders";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "notional";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "orderReferral";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "solverReferral";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct Guarantee";
        readonly name: "guarantee";
        readonly type: "tuple";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "liquidator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "orderReferrer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "guaranteeReferrer";
        readonly type: "address";
    }];
    readonly name: "OrderCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "orderId";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "orders";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "longNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shortNeg";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "protection";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "invalidation";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerReferral";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerReferral";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct Order";
        readonly name: "order";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "tradeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "subtractiveFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "tradeOffset";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "tradeOffsetMaker";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "tradeOffsetMarket";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "adiabaticExposure";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "adiabaticExposureMaker";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "adiabaticExposureMarket";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "fundingMaker";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "fundingLong";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "fundingShort";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "fundingFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "interestMaker";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "interestLong";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "interestShort";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "interestFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "pnlMaker";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "pnlLong";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "pnlShort";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "settlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "liquidationFee";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct VersionAccumulationResult";
        readonly name: "accumulationResult";
        readonly type: "tuple";
    }];
    readonly name: "PositionProcessed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "margin";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maintenance";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "linearFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "proportionalFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "adiabaticFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "scale";
                readonly type: "uint256";
            }];
            readonly internalType: "struct LinearAdiabatic6";
            readonly name: "takerFee";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "linearFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "proportionalFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "scale";
                readonly type: "uint256";
            }];
            readonly internalType: "struct NoopAdiabatic6";
            readonly name: "makerFee";
            readonly type: "tuple";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "efficiencyLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "liquidationFee";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "minRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "maxRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "targetRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "targetUtilization";
                readonly type: "uint256";
            }];
            readonly internalType: "struct UJumpRateUtilizationCurve6";
            readonly name: "utilizationCurve";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "k";
                readonly type: "uint256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "min";
                readonly type: "int256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "max";
                readonly type: "int256";
            }];
            readonly internalType: "struct PController6";
            readonly name: "pController";
            readonly type: "tuple";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minMargin";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minMaintenance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "staleAfter";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "makerReceiveOnly";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct RiskParameter";
        readonly name: "newRiskParameter";
        readonly type: "tuple";
    }];
    readonly name: "RiskParameterUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
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
    readonly name: "ExtensionUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "Token18";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract IOracleProvider";
            readonly name: "oracle";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct IMarket.MarketDefinition";
        readonly name: "definition";
        readonly type: "tuple";
    }];
    readonly name: "MarketCreated";
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
        readonly name: "referrer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "newFee";
        readonly type: "uint256";
    }];
    readonly name: "ReferralFeeUpdated";
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
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "newEnabled";
        readonly type: "bool";
    }];
    readonly name: "SignerUpdated";
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
        readonly internalType: "contract IMarket";
        readonly name: "newMarket";
        readonly type: "address";
    }];
    readonly name: "MarketUpdated";
    readonly type: "event";
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
        readonly internalType: "UFixed18";
        readonly name: "newMark";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "profitShares";
        readonly type: "uint256";
    }];
    readonly name: "MarkUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "marketId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "MarketRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "depositAssets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "redeemShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "claimAssets";
        readonly type: "uint256";
    }];
    readonly name: "Updated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "Token18";
        readonly name: "asset";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IMarket";
        readonly name: "initialMarket";
        readonly type: "address";
    }];
    readonly name: "VaultCreated";
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
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "GroupCancelled";
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
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "NonceCancelled";
    readonly type: "event";
}];
//# sourceMappingURL=AllEvents.abi.d.ts.map