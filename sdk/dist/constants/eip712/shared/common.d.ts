import { SignTypedDataParameters } from 'viem';
export declare const EIP712_Common: readonly [{
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
export declare const CommonSigningTypes: {
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
export type CommonSigningPayload = Omit<SignTypedDataParameters<typeof CommonSigningTypes, 'Common'>, 'account'>;
//# sourceMappingURL=common.d.ts.map