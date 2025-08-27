import { SignTypedDataParameters } from 'viem';
export declare const EIP712_Take: readonly [{
    readonly name: "amount";
    readonly type: "int256";
}, {
    readonly name: "referrer";
    readonly type: "address";
}, {
    readonly name: "common";
    readonly type: "Common";
}];
export declare const TakeSigningTypes: {
    readonly Take: readonly [{
        readonly name: "amount";
        readonly type: "int256";
    }, {
        readonly name: "referrer";
        readonly type: "address";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
    readonly Common: readonly [{
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly name: "domain";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly type: "uint256";
    }];
};
export type TakeSigningPayload = Omit<SignTypedDataParameters<typeof TakeSigningTypes, 'Take'>, 'account'>;
//# sourceMappingURL=take.d.ts.map