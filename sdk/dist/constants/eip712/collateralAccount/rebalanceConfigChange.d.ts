import { SignTypedDataParameters } from 'viem';
export declare const EIP712_RebalanceConfig: readonly [{
    readonly name: "target";
    readonly type: "uint256";
}, {
    readonly name: "threshold";
    readonly type: "uint256";
}];
export declare const EIP712_RebalanceConfigChange: readonly [{
    readonly name: "group";
    readonly type: "uint256";
}, {
    readonly name: "markets";
    readonly type: "address[]";
}, {
    readonly name: "configs";
    readonly type: "RebalanceConfig[]";
}, {
    readonly name: "maxFee";
    readonly type: "uint256";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const RebalanceConfigChangeSigningTypes: {
    readonly RebalanceConfigChange: readonly [{
        readonly name: "group";
        readonly type: "uint256";
    }, {
        readonly name: "markets";
        readonly type: "address[]";
    }, {
        readonly name: "configs";
        readonly type: "RebalanceConfig[]";
    }, {
        readonly name: "maxFee";
        readonly type: "uint256";
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
    readonly RebalanceConfig: readonly [{
        readonly name: "target";
        readonly type: "uint256";
    }, {
        readonly name: "threshold";
        readonly type: "uint256";
    }];
};
export type RebalanceConfigChangeSigningPayload = Omit<SignTypedDataParameters<typeof RebalanceConfigChangeSigningTypes, 'RebalanceConfigChange'>, 'account'>;
//# sourceMappingURL=rebalanceConfigChange.d.ts.map