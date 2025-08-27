import { Address } from 'viem';
import { SupportedMarket } from '../../../constants';
import { PlaceOrderSigningPayload } from '../../../constants/eip712';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
export type BuildPlaceOrderSigningPayloadArgs = CommonRequired & CommonOverrides & {
    market: Address | SupportedMarket;
    maxRelayFee: bigint;
    side: 4 | 5 | 6;
    comparison: -1 | 1;
    price: bigint;
    delta: bigint;
    maxExecutionFee: bigint;
    referrer?: Address;
    interfaceFee?: {
        amount: bigint;
        receiver: Address;
        fixedFee: boolean;
        unwrap: boolean;
    };
    orderId?: bigint;
};
export declare function buildPlaceOrderSigningPayload({ chainId, expiry, address: account, market: market_, side, comparison, price, delta, maxExecutionFee, maxRelayFee, referrer, interfaceFee, orderId, overrides, }: BuildPlaceOrderSigningPayloadArgs): {
    placeOrder: PlaceOrderSigningPayload;
};
//# sourceMappingURL=buildPlaceOrderSigningPayload.d.ts.map