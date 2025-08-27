import { Address, PublicClient } from 'viem';
import { SupportedMarket } from '../../constants/markets';
import { SupportedChainId } from '../../constants/network';
import { PerennialVaultType } from '../../constants/vaults';
import { MarketOracles } from '../markets/chain';
import { OracleClients } from '../oracle';
export type VaultSnapshots = NonNullable<Awaited<ReturnType<typeof fetchVaultSnapshots>>>;
export type VaultSnapshot = ChainVaultSnapshot & {
    pre: ChainVaultSnapshot;
    markets: {
        market: SupportedMarket;
        weight: bigint;
    }[];
};
export type VaultAccountSnapshot = ChainVaultAccountSnapshot & {
    pre: ChainVaultAccountSnapshot;
};
export declare function fetchVaultSnapshots({ chainId, publicClient, address, marketOracles, oracleClients, onError, onSuccess, }: {
    chainId: SupportedChainId;
    address: Address;
    marketOracles?: MarketOracles;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    onError?: () => void;
    onSuccess?: () => void;
}): Promise<{
    user: {
        alpha?: VaultAccountSnapshot | undefined;
        bravo?: VaultAccountSnapshot | undefined;
    } | undefined;
    vault: {
        alpha?: VaultSnapshot | undefined;
        bravo?: VaultSnapshot | undefined;
    };
    commitments: readonly `0x${string}`[];
    settles: readonly `0x${string}`[];
    updates: readonly `0x${string}`[];
} | undefined>;
export type ChainVaultSnapshot = Awaited<ReturnType<typeof fetchVaultSnapshotsAfterSettle>>['vault'][number];
export type ChainVaultAccountSnapshot = Awaited<ReturnType<typeof fetchVaultSnapshotsAfterSettle>>['user'][number];
declare const fetchVaultSnapshotsAfterSettle: ({ chainId, address, marketOracles, publicClient, oracleClients, onOracleError, resetOracleError, }: {
    chainId: SupportedChainId;
    address: Address;
    marketOracles: MarketOracles;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    onOracleError?: (() => void) | undefined;
    resetOracleError?: (() => void) | undefined;
}) => Promise<{
    commitments: readonly `0x${string}`[];
    updates: readonly `0x${string}`[];
    settles: readonly `0x${string}`[];
    vault: {
        vaultType: PerennialVaultType;
        vault: `0x${string}`;
        name: string;
        parameter: {
            maxDeposit: bigint;
            minDeposit: bigint;
        };
        totalAssets: bigint;
        totalShares: bigint;
        totalMarkets: bigint;
        registrations: readonly {
            market: `0x${string}`;
            weight: bigint;
            leverage: bigint;
        }[];
        vaultAccount: {
            current: bigint;
            latest: bigint;
            shares: bigint;
            assets: bigint;
            deposit: bigint;
            redemption: bigint;
        };
        latestCheckpoint: {
            deposit: bigint;
            redemption: bigint;
            shares: bigint;
            assets: bigint;
            tradeFee: bigint;
            settlementFee: bigint;
            deposits: bigint;
            redemptions: bigint;
            timestamp: bigint;
        };
        currentCheckpoint: {
            deposit: bigint;
            redemption: bigint;
            shares: bigint;
            assets: bigint;
            tradeFee: bigint;
            settlementFee: bigint;
            deposits: bigint;
            redemptions: bigint;
            timestamp: bigint;
        };
        vaultMinimum: bigint;
        totalMarketCollateral: bigint;
        marketSnapshots: readonly {
            marketAddress: `0x${string}`;
            parameter: {
                fundingFee: bigint;
                interestFee: bigint;
                makerFee: bigint;
                takerFee: bigint;
                riskFee: bigint;
                maxPendingGlobal: bigint;
                maxPendingLocal: bigint;
                maxPriceDeviation: bigint;
                closed: boolean;
                settle: boolean;
            };
            riskParameter: {
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
            global: {
                currentId: bigint;
                latestId: bigint;
                protocolFee: bigint;
                oracleFee: bigint;
                riskFee: bigint;
                latestPrice: bigint;
                exposure: bigint;
                pAccumulator: {
                    _value: bigint;
                    _skew: bigint;
                };
            };
            oracle: `0x${string}`;
            pendingOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            position: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            nextPosition: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            pendingPositions: readonly {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            }[];
            versions: readonly {
                valid: boolean;
                price: bigint;
                makerValue: {
                    _value: bigint;
                };
                longValue: {
                    _value: bigint;
                };
                shortValue: {
                    _value: bigint;
                };
                makerFee: {
                    _value: bigint;
                };
                takerFee: {
                    _value: bigint;
                };
                makerOffset: {
                    _value: bigint;
                };
                takerPosOffset: {
                    _value: bigint;
                };
                takerNegOffset: {
                    _value: bigint;
                };
                settlementFee: {
                    _value: bigint;
                };
                liquidationFee: {
                    _value: bigint;
                };
            }[];
            latestOracleVersion: {
                timestamp: bigint;
                price: bigint;
                valid: boolean;
            };
            currentOracleVersion: bigint;
        }[];
        marketVaultSnapshots: readonly {
            marketAddress: `0x${string}`;
            account: `0x${string}`;
            local: {
                currentId: bigint;
                latestId: bigint;
                collateral: bigint;
                claimable: bigint;
            };
            latestOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            pendingOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            latestGuarantee: {
                orders: bigint;
                notional: bigint;
                takerPos: bigint;
                takerNeg: bigint;
                takerFee: bigint;
                referral: bigint;
            };
            pendingGuarantee: {
                orders: bigint;
                notional: bigint;
                takerPos: bigint;
                takerNeg: bigint;
                takerFee: bigint;
                referral: bigint;
            };
            position: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            nextPosition: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            checkpoint: {
                tradeFee: bigint;
                settlementFee: bigint;
                transfer: bigint;
                collateral: bigint;
            };
            pendingPositions: readonly {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            }[];
            versions: readonly {
                valid: boolean;
                price: bigint;
                makerValue: {
                    _value: bigint;
                };
                longValue: {
                    _value: bigint;
                };
                shortValue: {
                    _value: bigint;
                };
                makerFee: {
                    _value: bigint;
                };
                takerFee: {
                    _value: bigint;
                };
                makerOffset: {
                    _value: bigint;
                };
                takerPosOffset: {
                    _value: bigint;
                };
                takerNegOffset: {
                    _value: bigint;
                };
                settlementFee: {
                    _value: bigint;
                };
                liquidationFee: {
                    _value: bigint;
                };
            }[];
            oracleVersions: readonly {
                timestamp: bigint;
                price: bigint;
                valid: boolean;
            }[];
            oracleReceipts: readonly {
                settlementFee: bigint;
                oracleFee: bigint;
            }[];
        }[];
    }[];
    vaultPre: {
        vaultType: PerennialVaultType;
        vault: `0x${string}`;
        name: string;
        parameter: {
            maxDeposit: bigint;
            minDeposit: bigint;
        };
        totalAssets: bigint;
        totalShares: bigint;
        totalMarkets: bigint;
        registrations: readonly {
            market: `0x${string}`;
            weight: bigint;
            leverage: bigint;
        }[];
        vaultAccount: {
            current: bigint;
            latest: bigint;
            shares: bigint;
            assets: bigint;
            deposit: bigint;
            redemption: bigint;
        };
        latestCheckpoint: {
            deposit: bigint;
            redemption: bigint;
            shares: bigint;
            assets: bigint;
            tradeFee: bigint;
            settlementFee: bigint;
            deposits: bigint;
            redemptions: bigint;
            timestamp: bigint;
        };
        currentCheckpoint: {
            deposit: bigint;
            redemption: bigint;
            shares: bigint;
            assets: bigint;
            tradeFee: bigint;
            settlementFee: bigint;
            deposits: bigint;
            redemptions: bigint;
            timestamp: bigint;
        };
        vaultMinimum: bigint;
        totalMarketCollateral: bigint;
        marketSnapshots: readonly {
            marketAddress: `0x${string}`;
            parameter: {
                fundingFee: bigint;
                interestFee: bigint;
                makerFee: bigint;
                takerFee: bigint;
                riskFee: bigint;
                maxPendingGlobal: bigint;
                maxPendingLocal: bigint;
                maxPriceDeviation: bigint;
                closed: boolean;
                settle: boolean;
            };
            riskParameter: {
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
            global: {
                currentId: bigint;
                latestId: bigint;
                protocolFee: bigint;
                oracleFee: bigint;
                riskFee: bigint;
                latestPrice: bigint;
                exposure: bigint;
                pAccumulator: {
                    _value: bigint;
                    _skew: bigint;
                };
            };
            oracle: `0x${string}`;
            pendingOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            position: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            nextPosition: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            pendingPositions: readonly {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            }[];
            versions: readonly {
                valid: boolean;
                price: bigint;
                makerValue: {
                    _value: bigint;
                };
                longValue: {
                    _value: bigint;
                };
                shortValue: {
                    _value: bigint;
                };
                makerFee: {
                    _value: bigint;
                };
                takerFee: {
                    _value: bigint;
                };
                makerOffset: {
                    _value: bigint;
                };
                takerPosOffset: {
                    _value: bigint;
                };
                takerNegOffset: {
                    _value: bigint;
                };
                settlementFee: {
                    _value: bigint;
                };
                liquidationFee: {
                    _value: bigint;
                };
            }[];
            latestOracleVersion: {
                timestamp: bigint;
                price: bigint;
                valid: boolean;
            };
            currentOracleVersion: bigint;
        }[];
        marketVaultSnapshots: readonly {
            marketAddress: `0x${string}`;
            account: `0x${string}`;
            local: {
                currentId: bigint;
                latestId: bigint;
                collateral: bigint;
                claimable: bigint;
            };
            latestOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            pendingOrder: {
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
                makerReferral: bigint;
                takerReferral: bigint;
            };
            latestGuarantee: {
                orders: bigint;
                notional: bigint;
                takerPos: bigint;
                takerNeg: bigint;
                takerFee: bigint;
                referral: bigint;
            };
            pendingGuarantee: {
                orders: bigint;
                notional: bigint;
                takerPos: bigint;
                takerNeg: bigint;
                takerFee: bigint;
                referral: bigint;
            };
            position: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            nextPosition: {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            };
            checkpoint: {
                tradeFee: bigint;
                settlementFee: bigint;
                transfer: bigint;
                collateral: bigint;
            };
            pendingPositions: readonly {
                timestamp: bigint;
                maker: bigint;
                long: bigint;
                short: bigint;
            }[];
            versions: readonly {
                valid: boolean;
                price: bigint;
                makerValue: {
                    _value: bigint;
                };
                longValue: {
                    _value: bigint;
                };
                shortValue: {
                    _value: bigint;
                };
                makerFee: {
                    _value: bigint;
                };
                takerFee: {
                    _value: bigint;
                };
                makerOffset: {
                    _value: bigint;
                };
                takerPosOffset: {
                    _value: bigint;
                };
                takerNegOffset: {
                    _value: bigint;
                };
                settlementFee: {
                    _value: bigint;
                };
                liquidationFee: {
                    _value: bigint;
                };
            }[];
            oracleVersions: readonly {
                timestamp: bigint;
                price: bigint;
                valid: boolean;
            }[];
            oracleReceipts: readonly {
                settlementFee: bigint;
                oracleFee: bigint;
            }[];
        }[];
    }[];
    user: {
        vaultType: PerennialVaultType;
        vault: `0x${string}`;
        account: `0x${string}`;
        accountData: {
            current: bigint;
            latest: bigint;
            shares: bigint;
            assets: bigint;
            deposit: bigint;
            redemption: bigint;
        };
        assets: bigint;
        redemptionAssets: bigint;
        multiInvokerApproved: boolean;
    }[];
    userPre: {
        vaultType: PerennialVaultType;
        vault: `0x${string}`;
        account: `0x${string}`;
        accountData: {
            current: bigint;
            latest: bigint;
            shares: bigint;
            assets: bigint;
            deposit: bigint;
            redemption: bigint;
        };
        assets: bigint;
        redemptionAssets: bigint;
        multiInvokerApproved: boolean;
    }[];
}>;
export type VaultPositionHistory = NonNullable<Awaited<ReturnType<typeof fetchVaultPositionHistory>>>[PerennialVaultType];
export declare function fetchVaultPositionHistory({ chainId, address, publicClient, }: {
    chainId: SupportedChainId;
    address: Address;
    publicClient: PublicClient;
}): Promise<Record<PerennialVaultType, {
    vault: PerennialVaultType;
    vaultAddress: `0x${string}`;
    logs: import("viem").GetLogsReturnType<{
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
    }, [{
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
    }], true, 0n, "latest">;
    deposits: import("viem").Log<bigint, number, false, {
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
    }, true, [{
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
    }], "Updated">[];
    redeems: import("viem").Log<bigint, number, false, {
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
    }, true, [{
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
    }], "Updated">[];
    claims: import("viem").Log<bigint, number, false, {
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
    }, true, [{
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
    }], "Updated">[];
    currentPositionDeposits: bigint;
    currentPositionClaims: bigint;
}>>;
export {};
//# sourceMappingURL=chain.d.ts.map