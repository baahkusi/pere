"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignerUpdateSigningTypes = exports.EIP712_SignerUpdate = void 0;
const core_1 = require("../core");
const shared_1 = require("../shared");
exports.EIP712_SignerUpdate = [
    {
        name: 'access',
        type: 'AccessUpdate',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.SignerUpdateSigningTypes = {
    SignerUpdate: exports.EIP712_SignerUpdate,
    AccessUpdate: core_1.EIP712_AccessUpdate,
    Common: shared_1.EIP712_Common,
};
