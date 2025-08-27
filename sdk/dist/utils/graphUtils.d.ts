import { Hex } from 'viem';
export declare const GraphDefaultPageSize = 1000;
export declare function queryAll<T extends {
    [key: string]: any;
}>(query: (page: number) => Promise<T>): Promise<T>;
export declare function bigIntToLittleEndian(value: bigint, size: number): Hex;
//# sourceMappingURL=graphUtils.d.ts.map