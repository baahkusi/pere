"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonSigningTypes = exports.EIP712_Common = void 0;
exports.EIP712_Common = [
    {
        name: 'account',
        type: 'address',
    },
    {
        name: 'signer',
        type: 'address',
    },
    {
        name: 'domain',
        type: 'address',
    },
    {
        name: 'nonce',
        type: 'uint256',
    },
    {
        name: 'group',
        type: 'uint256',
    },
    {
        name: 'expiry',
        type: 'uint256',
    },
];
exports.CommonSigningTypes = {
    Common: exports.EIP712_Common,
};
