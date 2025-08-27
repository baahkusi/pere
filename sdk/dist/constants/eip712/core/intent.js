"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentSigningTypes = exports.EIP712_Intent = void 0;
const shared_1 = require("../shared");
exports.EIP712_Intent = [
    {
        name: 'amount',
        type: 'int256',
    },
    {
        name: 'price',
        type: 'int256',
    },
    {
        name: 'fee',
        type: 'uint256',
    },
    {
        name: 'originator',
        type: 'address',
    },
    {
        name: 'solver',
        type: 'address',
    },
    {
        name: 'collateralization',
        type: 'uint256',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.IntentSigningTypes = {
    Intent: exports.EIP712_Intent,
    Common: shared_1.EIP712_Common,
};
