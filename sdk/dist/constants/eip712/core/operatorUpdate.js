"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorUpdateSigningTypes = exports.EIP712_OperatorUpdate = void 0;
const shared_1 = require("../shared");
const accessUpdate_1 = require("./accessUpdate");
exports.EIP712_OperatorUpdate = [
    {
        name: 'access',
        type: 'AccessUpdate',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.OperatorUpdateSigningTypes = {
    OperatorUpdate: exports.EIP712_OperatorUpdate,
    AccessUpdate: accessUpdate_1.EIP712_AccessUpdate,
    Common: shared_1.EIP712_Common,
};
