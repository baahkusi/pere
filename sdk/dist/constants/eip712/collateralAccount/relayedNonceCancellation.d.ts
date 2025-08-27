import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedNonceCancellation: readonly [{
    readonly name: "nonceCancellation";
    readonly type: "Common";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedNonceCancellationSigningTypes: {
    readonly RelayedNonceCancellation: readonly [{
        readonly name: "nonceCancellation";
        readonly type: "Common";
    }, {
        readonly name: "action";
        readonly type: "Action";
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
    readonly Action: readonly [{
        readonly name: "maxFee";
        readonly type: "uint256";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
};
export type RelayedNonceCancellationSigningPayload = Omit<SignTypedDataParameters<typeof RelayedNonceCancellationSigningTypes, 'RelayedNonceCancellation'>, 'account'>;
//# sourceMappingURL=relayedNonceCancellation.d.ts.map