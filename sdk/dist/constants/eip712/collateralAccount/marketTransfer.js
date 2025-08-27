"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketTransferSigningTypes = exports.EIP712_MarketTransfer = void 0;
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_MarketTransfer = [
    {
        name: 'market',
        type: 'address',
    },
    {
        name: 'amount',
        type: 'int256',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.MarketTransferSigningTypes = {
    MarketTransfer: exports.EIP712_MarketTransfer,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
};
