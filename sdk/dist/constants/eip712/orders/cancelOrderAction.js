"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrderSigningTypes = exports.EIP712_CancelOrderAction = void 0;
const common_1 = require("../shared/common");
const orderAction_1 = require("./orderAction");
exports.EIP712_CancelOrderAction = [
    {
        name: 'action',
        type: 'Action',
    },
];
exports.CancelOrderSigningTypes = {
    CancelOrderAction: exports.EIP712_CancelOrderAction,
    Action: orderAction_1.EIP712_OrderAction,
    Common: common_1.EIP712_Common,
};
