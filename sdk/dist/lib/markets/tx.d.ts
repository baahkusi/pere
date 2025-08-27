import { Address, Hex, PublicClient } from 'viem';
import { PositionSide, SupportedChainId, SupportedMarket, TriggerComparison } from '../../constants';
import { InterfaceFee } from '../../constants';
import { Intent } from '../../types/perennial';
import { OracleClients } from '../oracle';
import { MarketOracles, MarketSnapshots } from './chain';
import { OpenOrder } from './graph';
export type WithChainIdAndPublicClient = {
    chainId: SupportedChainId;
    publicClient: PublicClient;
};
export type BuildUpdateMarketTxArgs = {
    marketAddress: Address;
    marketSnapshots?: MarketSnapshots;
    marketOracles?: MarketOracles;
    oracleClients: OracleClients;
    address: Address;
    collateralDelta?: bigint;
    positionAbs?: bigint;
    side: PositionSide;
    interfaceFee?: InterfaceFee;
    referralFee?: InterfaceFee;
    onCommitmentError?: () => any;
} & WithChainIdAndPublicClient;
export declare function buildUpdateMarketTx({ chainId, publicClient, marketAddress, marketSnapshots, marketOracles, oracleClients, address, side, positionAbs, collateralDelta, interfaceFee, referralFee, onCommitmentError, }: BuildUpdateMarketTxArgs): Promise<{
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
} | undefined>;
export type CancelOrderDetails = {
    market: Address;
    nonce: bigint;
} | OpenOrder;
export type BuildTriggerOrderBaseArgs = {
    address: Address;
    marketAddress: Address;
    side: PositionSide;
    delta: bigint;
    maxFee?: bigint;
    interfaceFee?: InterfaceFee;
    referralFee?: InterfaceFee;
} & WithChainIdAndPublicClient;
export type BuildLimitOrderTxArgs = {
    limitPrice: bigint;
    triggerComparison: TriggerComparison;
} & BuildTriggerOrderBaseArgs;
export declare function buildLimitOrderTx({ address, chainId, marketAddress, limitPrice, side, delta, triggerComparison, interfaceFee, referralFee, }: BuildLimitOrderTxArgs): Promise<{
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
} | undefined>;
export type BuildStopLossTxArgs = {
    stopLossPrice: bigint;
} & BuildTriggerOrderBaseArgs;
export declare function buildStopLossTx({ address, chainId, marketAddress, stopLossPrice, side, delta, interfaceFee, referralFee, maxFee, }: BuildStopLossTxArgs): Promise<{
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
}>;
export type BuildTakeProfitTxArgs = {
    takeProfitPrice: bigint;
} & BuildTriggerOrderBaseArgs;
export declare function buildTakeProfitTx({ address, chainId, marketAddress, takeProfitPrice, side, delta, interfaceFee, referralFee, maxFee, }: BuildTakeProfitTxArgs): Promise<{
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
}>;
export type BuildCancelOrderTxArgs = {
    chainId: SupportedChainId;
    address: Address;
    orderDetails: CancelOrderDetails[];
};
export declare function buildCancelOrderTx({ chainId, address, orderDetails }: BuildCancelOrderTxArgs): {
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
};
export type BuildClaimFeeTxArgs = {
    chainId: SupportedChainId;
    address: Address;
    marketAddress: Address;
    unwrap?: boolean;
};
export declare function buildClaimFeeTx({ chainId, address, marketAddress, unwrap }: BuildClaimFeeTxArgs): {
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
};
export type BuildUpdateIntentTxArgs = {
    chainId: SupportedChainId;
    address: Address;
    market: SupportedMarket | Address;
    intent: Intent;
    signature: Hex;
};
export declare function buildUpdateIntentTx({ chainId, address, market, intent, signature }: BuildUpdateIntentTxArgs): {
    to: `0x${string}`;
    data: `0x${string}`;
    value: bigint;
};
//# sourceMappingURL=tx.d.ts.map