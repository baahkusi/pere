import { SignTypedDataParameters } from 'viem';
export declare const EIP712_MarketTransfer: readonly [{
    readonly name: "market";
    readonly type: "address";
}, {
    readonly name: "amount";
    readonly type: "int256";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const MarketTransferSigningTypes: {
    readonly MarketTransfer: readonly [{
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "int256";
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
};
export type MarketTransferSigningPayload = Omit<SignTypedDataParameters<typeof MarketTransferSigningTypes, 'MarketTransfer'>, 'account'>;
//# sourceMappingURL=marketTransfer.d.ts.map