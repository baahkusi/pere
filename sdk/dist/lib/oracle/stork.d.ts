import { UpdateDataRequest, UpdateDataResponse } from '.';
export declare function fetchPrices({ url, apiKey, timestamp, feeds, }: {
    url: string;
    apiKey?: string;
    timestamp?: bigint;
    feeds: UpdateDataRequest[];
}): Promise<Omit<UpdateDataResponse, 'keeperFactory'>>;
//# sourceMappingURL=stork.d.ts.map