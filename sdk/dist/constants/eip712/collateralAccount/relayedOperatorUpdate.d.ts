import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedOperatorUpdate: readonly [{
    readonly name: "operatorUpdate";
    readonly type: "OperatorUpdate";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedOperatorUpdateSigningTypes: {
    readonly RelayedOperatorUpdate: readonly [{
        readonly name: "operatorUpdate";
        readonly type: "OperatorUpdate";
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
    readonly OperatorUpdate: readonly [{
        readonly name: "access";
        readonly type: "AccessUpdate";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
};
export type RelayedOperatorUpdateSigningPayload = Omit<SignTypedDataParameters<typeof RelayedOperatorUpdateSigningTypes, 'RelayedOperatorUpdate'>, 'account'>;
//# sourceMappingURL=relayedOperatorUpdate.d.ts.map