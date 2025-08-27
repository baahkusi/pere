export declare const VaultAbi: readonly [{
    readonly inputs: readonly [];
    readonly name: "AccountStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AccountStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CheckpointStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CheckpointStorageInvalidError";
    readonly type: "error";
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
    readonly name: "MakerStrategyInsufficientAssetsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MakerStrategyInsufficientAssetsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MakerStrategyInsufficientCollateralError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MakerStrategyInsufficientCollateralError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MappingStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RegistrationStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RegistrationStorageInvalidError";
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
    readonly inputs: readonly [];
    readonly name: "VaultAggregateWeightError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultCurrentOutOfSyncError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultDepositLimitExceededError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultExistingOrderError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultIncorrectAssetError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultInsufficientMinimumError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultMarketDoesNotExistError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultMarketExistsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotMarketError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotOperatorError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotSingleSidedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultRedemptionLimitExceededError";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newCoordinator";
        readonly type: "address";
    }];
    readonly name: "CoordinatorUpdated";
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
        readonly internalType: "uint256";
        readonly name: "marketId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "newWeight";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "UFixed6";
        readonly name: "newLeverage";
        readonly type: "uint256";
    }];
    readonly name: "MarketUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "maxDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "profitShare";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct VaultParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
    }];
    readonly name: "ParameterUpdated";
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
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "currentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentTimestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latestTimestamp";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IMarket";
                readonly name: "market";
                readonly type: "address";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "weight";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "leverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Registration[]";
            readonly name: "registrations";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "Fixed6[]";
            readonly name: "collaterals";
            readonly type: "int256[]";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "totalCollateral";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "maxDeposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "minDeposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "profitShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct VaultParameter";
            readonly name: "parameter";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "deposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "redemption";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "shares";
                readonly type: "uint256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "assets";
                readonly type: "int256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "tradeFee";
                readonly type: "int256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "settlementFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deposits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "redemptions";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timestamp";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Checkpoint";
            readonly name: "currentCheckpoint";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "UFixed6";
                readonly name: "deposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "redemption";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "shares";
                readonly type: "uint256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "assets";
                readonly type: "int256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "tradeFee";
                readonly type: "int256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "settlementFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deposits";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "redemptions";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timestamp";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Checkpoint";
            readonly name: "latestCheckpoint";
            readonly type: "tuple";
        }, {
            readonly internalType: "UFixed18";
            readonly name: "mark";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "current";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "latest";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "shares";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "assets";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "deposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "redemption";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Account";
            readonly name: "global";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "current";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "latest";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "shares";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "assets";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "deposit";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "redemption";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Account";
            readonly name: "local";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IVault.Context";
        readonly name: "context";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }];
    readonly name: "_checkpointAtId";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "Fixed6";
            readonly name: "tradeFee";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "settlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "transfer";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }];
        readonly internalType: "struct Checkpoint";
        readonly name: "checkpoint";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "accounts";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "current";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latest";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "assets";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "redemption";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Account";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "asset";
    readonly outputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "checkpoints";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "redemption";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "assets";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "tradeFee";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "settlementFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposits";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "redemptions";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Checkpoint";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "convertToAssets";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "convertToShares";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "coordinator";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
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
    readonly inputs: readonly [{
        readonly internalType: "Token18";
        readonly name: "asset_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IMarket";
        readonly name: "initialMarket";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "initialDeposit";
        readonly type: "uint256";
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
    readonly name: "mark";
    readonly outputs: readonly [{
        readonly internalType: "UFixed18";
        readonly name: "";
        readonly type: "uint256";
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
    readonly inputs: readonly [];
    readonly name: "parameter";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "maxDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "profitShare";
            readonly type: "uint256";
        }];
        readonly internalType: "struct VaultParameter";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "rebalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "register";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "marketId";
        readonly type: "uint256";
    }];
    readonly name: "registrations";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IMarket";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "weight";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "leverage";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Registration";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "settle";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalAssets";
    readonly outputs: readonly [{
        readonly internalType: "Fixed6";
        readonly name: "";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalMarkets";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalShares";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "depositAssets";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "redeemShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "claimAssets";
        readonly type: "uint256";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newCoordinator";
        readonly type: "address";
    }];
    readonly name: "updateCoordinator";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "marketId";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newLeverage";
        readonly type: "uint256";
    }];
    readonly name: "updateLeverage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "maxDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "profitShare";
            readonly type: "uint256";
        }];
        readonly internalType: "struct VaultParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
    }];
    readonly name: "updateParameter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "UFixed6[]";
        readonly name: "newWeights";
        readonly type: "uint256[]";
    }];
    readonly name: "updateWeights";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=Vault.abi.d.ts.map