import { SignTypedDataParameters } from 'viem';
export declare const EIP712_GroupCancellation: readonly [{
    readonly name: "group";
    readonly type: "uint256";
}, {
    readonly name: "common";
    readonly type: "Common";
}];
export declare const GroupCancellationSigningTypes: {
    readonly GroupCancellation: readonly [{
        readonly name: "group";
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
export type GroupCancellationSigningPayload = Omit<SignTypedDataParameters<typeof GroupCancellationSigningTypes, 'GroupCancellation'>, 'account'>;
//# sourceMappingURL=groupCancellation.d.ts.map