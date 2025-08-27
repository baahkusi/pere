import { Address, PublicClient } from 'viem';
import { PositionSide, PositionStatus, SupportedChainId, SupportedMarket } from '../..';
import { SupportedMarketMapping } from '../../constants';
import { OracleClients } from '../oracle';
export type MarketOracles = NonNullable<Awaited<ReturnType<typeof fetchMarketOracles>>>;
/**
 * Fetches the market oracles for a given chain
 * @param chainId Chain ID {@link SupportedChainId}
 * @param publicClient Public Client
 * @param markets List of {@link SupportedMarket}
 */
export declare function fetchMarketOracles(chainId: 60850 | 1424 | 42161 | 421614 | undefined, publicClient: PublicClient, markets?: SupportedMarket[]): Promise<SupportedMarketMapping<{
    market: SupportedMarket;
    marketAddress: `0x${string}`;
    oracleName: string;
    oracleFactoryAddress: `0x${string}`;
    oracleAddress: `0x${string}`;
    subOracleFactoryAddress: `0x${string}`;
    subOracleAddress: `0x${string}`;
    subOracleFactoryType: string;
    id: `0x${string}`;
    underlyingId: `0x${string}`;
    minValidTime: bigint;
    staleAfter: bigint;
    maxSettlementFee: bigint;
    commitmentGasOracle: `0x${string}`;
    settlementGasOracle: `0x${string}`;
}>>;
export type MarketSnapshot = ChainMarketSnapshot & {
    pre: ChainMarketSnapshot;
    major: bigint;
    majorSide: PositionSide;
    minor: bigint;
    minorSide: PositionSide;
    nextMajor: bigint;
    nextMajorSide: PositionSide;
    nextMinor: bigint;
    nextMinorSide: PositionSide;
    fundingRate: {
        long: bigint;
        short: bigint;
        maker: bigint;
    };
    socializationFactor: bigint;
    isSocialized: boolean;
    makerTotal: bigint;
    takerTotal: bigint;
};
export type UserMarketSnapshot = ChainUserMarketSnapshot & {
    pre: Omit<ChainUserMarketSnapshot, 'priceUpdate'>;
    side: PositionSide;
    nextSide: PositionSide;
    status: PositionStatus;
    magnitude: bigint;
    nextMagnitude: bigint;
    maintenance: bigint;
    nextMaintenance: bigint;
    margin: bigint;
    nextMargin: bigint;
    leverage: bigint;
    nextLeverage: bigint;
    notional: bigint;
    nextNotional: bigint;
    priceUpdate: Address;
    makerExposure: bigint;
    nextMakerExposure: bigint;
};
export type MarketSnapshots = NonNullable<Awaited<ReturnType<typeof fetchMarketSnapshots>>>;
/**
 * Fetches market snapshots for a given address
 * @param publicClient Public Client
 * @param oracleClients Oracle Clients {@link OracleClients}
 * @param chainId Chain ID {@link SupportedChainId}
 * @param address Wallet Address
 * @param marketOracles {@link MarketOracles}
 * @param markets Subset of availalbe markets to support.
 * @param onError Error callback
 * @param onSuccess Success callback
 */
export declare function fetchMarketSnapshots({ publicClient, oracleClients, chainId, address, marketOracles, markets, onError, onSuccess, useSimulate, }: {
    publicClient: PublicClient;
    oracleClients: OracleClients;
    chainId: SupportedChainId;
    address: Address;
    marketOracles?: MarketOracles;
    markets?: SupportedMarket[];
    onError?: () => void;
    onSuccess?: () => void;
    useSimulate?: boolean;
}): Promise<{
    user: SupportedMarketMapping<UserMarketSnapshot> | undefined;
    market: {
        btc?: MarketSnapshot | undefined;
        eth?: MarketSnapshot | undefined;
        arb?: MarketSnapshot | undefined;
        sol?: MarketSnapshot | undefined;
        pol?: MarketSnapshot | undefined;
        tia?: MarketSnapshot | undefined;
        rlb?: MarketSnapshot | undefined;
        link?: MarketSnapshot | undefined;
        bnb?: MarketSnapshot | undefined;
        xrp?: MarketSnapshot | undefined;
        "btc\u00B2"?: MarketSnapshot | undefined;
        "eth\u00B2"?: MarketSnapshot | undefined;
        jup?: MarketSnapshot | undefined;
        xau?: MarketSnapshot | undefined;
        mog?: MarketSnapshot | undefined;
        jpy?: MarketSnapshot | undefined;
        mkr?: MarketSnapshot | undefined;
        doge?: MarketSnapshot | undefined;
        eur?: MarketSnapshot | undefined;
        gbp?: MarketSnapshot | undefined;
        meem?: MarketSnapshot | undefined;
        aero?: MarketSnapshot | undefined;
        popcat?: MarketSnapshot | undefined;
        unknown?: MarketSnapshot | undefined;
    };
    commitments: readonly `0x${string}`[];
    updates: readonly `0x${string}`[];
    blockNumber: bigint;
    logs: import("viem").Log[] | undefined;
}>;
export type ChainMarketSnapshot = Awaited<ReturnType<typeof fetchMarketSnapshotsAfterSettle>>['market'][number];
export type ChainUserMarketSnapshot = Awaited<ReturnType<typeof fetchMarketSnapshotsAfterSettle>>['user'][number];
declare function fetchMarketSnapshotsAfterSettle({ chainId, address, marketOracles, publicClient, oracleClients, onOracleError, resetOracleError, useSimulate, }: {
    chainId: SupportedChainId;
    address: Address;
    marketOracles: MarketOracles;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    onOracleError?: () => void;
    resetOracleError?: () => void;
    useSimulate?: boolean;
}): Promise<{
    blockNumber: bigint;
    commitments: readonly `0x${string}`[];
    updates: readonly `0x${string}`[];
    logs: import("viem").Log[] | undefined;
    market: {
        market: SupportedMarket;
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
    marketPre: {
        market: SupportedMarket;
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
    user: {
        market: SupportedMarket;
        priceUpdate: `0x${string}`;
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
    userPre: {
        market: SupportedMarket;
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
}>;
export declare function fetchMarketSettlementFees({ chainId, markets, marketOracles, publicClient, }: {
    chainId: SupportedChainId;
    markets: SupportedMarket[];
    marketOracles?: MarketOracles;
    publicClient: PublicClient;
}): Promise<SupportedMarketMapping<{
    commitmentCost: bigint;
    settlementCost: bigint;
    totalCost: bigint;
}>>;
export {};
//# sourceMappingURL=chain.d.ts.map