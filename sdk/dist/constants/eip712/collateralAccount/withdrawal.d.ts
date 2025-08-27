import { SignTypedDataParameters } from 'viem';
export declare const EIP712_Withdrawal: readonly [{
    readonly name: "amount";
    readonly type: "uint256";
}, {
    readonly name: "unwrap";
    readonly type: "bool";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const WithdrawalSigningTypes: {
    readonly Withdrawal: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly name: "unwrap";
        readonly type: "bool";
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
export type WithdrawalSigningPayload = Omit<SignTypedDataParameters<typeof WithdrawalSigningTypes, 'Withdrawal'>, 'account'>;
//# sourceMappingURL=withdrawal.d.ts.map