export declare const AllErrorsAbi: readonly [{
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
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }];
    readonly name: "UInitializableAlreadyInitializedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UInitializableNotInitializingError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UInitializableZeroVersionError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryAlreadyCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidIdError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidParameterError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidPayoffError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryInvalidSettleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryNotCreatedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryNotInstanceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperFactoryVersionOutsideRangeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleParameterStorageInvalidError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DivisionByZero";
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
    readonly name: "KeeperOracleInvalidCallbackError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleInvalidPriceError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleNoPriorRequestsError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleNotOracleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "KeeperOracleVersionOutsideRangeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleProviderUnauthorizedError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PriceResponseStorageInvalidError";
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
    readonly inputs: readonly [];
    readonly name: "Adiabatic6ZeroScaleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GlobalStorageInvalidError";
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
    readonly inputs: readonly [];
    readonly name: "VersionStorageInvalidError";
    readonly type: "error";
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
    readonly name: "MarketFactoryInvalidReferralFeeError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MarketFactoryInvalidSignerError";
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
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Fixed18OverflowError";
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
    readonly name: "OracleNotBeneficiaryError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleNotMarketError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleNotSubOracleError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleOutOfOrderCommitError";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OracleOutOfSyncError";
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
}];
//# sourceMappingURL=AllErrors.abi.d.ts.map