export declare const LensAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Fixed6OverflowError";
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
    readonly inputs: readonly [{
        readonly internalType: "contract IKeeperFactory";
        readonly name: "keeperFactory";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32[]";
        readonly name: "ids";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "updateData";
        readonly type: "bytes";
    }];
    readonly name: "commit";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
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
    }];
    readonly name: "settle";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IKeeperFactory";
            readonly name: "keeperFactory";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "ids";
            readonly type: "bytes32[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "updateData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct PriceCommitData[]";
        readonly name: "commits";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "contract IMarket[]";
        readonly name: "markets";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "snapshot";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "commitmentStatus";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "updateStatus";
            readonly type: "bytes[]";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "contract IMarket";
                    readonly name: "marketAddress";
                    readonly type: "address";
                }, {
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
                    readonly name: "parameter";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "riskParameter";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "global";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "contract IOracle";
                    readonly name: "oracle";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "pendingOrder";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "position";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "nextPosition";
                    readonly type: "tuple";
                }, {
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
                    readonly internalType: "struct Position[]";
                    readonly name: "pendingPositions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct Version[]";
                    readonly name: "versions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly name: "latestOracleVersion";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "currentOracleVersion";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Lens.MarketSnapshot[]";
                readonly name: "marketSnapshots";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "contract IMarket";
                    readonly name: "marketAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
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
                    readonly name: "local";
                    readonly type: "tuple";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "latestOrder";
                    readonly type: "tuple";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "pendingOrder";
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
                        readonly name: "takerPos";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerNeg";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "referral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Guarantee";
                    readonly name: "latestGuarantee";
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
                        readonly name: "takerPos";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerNeg";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "referral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Guarantee";
                    readonly name: "pendingGuarantee";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "position";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "nextPosition";
                    readonly type: "tuple";
                }, {
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
                }, {
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
                    readonly internalType: "struct Position[]";
                    readonly name: "pendingPositions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct Version[]";
                    readonly name: "versions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct OracleVersion[]";
                    readonly name: "oracleVersions";
                    readonly type: "tuple[]";
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
                    readonly internalType: "struct OracleReceipt[]";
                    readonly name: "oracleReceipts";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct Lens.MarketAccountSnapshot[]";
                readonly name: "marketAccountSnapshots";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Lens.SnapshotResult";
            readonly name: "preUpdate";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "contract IMarket";
                    readonly name: "marketAddress";
                    readonly type: "address";
                }, {
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
                    readonly name: "parameter";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "riskParameter";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "global";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "contract IOracle";
                    readonly name: "oracle";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "pendingOrder";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "position";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "nextPosition";
                    readonly type: "tuple";
                }, {
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
                    readonly internalType: "struct Position[]";
                    readonly name: "pendingPositions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct Version[]";
                    readonly name: "versions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly name: "latestOracleVersion";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "currentOracleVersion";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Lens.MarketSnapshot[]";
                readonly name: "marketSnapshots";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "contract IMarket";
                    readonly name: "marketAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
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
                    readonly name: "local";
                    readonly type: "tuple";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "latestOrder";
                    readonly type: "tuple";
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
                        readonly internalType: "UFixed6";
                        readonly name: "makerReferral";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerReferral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Order";
                    readonly name: "pendingOrder";
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
                        readonly name: "takerPos";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerNeg";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "referral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Guarantee";
                    readonly name: "latestGuarantee";
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
                        readonly name: "takerPos";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerNeg";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "takerFee";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "UFixed6";
                        readonly name: "referral";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct Guarantee";
                    readonly name: "pendingGuarantee";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "position";
                    readonly type: "tuple";
                }, {
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
                    readonly name: "nextPosition";
                    readonly type: "tuple";
                }, {
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
                }, {
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
                    readonly internalType: "struct Position[]";
                    readonly name: "pendingPositions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct Version[]";
                    readonly name: "versions";
                    readonly type: "tuple[]";
                }, {
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
                    readonly internalType: "struct OracleVersion[]";
                    readonly name: "oracleVersions";
                    readonly type: "tuple[]";
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
                    readonly internalType: "struct OracleReceipt[]";
                    readonly name: "oracleReceipts";
                    readonly type: "tuple[]";
                }];
                readonly internalType: "struct Lens.MarketAccountSnapshot[]";
                readonly name: "marketAccountSnapshots";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Lens.SnapshotResult";
            readonly name: "postUpdate";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Lens.SnapshotReturnValue";
        readonly name: "result";
        readonly type: "tuple";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "snapshotMarket";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IMarket";
            readonly name: "marketAddress";
            readonly type: "address";
        }, {
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
            readonly name: "parameter";
            readonly type: "tuple";
        }, {
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
            readonly name: "riskParameter";
            readonly type: "tuple";
        }, {
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
            readonly name: "global";
            readonly type: "tuple";
        }, {
            readonly internalType: "contract IOracle";
            readonly name: "oracle";
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
                readonly internalType: "UFixed6";
                readonly name: "makerReferral";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerReferral";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Order";
            readonly name: "pendingOrder";
            readonly type: "tuple";
        }, {
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
            readonly name: "position";
            readonly type: "tuple";
        }, {
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
            readonly name: "nextPosition";
            readonly type: "tuple";
        }, {
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
            readonly internalType: "struct Position[]";
            readonly name: "pendingPositions";
            readonly type: "tuple[]";
        }, {
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
            readonly internalType: "struct Version[]";
            readonly name: "versions";
            readonly type: "tuple[]";
        }, {
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
            readonly name: "latestOracleVersion";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentOracleVersion";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Lens.MarketSnapshot";
        readonly name: "marketSnapshot";
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
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "snapshotMarketAccount";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IMarket";
            readonly name: "marketAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
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
            readonly name: "local";
            readonly type: "tuple";
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
                readonly internalType: "UFixed6";
                readonly name: "makerReferral";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerReferral";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Order";
            readonly name: "latestOrder";
            readonly type: "tuple";
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
                readonly internalType: "UFixed6";
                readonly name: "makerReferral";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerReferral";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Order";
            readonly name: "pendingOrder";
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
                readonly name: "takerPos";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerNeg";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "referral";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Guarantee";
            readonly name: "latestGuarantee";
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
                readonly name: "takerPos";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerNeg";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "takerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "UFixed6";
                readonly name: "referral";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Guarantee";
            readonly name: "pendingGuarantee";
            readonly type: "tuple";
        }, {
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
            readonly name: "position";
            readonly type: "tuple";
        }, {
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
            readonly name: "nextPosition";
            readonly type: "tuple";
        }, {
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
        }, {
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
            readonly internalType: "struct Position[]";
            readonly name: "pendingPositions";
            readonly type: "tuple[]";
        }, {
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
            readonly internalType: "struct Version[]";
            readonly name: "versions";
            readonly type: "tuple[]";
        }, {
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
            readonly internalType: "struct OracleVersion[]";
            readonly name: "oracleVersions";
            readonly type: "tuple[]";
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
            readonly internalType: "struct OracleReceipt[]";
            readonly name: "oracleReceipts";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct Lens.MarketAccountSnapshot";
        readonly name: "marketAccountSnapshot";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
export declare const LensDeployedBytecode: "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630fb647f21461005c5780636eb79f6a1461008c5780637987bd7f146100bc5780639db32a8f146100ec578063a05a212e1461011c575b600080fd5b610076600480360381019061007191906127fd565b61014c565b6040516100839190613a23565b60405180910390f35b6100a660048036038101906100a19190613a45565b610628565b6040516100b39190613b83565b60405180910390f35b6100d660048036038101906100d19190613ba5565b610e6b565b6040516100e39190613d2c565b60405180910390f35b61010660048036038101906101019190613ba5565b6117f9565b6040516101139190613d98565b60405180910390f35b61013660048036038101906101319190613dba565b6118b7565b6040516101439190613d98565b60405180910390f35b610154611c7e565b438160800181815250506000835167ffffffffffffffff81111561017b5761017a61224d565b5b6040519080825280602002602001820160405280156101b457816020015b6101a1611cb9565b8152602001906001900390816101995790505b5090506000845167ffffffffffffffff8111156101d4576101d361224d565b5b60405190808252806020026020018201604052801561020d57816020015b6101fa611d70565b8152602001906001900390816101f25790505b50905060005b85518110156102ac5761023f86828151811061023257610231613e6d565b5b6020026020010151610628565b83828151811061025257610251613e6d565b5b602002602001018190525061028186828151811061027357610272613e6d565b5b602002602001015186610e6b565b82828151811061029457610293613e6d565b5b60200260200101819052508080600101915050610213565b508183604001516000018190525080836040015160200181905250855167ffffffffffffffff8111156102e2576102e161224d565b5b60405190808252806020026020018201604052801561031557816020015b60608152602001906001900390816103005790505b50836000018190525060005b86518110156103fc576103cd8782815181106103405761033f613e6d565b5b60200260200101516000015188838151811061035f5761035e613e6d565b5b60200260200101516020015189848151811061037e5761037d613e6d565b5b6020026020010151604001518a858151811061039d5761039c613e6d565b5b6020026020010151606001518b86815181106103bc576103bb613e6d565b5b6020026020010151608001516118b7565b846000015182815181106103e4576103e3613e6d565b5b60200260200101819052508080600101915050610321565b50845167ffffffffffffffff8111156104185761041761224d565b5b60405190808252806020026020018201604052801561044b57816020015b60608152602001906001900390816104365790505b50836020018190525060005b85518110156104b35761048486828151811061047657610475613e6d565b5b6020026020010151866117f9565b8460200151828151811061049b5761049a613e6d565b5b60200260200101819052508080600101915050610457565b506000855167ffffffffffffffff8111156104d1576104d061224d565b5b60405190808252806020026020018201604052801561050a57816020015b6104f7611cb9565b8152602001906001900390816104ef5790505b5090506000865167ffffffffffffffff81111561052a5761052961224d565b5b60405190808252806020026020018201604052801561056357816020015b610550611d70565b8152602001906001900390816105485790505b50905060005b87518110156106025761059588828151811061058857610587613e6d565b5b6020026020010151610628565b8382815181106105a8576105a7613e6d565b5b60200260200101819052506105d78882815181106105c9576105c8613e6d565b5b602002602001015188610e6b565b8282815181106105ea576105e9613e6d565b5b60200260200101819052508080600101915050610569565b508185606001516000018190525080856060015160200181905250505050509392505050565b610630611cb9565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b815260040161014060405180830381865afa1580156106b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d89190613fff565b81602001819052508173ffffffffffffffffffffffffffffffffffffffff16634549a6296040518163ffffffff1660e01b81526004016102e060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610750919061434d565b81604001819052508173ffffffffffffffffffffffffffffffffffffffff1663a05f99066040518163ffffffff1660e01b815260040161012060405180830381865afa1580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190614495565b81606001819052508173ffffffffffffffffffffffffffffffffffffffff166309218e916040518163ffffffff1660e01b8152600401608060405180830381865afa15801561081b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083f919061453b565b8160c001819052508173ffffffffffffffffffffffffffffffffffffffff1663e20ccec36040518163ffffffff1660e01b815260040161018060405180830381865afa158015610893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b7919061468a565b8160a0018190525060018160600151602001518260600151600001516108dd91906146e7565b6108e7919061471b565b67ffffffffffffffff811115610900576108ff61224d565b5b60405190808252806020026020018201604052801561093957816020015b610926611e3b565b81526020019060019003908161091e5790505b508161010001819052508061010001515167ffffffffffffffff8111156109635761096261224d565b5b60405190808252806020026020018201604052801561099c57816020015b610989611e63565b8152602001906001900390816109815790505b508161012001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a15919061478d565b816080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060005b81610100015151811015610c5e57610aa460008214610a9957826101000151600183610a7b91906146e7565b81518110610a8c57610a8b613e6d565b5b6020026020010151610a9f565b8260c001515b6119f2565b8261010001518281518110610abc57610abb613e6d565b5b60200260200101819052506000811115610b9057610b8f8373ffffffffffffffffffffffffffffffffffffffff1663c496969b83856060015160200151610b03919061471b565b6040518263ffffffff1660e01b8152600401610b1f91906147c9565b61018060405180830381865afa158015610b3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b61919061468a565b8361010001518381518110610b7957610b78613e6d565b5b6020026020010151611a3290919063ffffffff16565b5b8273ffffffffffffffffffffffffffffffffffffffff166387aee00e8361010001518381518110610bc457610bc3613e6d565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610bec91906147c9565b61018060405180830381865afa158015610c0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2e9190614942565b8261012001518281518110610c4657610c45613e6d565b5b60200260200101819052508080600101915050610a4f565b50806101000151600182610100015151610c7891906146e7565b81518110610c8957610c88613e6d565b5b60200260200101518160e001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d08919061478d565b73ffffffffffffffffffffffffffffffffffffffff166352bfe7896040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7691906149d4565b8161014001819052508173ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dee919061478d565b73ffffffffffffffffffffffffffffffffffffffff16639fa6a6e36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5c9190614a01565b81610160018181525050919050565b610e73611d70565b82816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff16635b4b9695836040518263ffffffff1660e01b8152600401610f1c9190614a3d565b608060405180830381865afa158015610f39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5d9190614ad0565b81604001819052508273ffffffffffffffffffffffffffffffffffffffff16637cc4d340838360400151602001516040518363ffffffff1660e01b8152600401610fa8929190614afd565b61018060405180830381865afa158015610fc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fea919061468a565b81606001819052508273ffffffffffffffffffffffffffffffffffffffff16636e193680836040518263ffffffff1660e01b815260040161102b9190614a3d565b61018060405180830381865afa158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d919061468a565b81608001819052508273ffffffffffffffffffffffffffffffffffffffff1663cee6c2ec838360400151602001516040518363ffffffff1660e01b81526004016110b8929190614afd565b60c060405180830381865afa1580156110d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f99190614bc6565b8160a001819052508273ffffffffffffffffffffffffffffffffffffffff1663cee6c2ec838360400151600001516040518363ffffffff1660e01b8152600401611144929190614afd565b60c060405180830381865afa158015611161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111859190614bc6565b8160c001819052508273ffffffffffffffffffffffffffffffffffffffff166355f57510836040518263ffffffff1660e01b81526004016111c69190614a3d565b608060405180830381865afa1580156111e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611207919061453b565b8160e00181905250600181604001516020015182604001516000015161122d91906146e7565b611237919061471b565b67ffffffffffffffff8111156112505761124f61224d565b5b60405190808252806020026020018201604052801561128957816020015b611276611e3b565b81526020019060019003908161126e5790505b508161014001819052508273ffffffffffffffffffffffffffffffffffffffff16630cdfebfa838360e00151600001516040518363ffffffff1660e01b81526004016112d6929190614afd565b608060405180830381865afa1580156112f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113179190614c6b565b8161012001819052508061014001515167ffffffffffffffff8111156113405761133f61224d565b5b60405190808252806020026020018201604052801561137957816020015b611366611e63565b81526020019060019003908161135e5790505b508161016001819052508061014001515167ffffffffffffffff8111156113a3576113a261224d565b5b6040519080825280602002602001820160405280156113dc57816020015b6113c9611f02565b8152602001906001900390816113c15790505b508161018001819052508061014001515167ffffffffffffffff8111156114065761140561224d565b5b60405190808252806020026020018201604052801561143f57816020015b61142c611f25565b8152602001906001900390816114245790505b50816101a0018190525060008373ffffffffffffffffffffffffffffffffffffffff16637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015611496573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ba919061478d565b905060005b826101400151518110156117b65761151460008214611509578361014001516001836114eb91906146e7565b815181106114fc576114fb613e6d565b5b602002602001015161150f565b8360e001515b6119f2565b836101400151828151811061152c5761152b613e6d565b5b60200260200101819052506000811115611602576116018573ffffffffffffffffffffffffffffffffffffffff16637cc4d3408684876040015160200151611574919061471b565b6040518363ffffffff1660e01b8152600401611591929190614afd565b61018060405180830381865afa1580156115af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d3919061468a565b84610140015183815181106115eb576115ea613e6d565b5b6020026020010151611a3290919063ffffffff16565b5b8473ffffffffffffffffffffffffffffffffffffffff166387aee00e846101400151838151811061163657611635613e6d565b5b6020026020010151600001516040518263ffffffff1660e01b815260040161165e91906147c9565b61018060405180830381865afa15801561167c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a09190614942565b83610160015182815181106116b8576116b7613e6d565b5b60200260200101819052508173ffffffffffffffffffffffffffffffffffffffff1663e0886f9084610140015183815181106116f7576116f6613e6d565b5b6020026020010151600001516040518263ffffffff1660e01b815260040161171f91906147c9565b60a060405180830381865afa92505050801561175957506040513d601f19601f820116820180604052508101906117569190614ce8565b60015b156117a95781856101800151848151811061177757611776613e6d565b5b602002602001018190525080856101a00151848151811061179b5761179a613e6d565b5b602002602001018190525050505b80806001019150506114bf565b508161014001516001836101400151516117d091906146e7565b815181106117e1576117e0613e6d565b5b60200260200101518261010001819052505092915050565b60608273ffffffffffffffffffffffffffffffffffffffff16636a256b29836040518263ffffffff1660e01b81526004016118349190614a3d565b600060405180830381600087803b15801561184e57600080fd5b505af192505050801561185f575060015b61189e573d806000811461188f576040519150601f19603f3d011682016040523d82523d6000602084013e611894565b606091505b50809150506118b1565b6040518060200160405280600081525090505b92915050565b60608573ffffffffffffffffffffffffffffffffffffffff16631e298b90868686866040518563ffffffff1660e01b81526004016118f793929190614de6565b6000604051808303818588803b15801561191057600080fd5b505af193505050508015611922575060015b6119d65761192e614e38565b806308c379a0036119565750611942614e5a565b8061194d575061199b565b809150506119e9565b634e487b710361199b57611968614eea565b90611973575061199b565b806040516020016119849190614f2c565b6040516020818303038152906040529150506119e9565b3d80600081146119c7576040519150601f19603f3d011682016040523d82523d6000602084013e6119cc565b606091505b50809150506119e9565b6040518060200160405280600081525090505b95945050505050565b6119fa611e3b565b604051806080016040528083600001518152602001836020015181526020018360400151815260200183606001518152509050919050565b8060000151826000018181525050611a6f611a6a611a4f83611aec565b611a5c8560200151611b20565b611b9490919063ffffffff16565b611baa565b611a9e611a99611a7e84611bff565b611a8b8660400151611b20565b611b9490919063ffffffff16565b611baa565b611acd611ac8611aad85611c33565b611aba8760600151611b20565b611b9490919063ffffffff16565b611baa565b8460200185604001866060018381525083815250838152505050505050565b6000611b19611afe8360800151611b20565b611b0b8460600151611b20565b611c6890919063ffffffff16565b9050919050565b6000808290507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811115611b8b57806040517feecaa25d000000000000000000000000000000000000000000000000000000008152600401611b8291906147c9565b60405180910390fd5b80915050919050565b60008183611ba29190614f47565b905092915050565b6000808290506000811215611bf657806040517fb02ef087000000000000000000000000000000000000000000000000000000008152600401611bed9190614f9a565b60405180910390fd5b80915050919050565b6000611c2c611c118360c00151611b20565b611c1e8460a00151611b20565b611c6890919063ffffffff16565b9050919050565b6000611c61611c46836101000151611b20565b611c538460e00151611b20565b611c6890919063ffffffff16565b9050919050565b60008183611c769190614fb5565b905092915050565b6040518060a001604052806060815260200160608152602001611c9f611f3f565b8152602001611cac611f3f565b8152602001600081525090565b604051806101800160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611cea611f59565b8152602001611cf7611fb0565b8152602001611d04612032565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001611d2e61207d565b8152602001611d3b611e3b565b8152602001611d48611e3b565b81526020016060815260200160608152602001611d63611f02565b8152602001600081525090565b604051806101c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001611dbe6120de565b8152602001611dcb61207d565b8152602001611dd861207d565b8152602001611de5612106565b8152602001611df2612106565b8152602001611dff611e3b565b8152602001611e0c611e3b565b8152602001611e1961213c565b8152602001606081526020016060815260200160608152602001606081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180610180016040528060001515815260200160008152602001611e87612164565b8152602001611e94612164565b8152602001611ea1612164565b8152602001611eae612164565b8152602001611ebb612164565b8152602001611ec8612164565b8152602001611ed5612164565b8152602001611ee2612164565b8152602001611eef612164565b8152602001611efc612164565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060608152602001606081525090565b60405180610140016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b604051806101a001604052806000815260200160008152602001611fd2612177565b8152602001611fdf61219f565b81526020016000815260200160008152602001600081526020016120016121c0565b815260200161200e6121e8565b81526020016000815260200160008152602001600081526020016000151581525090565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612077612209565b81525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060200160405280600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122858261223c565b810181811067ffffffffffffffff821117156122a4576122a361224d565b5b80604052505050565b60006122b7612223565b90506122c3828261227c565b919050565b600067ffffffffffffffff8211156122e3576122e261224d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061232e82612303565b9050919050565b600061234082612323565b9050919050565b61235081612335565b811461235b57600080fd5b50565b60008135905061236d81612347565b92915050565b6000819050919050565b61238681612373565b811461239157600080fd5b50565b6000813590506123a38161237d565b92915050565b600067ffffffffffffffff8211156123c4576123c361224d565b5b602082029050602081019050919050565b6000819050919050565b6123e8816123d5565b81146123f357600080fd5b50565b600081359050612405816123df565b92915050565b600061241e612419846123a9565b6122ad565b90508083825260208201905060208402830185811115612441576124406122f4565b5b835b8181101561246a578061245688826123f6565b845260208401935050602081019050612443565b5050509392505050565b600082601f83011261248957612488612237565b5b813561249984826020860161240b565b91505092915050565b600080fd5b600067ffffffffffffffff8211156124c2576124c161224d565b5b6124cb8261223c565b9050602081019050919050565b82818337600083830152505050565b60006124fa6124f5846124a7565b6122ad565b905082815260208101848484011115612516576125156124a2565b5b6125218482856124d8565b509392505050565b600082601f83011261253e5761253d612237565b5b813561254e8482602086016124e7565b91505092915050565b600060a0828403121561256d5761256c6122f9565b5b61257760a06122ad565b905060006125878482850161235e565b600083015250602061259b84828501612394565b602083015250604082013567ffffffffffffffff8111156125bf576125be6122fe565b5b6125cb84828501612474565b60408301525060606125df84828501612394565b606083015250608082013567ffffffffffffffff811115612603576126026122fe565b5b61260f84828501612529565b60808301525092915050565b600061262e612629846122c8565b6122ad565b90508083825260208201905060208402830185811115612651576126506122f4565b5b835b8181101561269857803567ffffffffffffffff81111561267657612675612237565b5b8086016126838982612557565b85526020850194505050602081019050612653565b5050509392505050565b600082601f8301126126b7576126b6612237565b5b81356126c784826020860161261b565b91505092915050565b600067ffffffffffffffff8211156126eb576126ea61224d565b5b602082029050602081019050919050565b600061270782612323565b9050919050565b612717816126fc565b811461272257600080fd5b50565b6000813590506127348161270e565b92915050565b600061274d612748846126d0565b6122ad565b905080838252602082019050602084028301858111156127705761276f6122f4565b5b835b8181101561279957806127858882612725565b845260208401935050602081019050612772565b5050509392505050565b600082601f8301126127b8576127b7612237565b5b81356127c884826020860161273a565b91505092915050565b6127da81612323565b81146127e557600080fd5b50565b6000813590506127f7816127d1565b92915050565b6000806000606084860312156128165761281561222d565b5b600084013567ffffffffffffffff81111561283457612833612232565b5b612840868287016126a2565b935050602084013567ffffffffffffffff81111561286157612860612232565b5b61286d868287016127a3565b925050604061287e868287016127e8565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156128ee5780820151818401526020810190506128d3565b60008484015250505050565b6000612905826128b4565b61290f81856128bf565b935061291f8185602086016128d0565b6129288161223c565b840191505092915050565b600061293f83836128fa565b905092915050565b6000602082019050919050565b600061295f82612888565b6129698185612893565b93508360208202850161297b856128a4565b8060005b858110156129b757848403895281516129988582612933565b94506129a383612947565b925060208a0199505060018101905061297f565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b6000612a1a612a15612a1084612303565b6129f5565b612303565b9050919050565b6000612a2c826129ff565b9050919050565b6000612a3e82612a21565b9050919050565b612a4e81612a33565b82525050565b6000612a6f612a6a612a6584612373565b6129f5565b612373565b9050919050565b612a7f81612a54565b82525050565b612a8e81612373565b82525050565b60008115159050919050565b612aa981612a94565b82525050565b61014082016000820151612ac66000850182612a76565b506020820151612ad96020850182612a76565b506040820151612aec6040850182612a76565b506060820151612aff6060850182612a76565b506080820151612b126080850182612a76565b5060a0820151612b2560a0850182612a85565b5060c0820151612b3860c0850182612a85565b5060e0820151612b4b60e0850182612a76565b50610100820151612b60610100850182612aa0565b50610120820151612b75610120850182612aa0565b50505050565b608082016000820151612b916000850182612a76565b506020820151612ba46020850182612a76565b506040820151612bb76040850182612a76565b506060820151612bca6060850182612a76565b50505050565b606082016000820151612be66000850182612a76565b506020820151612bf96020850182612a76565b506040820151612c0c6040850182612a76565b50505050565b608082016000820151612c286000850182612a76565b506020820151612c3b6020850182612a76565b506040820151612c4e6040850182612a76565b506060820151612c616060850182612a76565b50505050565b6000819050919050565b6000612c8c612c87612c8284612c67565b6129f5565b612c67565b9050919050565b612c9c81612c71565b82525050565b606082016000820151612cb86000850182612a76565b506020820151612ccb6020850182612c93565b506040820151612cde6040850182612c93565b50505050565b6102e082016000820151612cfb6000850182612a76565b506020820151612d0e6020850182612a76565b506040820151612d216040850182612b7b565b506060820151612d3460c0850182612bd0565b506080820151612d48610120850182612a76565b5060a0820151612d5c610140850182612a76565b5060c0820151612d70610160850182612a76565b5060e0820151612d84610180850182612c12565b50610100820151612d99610200850182612ca2565b50610120820151612dae610260850182612a76565b50610140820151612dc3610280850182612a76565b50610160820151612dd86102a0850182612a85565b50610180820151612ded6102c0850182612aa0565b50505050565b604082016000820151612e096000850182612c93565b506020820151612e1c6020850182612c93565b50505050565b61012082016000820151612e396000850182612a85565b506020820151612e4c6020850182612a85565b506040820151612e5f6040850182612a76565b506060820151612e726060850182612a76565b506080820151612e856080850182612a76565b5060a0820151612e9860a0850182612c93565b5060c0820151612eab60c0850182612c93565b5060e0820151612ebe60e0850182612df3565b50505050565b6000612ecf82612a21565b9050919050565b612edf81612ec4565b82525050565b61018082016000820151612efc6000850182612a85565b506020820151612f0f6020850182612a85565b506040820151612f226040850182612c93565b506060820151612f356060850182612a76565b506080820151612f486080850182612a76565b5060a0820151612f5b60a0850182612a76565b5060c0820151612f6e60c0850182612a76565b5060e0820151612f8160e0850182612a76565b50610100820151612f96610100850182612a76565b50610120820151612fab610120850182612a85565b50610140820151612fc0610140850182612a76565b50610160820151612fd5610160850182612a76565b50505050565b608082016000820151612ff16000850182612a85565b5060208201516130046020850182612a76565b5060408201516130176040850182612a76565b50606082015161302a6060850182612a76565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006130688383612fdb565b60808301905092915050565b6000602082019050919050565b600061308c82613030565b613096818561303b565b93506130a18361304c565b8060005b838110156130d25781516130b9888261305c565b97506130c483613074565b9250506001810190506130a5565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6020820160008201516131216000850182612c93565b50505050565b6101808201600082015161313e6000850182612aa0565b5060208201516131516020850182612c93565b506040820151613164604085018261310b565b506060820151613177606085018261310b565b50608082015161318a608085018261310b565b5060a082015161319d60a085018261310b565b5060c08201516131b060c085018261310b565b5060e08201516131c360e085018261310b565b506101008201516131d861010085018261310b565b506101208201516131ed61012085018261310b565b5061014082015161320261014085018261310b565b5061016082015161321761016085018261310b565b50505050565b60006132298383613127565b6101808301905092915050565b6000602082019050919050565b600061324e826130df565b61325881856130ea565b9350613263836130fb565b8060005b8381101561329457815161327b888261321d565b975061328683613236565b925050600181019050613267565b5085935050505092915050565b6060820160008201516132b76000850182612a85565b5060208201516132ca6020850182612c93565b5060408201516132dd6040850182612aa0565b50505050565b60006108c0830160008301516132fc6000860182612a45565b50602083015161330f6020860182612aaf565b506040830151613323610160860182612ce4565b506060830151613337610440860182612e22565b50608083015161334b610560860182612ed6565b5060a083015161335f610580860182612ee5565b5060c0830151613373610700860182612fdb565b5060e0830151613387610780860182612fdb565b506101008301518482036108008601526133a18282613081565b9150506101208301518482036108208601526133bd8282613243565b9150506101408301516133d46108408601826132a1565b506101608301516133e96108a0860182612a85565b508091505092915050565b600061340083836132e3565b905092915050565b6000602082019050919050565b6000613420826129c9565b61342a81856129d4565b93508360208202850161343c856129e5565b8060005b85811015613478578484038952815161345985826133f4565b945061346483613408565b925060208a01995050600181019050613440565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6134bf81612323565b82525050565b6080820160008201516134db6000850182612a85565b5060208201516134ee6020850182612a85565b5060408201516135016040850182612c93565b5060608201516135146060850182612a76565b50505050565b60c0820160008201516135306000850182612a85565b5060208201516135436020850182612c93565b5060408201516135566040850182612a76565b5060608201516135696060850182612a76565b50608082015161357c6080850182612a76565b5060a082015161358f60a0850182612a76565b50505050565b6080820160008201516135ab6000850182612c93565b5060208201516135be6020850182612a76565b5060408201516135d16040850182612c93565b5060608201516135e46060850182612c93565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061362283836132a1565b60608301905092915050565b6000602082019050919050565b6000613646826135ea565b61365081856135f5565b935061365b83613606565b8060005b8381101561368c5781516136738882613616565b975061367e8361362e565b92505060018101905061365f565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6040820160008201516136db6000850182612a76565b5060208201516136ee6020850182612a76565b50505050565b600061370083836136c5565b60408301905092915050565b6000602082019050919050565b600061372482613699565b61372e81856136a4565b9350613739836136b5565b8060005b8381101561376a57815161375188826136f4565b975061375c8361370c565b92505060018101905061373d565b5085935050505092915050565b6000610740830160008301516137906000860182612a45565b5060208301516137a360208601826134b6565b5060408301516137b660408601826134c5565b5060608301516137c960c0860182612ee5565b5060808301516137dd610240860182612ee5565b5060a08301516137f16103c086018261351a565b5060c083015161380561048086018261351a565b5060e0830151613819610540860182612fdb565b5061010083015161382e6105c0860182612fdb565b50610120830151613843610640860182613595565b506101408301518482036106c086015261385d8282613081565b9150506101608301518482036106e08601526138798282613243565b915050610180830151848203610700860152613895828261363b565b9150506101a08301518482036107208601526138b18282613719565b9150508091505092915050565b60006138ca8383613777565b905092915050565b6000602082019050919050565b60006138ea8261348a565b6138f48185613495565b935083602082028501613906856134a6565b8060005b85811015613942578484038952815161392385826138be565b945061392e836138d2565b925060208a0199505060018101905061390a565b50829750879550505050505092915050565b600060408301600083015184820360008601526139718282613415565b9150506020830151848203602086015261398b82826138df565b9150508091505092915050565b600060a08301600083015184820360008601526139b58282612954565b915050602083015184820360208601526139cf8282612954565b915050604083015184820360408601526139e98282613954565b91505060608301518482036060860152613a038282613954565b9150506080830151613a186080860182612a85565b508091505092915050565b60006020820190508181036000830152613a3d8184613998565b905092915050565b600060208284031215613a5b57613a5a61222d565b5b6000613a6984828501612725565b91505092915050565b60006108c083016000830151613a8b6000860182612a45565b506020830151613a9e6020860182612aaf565b506040830151613ab2610160860182612ce4565b506060830151613ac6610440860182612e22565b506080830151613ada610560860182612ed6565b5060a0830151613aee610580860182612ee5565b5060c0830151613b02610700860182612fdb565b5060e0830151613b16610780860182612fdb565b50610100830151848203610800860152613b308282613081565b915050610120830151848203610820860152613b4c8282613243565b915050610140830151613b636108408601826132a1565b50610160830151613b786108a0860182612a85565b508091505092915050565b60006020820190508181036000830152613b9d8184613a72565b905092915050565b60008060408385031215613bbc57613bbb61222d565b5b6000613bca85828601612725565b9250506020613bdb858286016127e8565b9150509250929050565b600061074083016000830151613bfe6000860182612a45565b506020830151613c1160208601826134b6565b506040830151613c2460408601826134c5565b506060830151613c3760c0860182612ee5565b506080830151613c4b610240860182612ee5565b5060a0830151613c5f6103c086018261351a565b5060c0830151613c7361048086018261351a565b5060e0830151613c87610540860182612fdb565b50610100830151613c9c6105c0860182612fdb565b50610120830151613cb1610640860182613595565b506101408301518482036106c0860152613ccb8282613081565b9150506101608301518482036106e0860152613ce78282613243565b915050610180830151848203610700860152613d03828261363b565b9150506101a0830151848203610720860152613d1f8282613719565b9150508091505092915050565b60006020820190508181036000830152613d468184613be5565b905092915050565b600082825260208201905092915050565b6000613d6a826128b4565b613d748185613d4e565b9350613d848185602086016128d0565b613d8d8161223c565b840191505092915050565b60006020820190508181036000830152613db28184613d5f565b905092915050565b600080600080600060a08688031215613dd657613dd561222d565b5b6000613de48882890161235e565b9550506020613df588828901612394565b945050604086013567ffffffffffffffff811115613e1657613e15612232565b5b613e2288828901612474565b9350506060613e3388828901612394565b925050608086013567ffffffffffffffff811115613e5457613e53612232565b5b613e6088828901612529565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b613ea581612373565b8114613eb057600080fd5b50565b600081519050613ec281613e9c565b92915050565b600081519050613ed78161237d565b92915050565b613ee681612a94565b8114613ef157600080fd5b50565b600081519050613f0381613edd565b92915050565b60006101408284031215613f2057613f1f6122f9565b5b613f2b6101406122ad565b90506000613f3b84828501613eb3565b6000830152506020613f4f84828501613eb3565b6020830152506040613f6384828501613eb3565b6040830152506060613f7784828501613eb3565b6060830152506080613f8b84828501613eb3565b60808301525060a0613f9f84828501613ec8565b60a08301525060c0613fb384828501613ec8565b60c08301525060e0613fc784828501613eb3565b60e083015250610100613fdc84828501613ef4565b61010083015250610120613ff284828501613ef4565b6101208301525092915050565b600061014082840312156140165761401561222d565b5b600061402484828501613f09565b91505092915050565b600060808284031215614043576140426122f9565b5b61404d60806122ad565b9050600061405d84828501613eb3565b600083015250602061407184828501613eb3565b602083015250604061408584828501613eb3565b604083015250606061409984828501613eb3565b60608301525092915050565b6000606082840312156140bb576140ba6122f9565b5b6140c560606122ad565b905060006140d584828501613eb3565b60008301525060206140e984828501613eb3565b60208301525060406140fd84828501613eb3565b60408301525092915050565b60006080828403121561411f5761411e6122f9565b5b61412960806122ad565b9050600061413984828501613eb3565b600083015250602061414d84828501613eb3565b602083015250604061416184828501613eb3565b604083015250606061417584828501613eb3565b60608301525092915050565b61418a81612c67565b811461419557600080fd5b50565b6000815190506141a781614181565b92915050565b6000606082840312156141c3576141c26122f9565b5b6141cd60606122ad565b905060006141dd84828501613eb3565b60008301525060206141f184828501614198565b602083015250604061420584828501614198565b60408301525092915050565b60006102e08284031215614228576142276122f9565b5b6142336101a06122ad565b9050600061424384828501613eb3565b600083015250602061425784828501613eb3565b602083015250604061426b8482850161402d565b60408301525060c061427f848285016140a5565b60608301525061012061429484828501613eb3565b6080830152506101406142a984828501613eb3565b60a0830152506101606142be84828501613eb3565b60c0830152506101806142d384828501614109565b60e0830152506102006142e8848285016141ad565b610100830152506102606142fe84828501613eb3565b6101208301525061028061431484828501613eb3565b610140830152506102a061432a84828501613ec8565b610160830152506102c061434084828501613ef4565b6101808301525092915050565b60006102e082840312156143645761436361222d565b5b600061437284828501614211565b91505092915050565b600060408284031215614391576143906122f9565b5b61439b60406122ad565b905060006143ab84828501614198565b60008301525060206143bf84828501614198565b60208301525092915050565b600061012082840312156143e2576143e16122f9565b5b6143ed6101006122ad565b905060006143fd84828501613ec8565b600083015250602061441184828501613ec8565b602083015250604061442584828501613eb3565b604083015250606061443984828501613eb3565b606083015250608061444d84828501613eb3565b60808301525060a061446184828501614198565b60a08301525060c061447584828501614198565b60c08301525060e06144898482850161437b565b60e08301525092915050565b600061012082840312156144ac576144ab61222d565b5b60006144ba848285016143cb565b91505092915050565b6000608082840312156144d9576144d86122f9565b5b6144e360806122ad565b905060006144f384828501613ec8565b600083015250602061450784828501613eb3565b602083015250604061451b84828501613eb3565b604083015250606061452f84828501613eb3565b60608301525092915050565b6000608082840312156145515761455061222d565b5b600061455f848285016144c3565b91505092915050565b6000610180828403121561457f5761457e6122f9565b5b61458a6101806122ad565b9050600061459a84828501613ec8565b60008301525060206145ae84828501613ec8565b60208301525060406145c284828501614198565b60408301525060606145d684828501613eb3565b60608301525060806145ea84828501613eb3565b60808301525060a06145fe84828501613eb3565b60a08301525060c061461284828501613eb3565b60c08301525060e061462684828501613eb3565b60e08301525061010061463b84828501613eb3565b6101008301525061012061465184828501613ec8565b6101208301525061014061466784828501613eb3565b6101408301525061016061467d84828501613eb3565b6101608301525092915050565b600061018082840312156146a1576146a061222d565b5b60006146af84828501614568565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006146f282612373565b91506146fd83612373565b9250828203905081811115614715576147146146b8565b5b92915050565b600061472682612373565b915061473183612373565b9250828201905080821115614749576147486146b8565b5b92915050565b600061475a82612323565b9050919050565b61476a8161474f565b811461477557600080fd5b50565b60008151905061478781614761565b92915050565b6000602082840312156147a3576147a261222d565b5b60006147b184828501614778565b91505092915050565b6147c381612373565b82525050565b60006020820190506147de60008301846147ba565b92915050565b6000602082840312156147fa576147f96122f9565b5b61480460206122ad565b9050600061481484828501614198565b60008301525092915050565b60006101808284031215614837576148366122f9565b5b6148426101806122ad565b9050600061485284828501613ef4565b600083015250602061486684828501614198565b602083015250604061487a848285016147e4565b604083015250606061488e848285016147e4565b60608301525060806148a2848285016147e4565b60808301525060a06148b6848285016147e4565b60a08301525060c06148ca848285016147e4565b60c08301525060e06148de848285016147e4565b60e0830152506101006148f3848285016147e4565b61010083015250610120614909848285016147e4565b6101208301525061014061491f848285016147e4565b61014083015250610160614935848285016147e4565b6101608301525092915050565b600061018082840312156149595761495861222d565b5b600061496784828501614820565b91505092915050565b600060608284031215614986576149856122f9565b5b61499060606122ad565b905060006149a084828501613ec8565b60008301525060206149b484828501614198565b60208301525060406149c884828501613ef4565b60408301525092915050565b6000606082840312156149ea576149e961222d565b5b60006149f884828501614970565b91505092915050565b600060208284031215614a1757614a1661222d565b5b6000614a2584828501613ec8565b91505092915050565b614a3781612323565b82525050565b6000602082019050614a526000830184614a2e565b92915050565b600060808284031215614a6e57614a6d6122f9565b5b614a7860806122ad565b90506000614a8884828501613ec8565b6000830152506020614a9c84828501613ec8565b6020830152506040614ab084828501614198565b6040830152506060614ac484828501613eb3565b60608301525092915050565b600060808284031215614ae657614ae561222d565b5b6000614af484828501614a58565b91505092915050565b6000604082019050614b126000830185614a2e565b614b1f60208301846147ba565b9392505050565b600060c08284031215614b3c57614b3b6122f9565b5b614b4660c06122ad565b90506000614b5684828501613ec8565b6000830152506020614b6a84828501614198565b6020830152506040614b7e84828501613eb3565b6040830152506060614b9284828501613eb3565b6060830152506080614ba684828501613eb3565b60808301525060a0614bba84828501613eb3565b60a08301525092915050565b600060c08284031215614bdc57614bdb61222d565b5b6000614bea84828501614b26565b91505092915050565b600060808284031215614c0957614c086122f9565b5b614c1360806122ad565b90506000614c2384828501614198565b6000830152506020614c3784828501613eb3565b6020830152506040614c4b84828501614198565b6040830152506060614c5f84828501614198565b60608301525092915050565b600060808284031215614c8157614c8061222d565b5b6000614c8f84828501614bf3565b91505092915050565b600060408284031215614cae57614cad6122f9565b5b614cb860406122ad565b90506000614cc884828501613eb3565b6000830152506020614cdc84828501613eb3565b60208301525092915050565b60008060a08385031215614cff57614cfe61222d565b5b6000614d0d85828601614970565b9250506060614d1e85828601614c98565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614d5d816123d5565b82525050565b6000614d6f8383614d54565b60208301905092915050565b6000602082019050919050565b6000614d9382614d28565b614d9d8185614d33565b9350614da883614d44565b8060005b83811015614dd9578151614dc08882614d63565b9750614dcb83614d7b565b925050600181019050614dac565b5085935050505092915050565b60006060820190508181036000830152614e008186614d88565b9050614e0f60208301856147ba565b8181036040830152614e218184613d5f565b9050949350505050565b60008160e01c9050919050565b600060033d1115614e575760046000803e614e54600051614e2b565b90505b90565b600060443d10614ee757614e6c612223565b60043d036004823e80513d602482011167ffffffffffffffff82111715614e94575050614ee7565b808201805167ffffffffffffffff811115614eb25750505050614ee7565b80602083010160043d038501811115614ecf575050505050614ee7565b614ede8260200185018661227c565b82955050505050505b90565b60008060233d1115614f07576020600460003e6001915060005190505b9091565b6000819050919050565b614f26614f2182612373565b614f0b565b82525050565b6000614f388284614f15565b60208201915081905092915050565b6000614f5282612c67565b9150614f5d83612c67565b925082820190508281121560008312168382126000841215161715614f8557614f846146b8565b5b92915050565b614f9481612c67565b82525050565b6000602082019050614faf6000830184614f8b565b92915050565b6000614fc082612c67565b9150614fcb83612c67565b9250828203905081811260008412168282136000851215161715614ff257614ff16146b8565b5b9291505056fea2646970667358221220b12234eb6aaaa57c6bfc0535a1be1f04fa96bf49bb16c06ec0f98f82430a2f1864736f6c63430008180033";
//# sourceMappingURL=Lens.abi.d.ts.map