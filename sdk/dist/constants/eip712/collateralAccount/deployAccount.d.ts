import { SignTypedDataParameters } from 'viem';
export declare const EIP712_DeployAccount: readonly [{
    readonly name: "action";
    readonly type: "Action";
}];
export declare const DeployAccountSigningTypes: {
    readonly DeployAccount: readonly [{
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
export type DeployAccountSigningPayload = Omit<SignTypedDataParameters<typeof DeployAccountSigningTypes, 'DeployAccount'>, 'account'>;
//# sourceMappingURL=deployAccount.d.ts.map