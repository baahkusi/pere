import { Address, PublicClient, WalletClient } from 'viem';
import { SupportedChainId } from '../../constants';
import { OptionalAddress } from '../../types/shared';
import { BuildRelayedTakeSigningPayloadArgs } from './intent';
import { BuildDeployAccountSigningPayloadArgs } from './intent/buildDeployAccountSigningPayload';
import { BuildMarketTransferSigningPayloadArgs } from './intent/buildMarketTransferSigningPayload';
import { BuildRebalanceConfigChangeSigningPayloadArgs } from './intent/buildRebalanceConfigChangeSigningPayload';
import { BuildRelayedAccessUpdateBatchSigningPayloadArgs } from './intent/buildRelayedAccessUpdateBatchSigningPayload';
import { BuildRelayedGroupCancellationSigningPayloadArgs } from './intent/buildRelayedGroupCancellationSigningPayload';
import { BuildRelayedNonceCancellationSigningPayloadArgs } from './intent/buildRelayedNonceCancellationSigningPayload';
import { BuildRelayedOperatorUpdateSigningPayloadArgs } from './intent/buildRelayedOperatorUpdateSigningPayload';
import { BuildRelayedSignerUpdateSigningPayloadArgs } from './intent/buildRelayedSignerUpdateSigningPayload';
import { BuildWithdrawalSigningPayloadArgs } from './intent/buildWithdrawalSigningPayload';
import { ReadCollateralAccountAddressArgs } from './read/collateralAccountAddress';
type OmitBound<T> = Omit<T, 'chainId' | 'publicClient' | 'address'>;
export declare class CollateralAccountModule {
    private config;
    private defaultAddress;
    constructor(config: {
        chainId: SupportedChainId;
        publicClient: PublicClient;
        walletClient?: WalletClient;
        operatingFor?: Address;
    });
    get read(): {
        collateralAccountAddress: (args?: OmitBound<ReadCollateralAccountAddressArgs> & OptionalAddress) => Promise<`0x${string}`>;
    };
    get build(): {
        signed: {
            deployAccount: (args: OmitBound<BuildDeployAccountSigningPayloadArgs> & OptionalAddress) => {
                deployAccount: import("../../constants/eip712").DeployAccountSigningPayload;
            };
            withdrawal: (args: OmitBound<BuildWithdrawalSigningPayloadArgs> & OptionalAddress) => {
                withdrawal: import("../../constants/eip712").WithdrawalSigningPayload;
            };
            marketTransfer: (args: OmitBound<BuildMarketTransferSigningPayloadArgs> & OptionalAddress) => {
                marketTransfer: import("../../constants/eip712").MarketTransferSigningPayload;
            };
            rebalanceConfigChange: (args: OmitBound<BuildRebalanceConfigChangeSigningPayloadArgs> & OptionalAddress) => {
                rebalanceConfigChange: import("../../constants/eip712").RebalanceConfigChangeSigningPayload;
            };
            relayedSignerUpdate: (args: OmitBound<BuildRelayedSignerUpdateSigningPayloadArgs> & OptionalAddress) => {
                signerUpdate: import("../../constants/eip712").SignerUpdateSigningPayload;
                relayedSignerUpdate: import("../../constants/eip712").RelayedSignerUpdateSigningPayload;
            };
            relayedOperatorUpdate: (args: OmitBound<BuildRelayedOperatorUpdateSigningPayloadArgs> & OptionalAddress) => {
                operatorUpdate: import("../../constants/eip712").OperatorUpdateSigningPayload;
                relayedOperatorUpdate: import("../../constants/eip712").RelayedOperatorUpdateSigningPayload;
            };
            relayedAccessUpdateBatch: (args: OmitBound<BuildRelayedAccessUpdateBatchSigningPayloadArgs> & OptionalAddress) => {
                relayedAccessUpdateBatch: import("../../constants/eip712").RelayedAccessUpdateBatchSigningPayload;
                accessUpdateBatch: import("../../constants/eip712").AccessUpdateBatchSigningPayload;
            };
            relayedGroupCancellation: (args: OmitBound<BuildRelayedGroupCancellationSigningPayloadArgs> & OptionalAddress) => {
                groupCancellation: import("../../constants/eip712").GroupCancellationSigningPayload;
                relayedGroupCancellation: import("../../constants/eip712").RelayedGroupCancellationSigningPayload;
            };
            relayedNonceCancellation: (args: OmitBound<BuildRelayedNonceCancellationSigningPayloadArgs> & OptionalAddress) => {
                nonceCancellation: import("../../constants/eip712").CommonSigningPayload;
                relayedNonceCancellation: import("../../constants/eip712").RelayedNonceCancellationSigningPayload;
            };
            relayedTake: (args: OmitBound<BuildRelayedTakeSigningPayloadArgs> & OptionalAddress) => {
                relayedTake: import("../../constants/eip712").RelayedTakeSigningPayload;
                take: import("../../constants/eip712").TakeSigningPayload;
            };
        };
    };
    get write(): {};
    get sign(): {
        deployAccount: (args: OmitBound<BuildDeployAccountSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            deployAccount: import("../../constants/eip712").DeployAccountSigningPayload;
        }>;
        withdrawal: (args: OmitBound<BuildWithdrawalSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            withdrawal: import("../../constants/eip712").WithdrawalSigningPayload;
        }>;
        marketTransfer: (args: OmitBound<BuildMarketTransferSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            marketTransfer: import("../../constants/eip712").MarketTransferSigningPayload;
        }>;
        rebalanceConfigChange: (args: OmitBound<BuildRebalanceConfigChangeSigningPayloadArgs> & OptionalAddress) => Promise<{
            signature: `0x${string}`;
            rebalanceConfigChange: import("../../constants/eip712").RebalanceConfigChangeSigningPayload;
        }>;
        relayedSignerUpdate: (args: OmitBound<BuildRelayedSignerUpdateSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            signerUpdate: import("../../constants/eip712").SignerUpdateSigningPayload;
            relayedSignerUpdate: import("../../constants/eip712").RelayedSignerUpdateSigningPayload;
        }>;
        relayedOperatorUpdate: (args: OmitBound<BuildRelayedOperatorUpdateSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            operatorUpdate: import("../../constants/eip712").OperatorUpdateSigningPayload;
            relayedOperatorUpdate: import("../../constants/eip712").RelayedOperatorUpdateSigningPayload;
        }>;
        relayedAccessUpdateBatch: (args: OmitBound<BuildRelayedAccessUpdateBatchSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            relayedAccessUpdateBatch: import("../../constants/eip712").RelayedAccessUpdateBatchSigningPayload;
            accessUpdateBatch: import("../../constants/eip712").AccessUpdateBatchSigningPayload;
        }>;
        relayedGroupCancellation: (args: OmitBound<BuildRelayedGroupCancellationSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            groupCancellation: import("../../constants/eip712").GroupCancellationSigningPayload;
            relayedGroupCancellation: import("../../constants/eip712").RelayedGroupCancellationSigningPayload;
        }>;
        relayedNonceCancellation: (args: OmitBound<BuildRelayedNonceCancellationSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            nonceCancellation: import("../../constants/eip712").CommonSigningPayload;
            relayedNonceCancellation: import("../../constants/eip712").RelayedNonceCancellationSigningPayload;
        }>;
        relayedTake: (args: OmitBound<BuildRelayedTakeSigningPayloadArgs> & OptionalAddress) => Promise<{
            outerSignature: `0x${string}`;
            innerSignature: `0x${string}`;
            relayedTake: import("../../constants/eip712").RelayedTakeSigningPayload;
            take: import("../../constants/eip712").TakeSigningPayload;
        }>;
    };
}
export {};
//# sourceMappingURL=index.d.ts.map