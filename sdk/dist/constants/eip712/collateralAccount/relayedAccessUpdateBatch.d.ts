import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RelayedAccessUpdateBatch: readonly [{
    readonly name: "accessUpdateBatch";
    readonly type: "AccessUpdateBatch";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RelayedAccessUpdateBatchSigningTypes: {
    readonly RelayedAccessUpdateBatch: readonly [{
        readonly name: "accessUpdateBatch";
        readonly type: "AccessUpdateBatch";
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
export type RelayedAccessUpdateBatchSigningPayload = Omit<SignTypedDataParameters<typeof RelayedAccessUpdateBatchSigningTypes, 'RelayedAccessUpdateBatch'>, 'account'>;
//# sourceMappingURL=relayedAccessUpdateBatch.d.ts.map