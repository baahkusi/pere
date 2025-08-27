import { SignTypedDataParameters } from 'viem';
export declare const EIP712_Intent: readonly [{
    readonly name: "amount";
    readonly type: "int256";
}, {
    readonly name: "price";
    readonly type: "int256";
}, {
    readonly name: "fee";
    readonly type: "uint256";
}, {
    readonly name: "originator";
    readonly type: "address";
}, {
    readonly name: "solver";
    readonly type: "address";
}, {
    readonly name: "collateralization";
    readonly type: "uint256";
}, {
    readonly name: "common";
    readonly type: "Common";
}];
export declare const IntentSigningTypes: {
    readonly Intent: readonly [{
        readonly name: "amount";
        readonly type: "int256";
    }, {
        readonly name: "price";
        readonly type: "int256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
    }, {
        readonly name: "originator";
        readonly type: "address";
    }, {
        readonly name: "solver";
        readonly type: "address";
    }, {
        readonly name: "collateralization";
        readonly type: "uint256";
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
export type IntentSigningPayload = Omit<SignTypedDataParameters<typeof IntentSigningTypes, 'Intent'>, 'account'>;
//# sourceMappingURL=intent.d.ts.map