export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
export declare function sum(values: bigint[]): bigint;
export declare function unique<T>(values: T[]): T[];
export declare function equal<T>(a: T[], b: T[]): boolean;
export declare function range(start: bigint | number, end: bigint | number): bigint[];
export declare const chunk: <T>(arr: T[], chunkSize: number) => T[][];
//# sourceMappingURL=arrayUtils.d.ts.map