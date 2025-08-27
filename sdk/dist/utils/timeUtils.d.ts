export declare const Second = 1n;
export declare const Minute: bigint;
export declare const Hour: bigint;
export declare const Day: bigint;
export declare const Year: bigint;
export declare function nowSeconds(): number;
export declare function nowSeconds<T extends boolean | undefined>(asBigInt: T): T extends true ? bigint : number;
export declare function timeToSeconds(time: number | Date): number;
export declare function timeToSeconds<T extends boolean | undefined>(time: number | Date, asBigInt: T): T extends true ? bigint : number;
export declare const last24hrBounds: () => {
    to: number;
    from: number;
};
export declare const last7dBounds: () => {
    to: number;
    from: number;
};
export declare const formatDateRelative: (date: Date) => string;
//# sourceMappingURL=timeUtils.d.ts.map