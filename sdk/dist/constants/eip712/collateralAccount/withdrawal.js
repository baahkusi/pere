"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalSigningTypes = exports.EIP712_Withdrawal = void 0;
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_Withdrawal = [
    {
        name: 'amount',
        type: 'uint256',
    },
    {
        name: 'unwrap',
        type: 'bool',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.WithdrawalSigningTypes = {
    Withdrawal: exports.EIP712_Withdrawal,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
};
