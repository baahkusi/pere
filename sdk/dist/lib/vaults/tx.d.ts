import { Address, PublicClient } from 'viem';
import { SupportedChainId } from '../../constants';
import { MarketOracles } from '../markets/chain';
import { OracleClients } from '../oracle';
import { VaultSnapshots } from './chain';
type BaseVaultUpdateTxArgs = {
    chainId: SupportedChainId;
    publicClient: PublicClient;
    oracleClients: OracleClients;
    vaultAddress: Address;
    address?: Address;
    marketOracles?: MarketOracles;
    vaultSnapshots?: VaultSnapshots;
};
export type BuildDepositTxArgs = BaseVaultUpdateTxArgs & {
    amount: bigint;
};
export declare function buildDepositTx(args: BuildDepositTxArgs): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
export type BuildRedeemSharesTxArgs = BaseVaultUpdateTxArgs & {
    amount: bigint;
    assets?: boolean;
    max?: boolean;
};
export declare function buildRedeemSharesTx(args: BuildRedeemSharesTxArgs): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
export type BuildClaimTxArgs = BaseVaultUpdateTxArgs;
export declare function buildClaimTx(args: BuildClaimTxArgs): Promise<{
    to: `0x${string}`;
    value: bigint;
    data: `0x${string}`;
}>;
export {};
//# sourceMappingURL=tx.d.ts.map