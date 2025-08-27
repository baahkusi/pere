import { UpdateDataRequest, UpdateDataResponse } from '.';
export declare function fetchPrices({ url, timestamp, feeds, }: {
    url: string;
    timestamp?: bigint;
    feeds: UpdateDataRequest[];
}): Promise<Omit<UpdateDataResponse, 'keeperFactory'>>;
//# sourceMappingURL=cryptex.d.ts.map