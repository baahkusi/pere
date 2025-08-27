export declare const MarketFactoryAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IFactory";
        readonly name: "oracleFactory_";
        readonly type: "address";
    }, {
        readonly internalType: "contract IVerifier";
        readonly name: "verifier_";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "implementation_";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "FactoryAlreadyRegisteredError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FactoryInvalidOracleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FactoryInvalidPayoffError";
    readonly type: "error";
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
    readonly name: "MarketFactoryInvalidReferralFeeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketFactoryInvalidSignerError";
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
    readonly inputs: readonly [];
    readonly name: "ProtocolParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ProtocolParameterStorageInvalidError";
    readonly type: "error";
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
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnerUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxLiquidationFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxCut";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minMaintenance";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minEfficiency";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "referralFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minScale";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxStaleAfter";
            readonly type: "uint256";
        }];
        readonly indexed: false;
        readonly internalType: "struct ProtocolParameter";
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
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "orderReferrer";
        readonly type: "address";
    }];
    readonly name: "authorization";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "isOperator";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "isSigner";
        readonly type: "bool";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "orderReferralFee";
        readonly type: "uint256";
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
        readonly name: "definition";
        readonly type: "tuple";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarket";
        readonly name: "newMarket";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "extensions";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
        readonly internalType: "contract IOracleProvider";
        readonly name: "oracle";
        readonly type: "address";
    }];
    readonly name: "markets";
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
    readonly inputs: readonly [];
    readonly name: "oracleFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IFactory";
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
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxLiquidationFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxCut";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minMaintenance";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minEfficiency";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "referralFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minScale";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxStaleAfter";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ProtocolParameter";
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
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }];
    readonly name: "referralFees";
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
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "signers";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
        readonly name: "newOperators";
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
        readonly name: "newSigners";
        readonly type: "tuple[]";
    }];
    readonly name: "updateAccessBatch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "updateAccessBatchWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "extension";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "newEnabled";
        readonly type: "bool";
    }];
    readonly name: "updateExtension";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
}, {
    readonly inputs: readonly [{
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "updateOperatorWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "UFixed6";
            readonly name: "maxFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxLiquidationFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxCut";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "maxRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minMaintenance";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minEfficiency";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "referralFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "UFixed6";
            readonly name: "minScale";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxStaleAfter";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ProtocolParameter";
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
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "referrer";
        readonly type: "address";
    }, {
        readonly internalType: "UFixed6";
        readonly name: "newReferralFee";
        readonly type: "uint256";
    }];
    readonly name: "updateReferralFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "newEnabled";
        readonly type: "bool";
    }];
    readonly name: "updateSigner";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "updateSignerWithSignature";
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
}];
//# sourceMappingURL=MarketFactory.abi.d.ts.map