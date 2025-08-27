import { Address, Hex } from 'viem';
import { PositionSide } from '../constants/markets';
import { SupportedChainId } from '../constants/network';
import { Intent, MultiInvokerAction } from '../types/perennial';
export declare const buildNoop: () => MultiInvokerAction;
export declare const buildUpdateMarket: ({ market, maker, long, short, collateral, wrap, interfaceFee, interfaceFee2, }: {
    market: Address;
    maker?: bigint | undefined;
    long?: bigint | undefined;
    short?: bigint | undefined;
    collateral?: bigint | undefined;
    wrap?: boolean | undefined;
    interfaceFee?: {
        amount: bigint;
        receiver: Address;
        unwrap: boolean;
    } | undefined;
    interfaceFee2?: {
        amount: bigint;
        receiver: Address;
        unwrap: boolean;
    } | undefined;
}) => MultiInvokerAction;
export declare const buildUpdateVault: ({ vault, deposit, redeem, claim, wrap, }: {
    vault: Address;
    deposit?: bigint | undefined;
    redeem?: bigint | undefined;
    claim?: bigint | undefined;
    wrap?: boolean | undefined;
}) => MultiInvokerAction;
export declare const buildPlaceTriggerOrder: ({ market, side, comparison, maxFee, triggerPrice, delta, interfaceFee, interfaceFee2, }: {
    market: Address;
    side: PositionSide.long | PositionSide.short;
    comparison: 'lte' | 'gte';
    maxFee: bigint;
    triggerPrice: bigint;
    delta: bigint;
    interfaceFee?: {
        amount: bigint;
        receiver: Address;
        unwrap: boolean;
    } | undefined;
    interfaceFee2?: {
        amount: bigint;
        receiver: Address;
        unwrap: boolean;
    } | undefined;
}) => MultiInvokerAction;
export declare const buildCancelOrder: ({ market, nonce }: {
    market: Address;
    nonce: bigint;
}) => MultiInvokerAction;
export declare const buildCommitPrice: ({ keeperFactory, version, value, ids, vaa, revertOnFailure, }: {
    keeperFactory: Address;
    version: bigint;
    value: bigint;
    ids: string[];
    vaa: string;
    revertOnFailure: boolean;
}) => MultiInvokerAction;
export declare const buildLiquidate: ({ market, user }: {
    market: Address;
    user: Address;
}) => MultiInvokerAction;
export declare const buildApproveTarget: ({ target }: {
    target: Address;
}) => MultiInvokerAction;
export declare const buildUpdateIntent: ({ market, intent, signature, }: {
    market: Address;
    intent: Intent;
    signature: Hex;
}) => MultiInvokerAction;
export declare const buildClaimFee: ({ market, unwrap }: {
    market: Address;
    unwrap: boolean;
}) => MultiInvokerAction;
export declare const EmptyInterfaceFee: {
    amount: bigint;
    receiver: Address;
    unwrap: boolean;
};
/**
 * Encodes a MultiInvoker invoke transaction
 * @param chainId - Chain ID
 * @param actions - MultiInvoker actions
 * @param address - Address to invoke from
 * @returns Transaction data object - { data: Hex, value: bigint, to: Address }
 */
export declare const encodeInvoke: ({ chainId, actions, address, value, }: {
    chainId: SupportedChainId;
    actions: MultiInvokerAction[];
    address?: `0x${string}` | undefined;
    value: bigint;
}) => {
    to: Address;
    data: Hex;
    value: bigint;
};
/**
 * Combines the transaction data from multiple MultiInvoker transactions into a single transaction
 * @param transactionData - Array of transaction data to merge
 * @returns Transaction data object - { data: Hex, value: bigint, to: Address }
 */
export declare const mergeMultiInvokerTxs: (transactionData: {
    data: Hex;
    value: bigint;
    to: Address;
}[]) => {
    data: `0x${string}`;
    value: bigint;
    to: `0x${string}`;
};
//# sourceMappingURL=multiinvoker.d.ts.map