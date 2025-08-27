import { SignTypedDataParameters } from 'viem';
export declare const EIP712_InterfaceFee: readonly [{
    readonly name: "amount";
    readonly type: "uint64";
}, {
    readonly name: "receiver";
    readonly type: "address";
}, {
    readonly name: "fixedFee";
    readonly type: "bool";
}, {
    readonly name: "unwrap";
    readonly type: "bool";
}];
export declare const EIP712_TriggerOrder: readonly [{
    readonly name: "side";
    readonly type: "uint8";
}, {
    readonly name: "comparison";
    readonly type: "int8";
}, {
    readonly name: "price";
    readonly type: "int64";
}, {
    readonly name: "delta";
    readonly type: "int64";
}, {
    readonly name: "maxFee";
    readonly type: "uint64";
}, {
    readonly name: "isSpent";
    readonly type: "bool";
}, {
    readonly name: "referrer";
    readonly type: "address";
}, {
    readonly name: "interfaceFee";
    readonly type: "InterfaceFee";
}];
export declare const EIP712_PlaceOrderAction: readonly [{
    readonly name: "order";
    readonly type: "TriggerOrder";
}, {
    readonly name: "action";
    readonly type: "Action";
}];
export declare const PlaceOrderSigningTypes: {
    readonly PlaceOrderAction: readonly [{
        readonly name: "order";
        readonly type: "TriggerOrder";
    }, {
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
    readonly InterfaceFee: readonly [{
        readonly name: "amount";
        readonly type: "uint64";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "fixedFee";
        readonly type: "bool";
    }, {
        readonly name: "unwrap";
        readonly type: "bool";
    }];
    readonly TriggerOrder: readonly [{
        readonly name: "side";
        readonly type: "uint8";
    }, {
        readonly name: "comparison";
        readonly type: "int8";
    }, {
        readonly name: "price";
        readonly type: "int64";
    }, {
        readonly name: "delta";
        readonly type: "int64";
    }, {
        readonly name: "maxFee";
        readonly type: "uint64";
    }, {
        readonly name: "isSpent";
        readonly type: "bool";
    }, {
        readonly name: "referrer";
        readonly type: "address";
    }, {
        readonly name: "interfaceFee";
        readonly type: "InterfaceFee";
    }];
};
export type PlaceOrderSigningPayload = Omit<SignTypedDataParameters<typeof PlaceOrderSigningTypes, 'PlaceOrderAction'>, 'account'>;
//# sourceMappingURL=placeOrderAction.d.ts.map