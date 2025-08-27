export declare const VerifierAbi: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
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
    readonly name: "VerifierInvalidDomainError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifierInvalidExpiryError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifierInvalidGroupError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifierInvalidNonceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifierInvalidSignatureError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifierInvalidSignerError";
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
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "GroupCancelled";
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
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "NonceCancelled";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "group";
        readonly type: "uint256";
    }];
    readonly name: "cancelGroup";
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "cancelGroupWithSignature";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }];
    readonly name: "cancelNonce";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "cancelNonceWithSignature";
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
    readonly name: "groups";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IMarketFactorySigners";
        readonly name: "marketFactory_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "marketFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract IMarketFactorySigners";
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
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "verifyAccessUpdateBatch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "verifyCommon";
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
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "verifyFill";
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
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "verifyGroupCancellation";
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
    readonly name: "verifyIntent";
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
    readonly name: "verifyOperatorUpdate";
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
    readonly name: "verifySignerUpdate";
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
        readonly name: "marketUpdateTaker";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "verifyTake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=Verifier.abi.d.ts.map