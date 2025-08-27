import { SignTypedDataParameters } from 'viem';
export declare const EIP712_AccessUpdate: readonly [{
    readonly name: "accessor";
    readonly type: "address";
}, {
    readonly name: "approved";
    readonly type: "bool";
}];
export declare const AccessUpdateSigningTypes: {
    readonly AccessUpdate: readonly [{
        readonly name: "accessor";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
};
export type AccessUpdateSigningPayload = Omit<SignTypedDataParameters<typeof AccessUpdateSigningTypes, 'AccessUpdate'>, 'account'>;
export declare const EIP712_AccessUpdateBatch: readonly [{
    readonly name: "operators";
    readonly type: "AccessUpdate[]";
}, {
    readonly name: "signers";
    readonly type: "AccessUpdate[]";
}, {
    readonly name: "common";
    readonly type: "Common";
}];
export declare const AccessUpdateBatchSigningTypes: {
    readonly AccessUpdateBatch: readonly [{
        readonly name: "operators";
        readonly type: "AccessUpdate[]";
    }, {
        readonly name: "signers";
        readonly type: "AccessUpdate[]";
    }, {
        readonly name: "common";
        readonly type: "Common";
    }];
    readonly AccessUpdate: readonly [{
        readonly name: "accessor";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
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
export type AccessUpdateBatchSigningPayload = Omit<SignTypedDataParameters<typeof AccessUpdateBatchSigningTypes, 'AccessUpdateBatch'>, 'account'>;
//# sourceMappingURL=accessUpdate.d.ts.map