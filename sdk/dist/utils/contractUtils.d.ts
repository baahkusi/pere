import { Log } from 'viem';
import { SupportedChainId } from '../constants/network';
import { PerennialVaultType } from '../constants/vaults';
export declare function getVaultAddressForType(vaultType: PerennialVaultType, chainId: SupportedChainId): `0x${string}` | undefined;
export declare const bufferGasLimit: (estimatedGas: bigint) => bigint;
export declare function parseViemContractCustomError(err: unknown): string | undefined;
export declare function decodePerennialEvent(log: Log): {
    eventName: "AccountDeployed";
    args: {
        owner: `0x${string}`;
        account: `0x${string}`;
    };
} | {
    eventName: "GroupRebalanced";
    args: {
        owner: `0x${string}`;
        group: bigint;
    };
} | {
    eventName: "Initialized";
    args: {
        version: bigint;
    };
} | {
    eventName: "InstanceRegistered";
    args: {
        instance: `0x${string}`;
    };
} | {
    eventName: "KeeperCall";
    args: {
        sender: `0x${string}`;
        applicableGas: bigint;
        applicableValue: bigint;
        baseFee: bigint;
        calldataFee: bigint;
        keeperFee: bigint;
    };
} | {
    eventName: "OwnerUpdated";
    args: {
        newOwner: `0x${string}`;
    };
} | {
    eventName: "Paused";
    args: readonly [];
} | {
    eventName: "PauserUpdated";
    args: {
        newPauser: `0x${string}`;
    };
} | {
    eventName: "PendingOwnerUpdated";
    args: {
        newPendingOwner: `0x${string}`;
    };
} | {
    eventName: "RebalanceGroupConfigured";
    args: {
        owner: `0x${string}`;
        group: bigint;
        markets: bigint;
    };
} | {
    eventName: "RebalanceMarketConfigured";
    args: {
        owner: `0x${string}`;
        group: bigint;
        market: `0x${string}`;
        newConfig: {
            target: bigint;
            threshold: bigint;
        };
    };
} | {
    eventName: "Unpaused";
    args: readonly [];
} | {
    eventName: "Approval";
    args: {
        owner: `0x${string}`;
        spender: `0x${string}`;
        value: bigint;
    };
} | {
    eventName: "Transfer";
    args: {
        from: `0x${string}`;
        to: `0x${string}`;
        value: bigint;
    };
} | {
    eventName: "Borrow";
    args: {
        account: `0x${string}`;
        borrowAmount: bigint;
    };
} | {
    eventName: "Mint";
    args: {
        account: `0x${string}`;
        mintAmount: bigint;
        costAmount: bigint;
    };
} | {
    eventName: "Redeem";
    args: {
        account: `0x${string}`;
        costAmount: bigint;
        redeemAmount: bigint;
    };
} | {
    eventName: "Repay";
    args: {
        account: `0x${string}`;
        repayAmount: bigint;
    };
} | {
    eventName: "OracleAssociated";
    args: {
        id: `0x${string}`;
        underlyingId: `0x${string}`;
    };
} | {
    eventName: "OracleCreated";
    args: {
        oracle: `0x${string}`;
        id: `0x${string}`;
    };
} | {
    eventName: "ParameterUpdated";
    args: {
        newParameter: {
            latestGranularity: bigint;
            currentGranularity: bigint;
            effectiveAfter: bigint;
            oracleFee: bigint;
            validFrom: bigint;
            validTo: bigint;
        };
    };
} | {
    eventName: "PayoffRegistered";
    args: {
        payoff: `0x${string}`;
    };
} | {
    eventName: "CallbackFulfilled";
    args: {
        callback: {
            market: `0x${string}`;
            account: `0x${string}`;
            version: bigint;
        };
    };
} | {
    eventName: "CallbackRequested";
    args: {
        callback: {
            market: `0x${string}`;
            account: `0x${string}`;
            version: bigint;
        };
    };
} | {
    eventName: "OracleProviderVersionFulfilled";
    args: {
        version: {
            timestamp: bigint;
            price: bigint;
            valid: boolean;
        };
    };
} | {
    eventName: "OracleProviderVersionRequested";
    args: {
        version: bigint;
        newPrice: boolean;
    };
} | {
    eventName: "OracleUpdated";
    args: {
        newOracle: `0x${string}`;
    };
} | {
    eventName: "TriggerOrderCancelled";
    args: {
        market: `0x${string}`;
        account: `0x${string}`;
        orderId: bigint;
    };
} | {
    eventName: "TriggerOrderExecuted";
    args: {
        market: `0x${string}`;
        account: `0x${string}`;
        order: {
            side: number;
            comparison: number;
            price: bigint;
            delta: bigint;
            maxFee: bigint;
            isSpent: boolean;
            referrer: `0x${string}`;
            interfaceFee: {
                amount: bigint;
                receiver: `0x${string}`;
                fixedFee: boolean;
                unwrap: boolean;
            };
        };
        orderId: bigint;
    };
} | {
    eventName: "TriggerOrderInterfaceFeeCharged";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        fee: {
            amount: bigint;
            receiver: `0x${string}`;
            fixedFee: boolean;
            unwrap: boolean;
        };
    };
} | {
    eventName: "TriggerOrderPlaced";
    args: {
        market: `0x${string}`;
        account: `0x${string}`;
        order: {
            side: number;
            comparison: number;
            price: bigint;
            delta: bigint;
            maxFee: bigint;
            isSpent: boolean;
            referrer: `0x${string}`;
            interfaceFee: {
                amount: bigint;
                receiver: `0x${string}`;
                fixedFee: boolean;
                unwrap: boolean;
            };
        };
        orderId: bigint;
    };
} | {
    eventName: "AccountPositionProcessed";
    args: {
        account: `0x${string}`;
        orderId: bigint;
        order: {
            timestamp: bigint;
            orders: bigint;
            collateral: bigint;
            makerPos: bigint;
            makerNeg: bigint;
            longPos: bigint;
            longNeg: bigint;
            shortPos: bigint;
            shortNeg: bigint;
            protection: bigint;
            invalidation: bigint;
            makerReferral: bigint;
            takerReferral: bigint;
        };
        accumulationResult: {
            collateral: bigint;
            priceOverride: bigint;
            tradeFee: bigint;
            offset: bigint;
            settlementFee: bigint;
            liquidationFee: bigint;
            subtractiveFee: bigint;
            solverFee: bigint;
        };
    };
} | {
    eventName: "CoordinatorUpdated";
    args: {
        newCoordinator: `0x${string}`;
    };
} | {
    eventName: "ExposureClaimed";
    args: {
        account: `0x${string}`;
        amount: bigint;
    };
} | {
    eventName: "FeeClaimed";
    args: {
        account: `0x${string}`;
        receiver: `0x${string}`;
        amount: bigint;
    };
} | {
    eventName: "OrderCreated";
    args: {
        account: `0x${string}`;
        order: {
            timestamp: bigint;
            orders: bigint;
            collateral: bigint;
            makerPos: bigint;
            makerNeg: bigint;
            longPos: bigint;
            longNeg: bigint;
            shortPos: bigint;
            shortNeg: bigint;
            protection: bigint;
            invalidation: bigint;
            makerReferral: bigint;
            takerReferral: bigint;
        };
        guarantee: {
            orders: bigint;
            notional: bigint;
            longPos: bigint;
            longNeg: bigint;
            shortPos: bigint;
            shortNeg: bigint;
            takerFee: bigint;
            orderReferral: bigint;
            solverReferral: bigint;
        };
        liquidator: `0x${string}`;
        orderReferrer: `0x${string}`;
        guaranteeReferrer: `0x${string}`;
    };
} | {
    eventName: "PositionProcessed";
    args: {
        orderId: bigint;
        order: {
            timestamp: bigint;
            orders: bigint;
            collateral: bigint;
            makerPos: bigint;
            makerNeg: bigint;
            longPos: bigint;
            longNeg: bigint;
            shortPos: bigint;
            shortNeg: bigint;
            protection: bigint;
            invalidation: bigint;
            makerReferral: bigint;
            takerReferral: bigint;
        };
        accumulationResult: {
            tradeFee: bigint;
            subtractiveFee: bigint;
            tradeOffset: bigint;
            tradeOffsetMaker: bigint;
            tradeOffsetMarket: bigint;
            adiabaticExposure: bigint;
            adiabaticExposureMaker: bigint;
            adiabaticExposureMarket: bigint;
            fundingMaker: bigint;
            fundingLong: bigint;
            fundingShort: bigint;
            fundingFee: bigint;
            interestMaker: bigint;
            interestLong: bigint;
            interestShort: bigint;
            interestFee: bigint;
            pnlMaker: bigint;
            pnlLong: bigint;
            pnlShort: bigint;
            settlementFee: bigint;
            liquidationFee: bigint;
        };
    };
} | {
    eventName: "RiskParameterUpdated";
    args: {
        newRiskParameter: {
            margin: bigint;
            maintenance: bigint;
            takerFee: {
                linearFee: bigint;
                proportionalFee: bigint;
                adiabaticFee: bigint;
                scale: bigint;
            };
            makerFee: {
                linearFee: bigint;
                proportionalFee: bigint;
                scale: bigint;
            };
            makerLimit: bigint;
            efficiencyLimit: bigint;
            liquidationFee: bigint;
            utilizationCurve: {
                minRate: bigint;
                maxRate: bigint;
                targetRate: bigint;
                targetUtilization: bigint;
            };
            pController: {
                k: bigint;
                min: bigint;
                max: bigint;
            };
            minMargin: bigint;
            minMaintenance: bigint;
            staleAfter: bigint;
            makerReceiveOnly: boolean;
        };
    };
} | {
    eventName: "ExtensionUpdated";
    args: {
        operator: `0x${string}`;
        newEnabled: boolean;
    };
} | {
    eventName: "MarketCreated";
    args: {
        market: `0x${string}`;
        definition: {
            token: `0x${string}`;
            oracle: `0x${string}`;
        };
    };
} | {
    eventName: "OperatorUpdated";
    args: {
        account: `0x${string}`;
        operator: `0x${string}`;
        newEnabled: boolean;
    };
} | {
    eventName: "ReferralFeeUpdated";
    args: {
        referrer: `0x${string}`;
        newFee: bigint;
    };
} | {
    eventName: "SignerUpdated";
    args: {
        account: `0x${string}`;
        signer: `0x${string}`;
        newEnabled: boolean;
    };
} | {
    eventName: "InterfaceFeeCharged";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        fee: {
            amount: bigint;
            receiver: `0x${string}`;
        };
    };
} | {
    eventName: "KeeperFeeCharged";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        to: `0x${string}`;
        fee: bigint;
    };
} | {
    eventName: "OrderCancelled";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        nonce: bigint;
    };
} | {
    eventName: "OrderExecuted";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        nonce: bigint;
    };
} | {
    eventName: "OrderPlaced";
    args: {
        account: `0x${string}`;
        market: `0x${string}`;
        nonce: bigint;
        order: {
            side: number;
            comparison: number;
            fee: bigint;
            price: bigint;
            delta: bigint;
            interfaceFee1: {
                amount: bigint;
                receiver: `0x${string}`;
            };
            interfaceFee2: {
                amount: bigint;
                receiver: `0x${string}`;
            };
        };
    };
} | {
    eventName: "BeneficiaryUpdated";
    args: {
        newBeneficiary: `0x${string}`;
    };
} | {
    eventName: "FeeReceived";
    args: {
        settlementFee: bigint;
        oracleFee: bigint;
    };
} | {
    eventName: "MarketUpdated";
    args: {
        newMarket: `0x${string}`;
    };
} | {
    eventName: "CallerAuthorized";
    args: {
        caller: `0x${string}`;
    };
} | {
    eventName: "FactoryRegistered";
    args: {
        factory: `0x${string}`;
    };
} | {
    eventName: "MarkUpdated";
    args: {
        newMark: bigint;
        profitShares: bigint;
    };
} | {
    eventName: "MarketRegistered";
    args: {
        marketId: bigint;
        market: `0x${string}`;
    };
} | {
    eventName: "Updated";
    args: {
        sender: `0x${string}`;
        account: `0x${string}`;
        version: bigint;
        depositAssets: bigint;
        redeemShares: bigint;
        claimAssets: bigint;
    };
} | {
    eventName: "VaultCreated";
    args: {
        vault: `0x${string}`;
        asset: `0x${string}`;
        initialMarket: `0x${string}`;
    };
} | {
    eventName: "GroupCancelled";
    args: {
        account: `0x${string}`;
        group: bigint;
    };
} | {
    eventName: "NonceCancelled";
    args: {
        account: `0x${string}`;
        nonce: bigint;
    };
} | null;
//# sourceMappingURL=contractUtils.d.ts.map