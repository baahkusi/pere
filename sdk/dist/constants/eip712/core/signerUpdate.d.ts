import { SignTypedDataParameters } from 'viem';
export declare const EIP712_SignerUpdate: readonly [{
    readonly name: "access";
    readonly type: "AccessUpdate";
}, {
    readonly name: "common";
    readonly type: "Common";
}];
export declare const SignerUpdateSigningTypes: {
    readonly SignerUpdate: readonly [{
        readonly name: "access";
        readonly type: "AccessUpdate";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
    readonly AccessUpdate: readonly [{
        readonly name: "accessor";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
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
export type SignerUpdateSigningPayload = Omit<SignTypedDataParameters<typeof SignerUpdateSigningTypes, 'SignerUpdate'>, 'account'>;
//# sourceMappingURL=signerUpdate.d.ts.map