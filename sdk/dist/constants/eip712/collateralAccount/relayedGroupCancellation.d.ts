import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedGroupCancellation: readonly [{
    readonly name: "groupCancellation";
    readonly type: "GroupCancellation";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedGroupCancellationSigningTypes: {
    readonly RelayedGroupCancellation: readonly [{
        readonly name: "groupCancellation";
        readonly type: "GroupCancellation";
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
    readonly GroupCancellation: readonly [{
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
};
export type RelayedGroupCancellationSigningPayload = Omit<SignTypedDataParameters<typeof RelayedGroupCancellationSigningTypes, 'RelayedGroupCancellation'>, 'account'>;
//# sourceMappingURL=relayedGroupCancellation.d.ts.map