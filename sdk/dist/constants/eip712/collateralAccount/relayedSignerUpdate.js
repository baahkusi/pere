"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedSignerUpdateSigningTypes = exports.EIP712_RelayedSignerUpdate = void 0;
const accessUpdate_1 = require("../core/accessUpdate");
const signerUpdate_1 = require("../core/signerUpdate");
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedSignerUpdate = [
    {
        name: 'signerUpdate',
        type: 'SignerUpdate',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedSignerUpdateSigningTypes = {
    RelayedSignerUpdate: exports.EIP712_RelayedSignerUpdate,
    AccessUpdate: accessUpdate_1.EIP712_AccessUpdate,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
    SignerUpdate: signerUpdate_1.EIP712_SignerUpdate,
};
