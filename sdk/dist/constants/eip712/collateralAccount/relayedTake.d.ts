import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedTake: readonly [{
    readonly name: "take";
    readonly type: "Take";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedTakeSigningTypes: {
    readonly RelayedTake: readonly [{
        readonly name: "take";
        readonly type: "Take";
    }, {
        readonly name: "action";
        readonly type: "Action";
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
};
export type RelayedTakeSigningPayload = Omit<SignTypedDataParameters<typeof RelayedTakeSigningTypes, 'RelayedTake'>, 'account'>;
//# sourceMappingURL=relayedTake.d.ts.map