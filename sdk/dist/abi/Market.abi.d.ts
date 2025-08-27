export declare const MarketAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVerifier";
        readonly name: "verifier_";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "Adiabatic6ZeroScaleError";
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
    readonly inputs: readonly [];
    readonly name: "GlobalStorageInvalidError";
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
    readonly name: "LocalStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LocalStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketClosedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketCollateralBelowLimitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketEfficiencyUnderLimitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketExceedsPendingIdLimitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInsufficientCollateralError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInsufficientLiquidityError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInsufficientMarginError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketIntentPriceDeviationError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInvalidIntentFeeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "code";
        readonly type: "uint256";
    }];
    readonly name: "MarketInvalidMarketParameterError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInvalidProtectionError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketInvalidReferrerError";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "code";
        readonly type: "uint256";
    }];
    readonly name: "MarketInvalidRiskParameterError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketMakerOverLimitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketNotCoordinatorError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketNotOperatorError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketNotSingleSidedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketOperatorNotAllowedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketOverCloseError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketProtectedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketSettleOnlyError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketStalePriceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PositionStorageLocalInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCallError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RiskParameterStorageInvalidError";
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
    readonly name: "VersionStorageInvalidError";
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
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "fundingFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "interestFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "riskFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingGlobal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingLocal";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxPriceDeviation";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "closed";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "settle";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct MarketParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
    }];
    readonly name: "ParameterUpdated";
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
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "checkpoints";
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
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "claimExposure";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "claimFee";
    readonly outputs: readonly [{
        readonly internalType: "UFixed6";
        readonly name: "feeReceived";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
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
            readonly internalType: "uint256";
            readonly name: "currentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latestId";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "protocolFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "oracleFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "riskFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "latestPrice";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "exposure";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }, {
                readonly internalType: "Fixed6";
                readonly name: "_skew";
                readonly type: "int256";
            }];
            readonly internalType: "struct PAccumulator6";
            readonly name: "pAccumulator";
            readonly type: "tuple";
        }];
        readonly internalType: "struct Global";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "guarantee";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Guarantee";
        readonly name: "";
        readonly type: "tuple";
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
    readonly name: "guaranteeReferrers";
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
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "guarantees";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Guarantee";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "Token18";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract IOracleProvider";
            readonly name: "oracle";
            readonly type: "address";
        }];
        readonly internalType: "struct IMarket.MarketDefinition";
        readonly name: "definition_";
        readonly type: "tuple";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "liquidators";
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
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "locals";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "currentId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latestId";
            readonly type: "uint256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "collateral";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "claimable";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Local";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oracle";
    readonly outputs: readonly [{
        readonly internalType: "contract IOracleProvider";
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
    readonly name: "orderReferrers";
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
            readonly internalType: "UFixed6";
            readonly name: "fundingFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "interestFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "riskFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingGlobal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingLocal";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxPriceDeviation";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "closed";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "settle";
            readonly type: "bool";
        }];
        readonly internalType: "struct MarketParameter";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pending";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Order";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "pendingOrder";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Order";
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
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "pendingOrders";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Order";
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
    readonly name: "pendings";
    readonly outputs: readonly [{
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
        readonly internalType: "struct Order";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maker";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "long";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "short";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Position";
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
    readonly name: "positions";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maker";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "long";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "short";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Position";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "riskParameter";
    readonly outputs: readonly [{
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
        readonly internalType: "struct RiskParameter";
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
    readonly name: "token";
    readonly outputs: readonly [{
        readonly internalType: "Token18";
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
        readonly internalType: "Fixed6";
        readonly name: "amount";
        readonly type: "int256";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "collateral";
        readonly type: "int256";
    }, {
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "Fixed6";
            readonly name: "amount";
            readonly type: "int256";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "originator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "solver";
            readonly type: "address";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "collateralization";
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
        readonly internalType: "struct Intent";
        readonly name: "intent";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "amount";
        readonly type: "int256";
    }, {
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newMaker";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newLong";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newShort";
        readonly type: "uint256";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "collateral";
        readonly type: "int256";
    }, {
        readonly internalType: "bool";
        readonly name: "protect";
        readonly type: "bool";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newMaker";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newLong";
        readonly type: "uint256";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newShort";
        readonly type: "uint256";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "collateral";
        readonly type: "int256";
    }, {
        readonly internalType: "bool";
        readonly name: "protect";
        readonly type: "bool";
    }, {
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "update";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "makerAmount";
        readonly type: "int256";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "takerAmount";
        readonly type: "int256";
    }, {
        readonly internalType: "Fixed6";
        readonly name: "collateral";
        readonly type: "int256";
    }, {
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }];
    readonly name: "update";
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
                readonly internalType: "Fixed6";
                readonly name: "price";
                readonly type: "int256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "originator";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "solver";
                readonly type: "address";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "collateralization";
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
            readonly internalType: "struct Intent";
            readonly name: "intent";
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
        readonly internalType: "struct Fill";
        readonly name: "fill";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "traderSignature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "solverSignature";
        readonly type: "bytes";
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
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "fundingFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "interestFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "makerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "takerFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "riskFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingGlobal";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPendingLocal";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxPriceDeviation";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "closed";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "settle";
            readonly type: "bool";
        }];
        readonly internalType: "struct MarketParameter";
        readonly name: "newParameter";
        readonly type: "tuple";
    }];
    readonly name: "updateParameter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
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
        readonly internalType: "struct RiskParameter";
        readonly name: "newRiskParameter";
        readonly type: "tuple";
    }];
    readonly name: "updateRiskParameter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "verifier";
    readonly outputs: readonly [{
        readonly internalType: "contract IVerifier";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }];
    readonly name: "versions";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }, {
            readonly internalType: "Fixed6";
            readonly name: "price";
            readonly type: "int256";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "makerValue";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "longValue";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "shortValue";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "makerFee";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "takerFee";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "makerOffset";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "takerPosOffset";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "takerNegOffset";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "settlementFee";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "Fixed6";
                readonly name: "_value";
                readonly type: "int256";
            }];
            readonly internalType: "struct Accumulator6";
            readonly name: "liquidationFee";
            readonly type: "tuple";
        }];
        readonly internalType: "struct Version";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=Market.abi.d.ts.map