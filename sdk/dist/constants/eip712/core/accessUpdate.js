"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessUpdateBatchSigningTypes = exports.EIP712_AccessUpdateBatch = exports.AccessUpdateSigningTypes = exports.EIP712_AccessUpdate = void 0;
const shared_1 = require("../shared");
exports.EIP712_AccessUpdate = [
    {
        name: 'accessor',
        type: 'address',
    },
    {
        name: 'approved',
        type: 'bool',
    },
];
exports.AccessUpdateSigningTypes = {
    AccessUpdate: exports.EIP712_AccessUpdate,
};
exports.EIP712_AccessUpdateBatch = [
    {
        name: 'operators',
        type: 'AccessUpdate[]',
    },
    {
        name: 'signers',
        type: 'AccessUpdate[]',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.AccessUpdateBatchSigningTypes = {
    AccessUpdateBatch: exports.EIP712_AccessUpdateBatch,
    AccessUpdate: exports.EIP712_AccessUpdate,
    Common: shared_1.EIP712_Common,
};
