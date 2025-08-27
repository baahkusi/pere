import { HermesClient } from '@pythnetwork/hermes-client';
import { Address, Hex, PublicClient } from 'viem';
import { UpdateDataResponse } from '.';
import { SupportedChainId } from '../../constants/network';
export declare const buildCommitmentsForOracles: ({ chainId, pyth: pyth_, publicClient, marketOracles, timestamp, }: {
    chainId: SupportedChainId;
    pyth: HermesClient | HermesClient[];
    publicClient: PublicClient;
    timestamp?: bigint | undefined;
    marketOracles: {
        providerAddress: Address;
        providerFactoryAddress: Address;
        underlyingId: Hex;
        providerId: Hex;
        minValidTime: bigint;
        staleAfter?: bigint;
    }[];
}) => Promise<UpdateDataResponse[]>;
export declare function pythPriceToBig18(price: bigint, expo: number): bigint;
export declare function pythMarketOpen(priceFeedId: Hex): Promise<boolean>;
//# sourceMappingURL=pyth.d.ts.map