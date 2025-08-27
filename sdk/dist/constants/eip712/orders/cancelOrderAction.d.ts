import { SignTypedDataParameters } from 'viem';
export declare const EIP712_CancelOrderAction: readonly [{
    readonly name: "action";
    readonly type: "Action";
}];
export declare const CancelOrderSigningTypes: {
    readonly CancelOrderAction: readonly [{
        readonly name: "action";
        readonly type: "Action";
    }];
    readonly Action: readonly [{
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly name: "orderId";
        readonly type: "uint256";
    }, {
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
};
export type CancelOrderSigningPayload = Omit<SignTypedDataParameters<typeof CancelOrderSigningTypes, 'CancelOrderAction'>, 'account'>;
//# sourceMappingURL=cancelOrderAction.d.ts.map