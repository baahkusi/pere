import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedSignerUpdate: readonly [{
    readonly name: "signerUpdate";
    readonly type: "SignerUpdate";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedSignerUpdateSigningTypes: {
    readonly RelayedSignerUpdate: readonly [{
        readonly name: "signerUpdate";
        readonly type: "SignerUpdate";
    }, {
        readonly name: "action";
        readonly type: "Action";
    }];
    readonly AccessUpdate: readonly [{
        readonly name: "accessor";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly Action: readonly [{
        readonly name: "maxFee";
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
    readonly SignerUpdate: readonly [{
        readonly name: "access";
        readonly type: "AccessUpdate";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
};
export type RelayedSignerUpdateSigningPayload = Omit<SignTypedDataParameters<typeof RelayedSignerUpdateSigningTypes, 'RelayedSignerUpdate'>, 'account'>;
//# sourceMappingURL=relayedSignerUpdate.d.ts.map