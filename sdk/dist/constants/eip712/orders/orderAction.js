"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP712_OrderAction = void 0;
exports.EIP712_OrderAction = [
    {
        name: 'market',
        type: 'address',
    },
    {
        name: 'orderId',
        type: 'uint256',
    },
    {
        name: 'maxFee',
        type: 'uint256',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
