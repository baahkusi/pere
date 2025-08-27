import { HermesClient } from '@pythnetwork/hermes-client';
import { Address, Hex, PublicClient, WalletClient } from 'viem';
import { SupportedChainId, SupportedMarket } from '../../constants';
import { OptionalAddress } from '../../types/shared';
import { MarketOracles } from '../markets/chain';
export type OracleProviderType = 'PythFactory' | 'CryptexFactory' | 'ChainlinkFactory' | 'StorkFactory' | 'unknown';
export type OracleClients = {
    pyth: HermesClient | HermesClient[];
    cryptex?: string;
    stork?: {
        url: string;
        apiKey?: string;
    };
};
export declare function oracleProviderTypeForFactoryAddress({ chainId, publicClient, factory, }: {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    factory: Address;
}): Promise<OracleProviderType>;
export type UpdateDataRequest = {
    factory: Address;
    subOracle: Address;
    id: Hex;
    underlyingId: Hex;
    minValidTime: bigint;
    staleAfter?: bigint;
};
export type UpdateDataResponse = {
    keeperFactory: Address;
    version: bigint;
    value: bigint;
    updateData: Hex;
    ids: Hex[];
    details: {
        id: Hex;
        underlyingId: Hex;
        price: bigint;
        publishTime: number;
    }[];
};
export declare function oracleCommitmentsLatest({ chainId, oracleClients, requests, versionOverride, publicClient, onSuccess, onError, }: {
    chainId: SupportedChainId;
    requests: UpdateDataRequest[];
    oracleClients: OracleClients;
    versionOverride?: bigint;
    publicClient: PublicClient;
    onError?: () => void;
    onSuccess?: () => void;
}): Promise<UpdateDataResponse[]>;
export declare function oracleCommitmentsTimestamp({ chainId, oracleClients, requests, timestamp, versionOverride, publicClient, onSuccess, onError, }: {
    chainId: SupportedChainId;
    requests: UpdateDataRequest[];
    timestamp: bigint;
    versionOverride?: bigint;
    oracleClients: OracleClients;
    publicClient: PublicClient;
    onError?: () => void;
    onSuccess?: () => void;
}): Promise<UpdateDataResponse[]>;
export declare function marketOraclesToUpdateDataRequest(marketOracles: MarketOracles[SupportedMarket][]): UpdateDataRequest[];
export type BuildCommitPriceTxArgs = {
    chainId: SupportedChainId;
    keeperFactory: Address;
    address: Address;
    value: bigint;
    ids: Hex[];
    version: bigint;
    updateData: Hex;
    revertOnFailure?: boolean;
};
export declare function buildCommitPriceTx({ chainId, keeperFactory, address, value, ids, version, updateData, revertOnFailure, }: BuildCommitPriceTxArgs): {
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
};
type OracleConfig = {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    supportedMarkets: SupportedMarket[];
    walletClient?: WalletClient;
    operatingFor?: Address;
};
type OmitBound<T> = Omit<T, 'chainId' | 'publicClient' | 'oracleClients' | 'requests' | 'address'>;
type OptionalRequests = {
    requests?: UpdateDataRequest[];
    markets?: SupportedMarket[];
};
export declare class OraclesModule {
    private config;
    private defaultAddress;
    constructor(config: OracleConfig);
    get read(): {
        oracleCommitmentsLatest: (args?: OmitBound<Parameters<typeof oracleCommitmentsLatest>[0]> & OptionalRequests) => Promise<UpdateDataResponse[]>;
        oracleCommitmentsTimestamp: (args: OmitBound<Parameters<typeof oracleCommitmentsTimestamp>[0]> & OptionalRequests) => Promise<UpdateDataResponse[]>;
        oracleProviderForFactoryAddress: (args: OmitBound<Parameters<typeof oracleProviderTypeForFactoryAddress>[0]>) => Promise<OracleProviderType>;
    };
    get build(): {
        commitPrice: (args: OmitBound<Parameters<typeof buildCommitPriceTx>[0]> & OptionalAddress) => {
            to: `0x${string}`;
            data: `0x${string}`;
            value: bigint;
        };
    };
    get write(): {
        commitPrice: (args: OmitBound<BuildCommitPriceTxArgs> & OptionalAddress) => Promise<`0x${string}`>;
    };
}
export {};
//# sourceMappingURL=index.d.ts.map