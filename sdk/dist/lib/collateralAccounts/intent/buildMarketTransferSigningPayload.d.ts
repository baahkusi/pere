import { Address } from 'viem';
import { MarketTransferSigningPayload } from '../../../constants/eip712';
import { SupportedMarket } from '../../../constants/markets';
import { CommonOverrides, CommonRequired } from '../../../types/shared';
import { ActionRequred } from './_util';
export type BuildMarketTransferSigningPayloadArgs = CommonRequired & ActionRequred & CommonOverrides & {
    market: Address | SupportedMarket;
    amount: bigint;
};
export declare function buildMarketTransferSigningPayload({ chainId, address: account, maxFee, market: market_, amount, overrides, expiry, }: BuildMarketTransferSigningPayloadArgs): {
    marketTransfer: MarketTransferSigningPayload;
};
//# sourceMappingURL=buildMarketTransferSigningPayload.d.ts.map