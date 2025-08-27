"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOrderSigningTypes = exports.EIP712_PlaceOrderAction = exports.EIP712_TriggerOrder = exports.EIP712_InterfaceFee = void 0;
const common_1 = require("../shared/common");
const orderAction_1 = require("./orderAction");
exports.EIP712_InterfaceFee = [
    {
        name: 'amount',
        type: 'uint64',
    },
    {
        name: 'receiver',
        type: 'address',
    },
    {
        name: 'fixedFee',
        type: 'bool',
    },
    {
        name: 'unwrap',
        type: 'bool',
    },
];
exports.EIP712_TriggerOrder = [
    {
        name: 'side',
        type: 'uint8',
    },
    {
        name: 'comparison',
        type: 'int8',
    },
    {
        name: 'price',
        type: 'int64',
    },
    {
        name: 'delta',
        type: 'int64',
    },
    {
        name: 'maxFee',
        type: 'uint64',
    },
    {
        name: 'isSpent',
        type: 'bool',
    },
    {
        name: 'referrer',
        type: 'address',
    },
    {
        name: 'interfaceFee',
        type: 'InterfaceFee',
    },
];
exports.EIP712_PlaceOrderAction = [
    {
        name: 'order',
        type: 'TriggerOrder',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.PlaceOrderSigningTypes = {
    PlaceOrderAction: exports.EIP712_PlaceOrderAction,
    Action: orderAction_1.EIP712_OrderAction,
    Common: common_1.EIP712_Common,
    InterfaceFee: exports.EIP712_InterfaceFee,
    TriggerOrder: exports.EIP712_TriggerOrder,
};
