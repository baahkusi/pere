import { Address } from 'viem';
import { SupportedChainId, SupportedMarket } from '../constants';
export declare function throwIfZeroAddress(address_: string | Address): void;
export declare function addressForMarket(chainId: SupportedChainId, market: SupportedMarket | Address): `0x${string}`;
//# sourceMappingURL=addressUtils.d.ts.map