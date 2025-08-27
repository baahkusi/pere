"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedOperatorUpdateSigningTypes = exports.EIP712_RelayedOperatorUpdate = void 0;
const accessUpdate_1 = require("../core/accessUpdate");
const operatorUpdate_1 = require("../core/operatorUpdate");
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedOperatorUpdate = [
    {
        name: 'operatorUpdate',
        type: 'OperatorUpdate',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedOperatorUpdateSigningTypes = {
    RelayedOperatorUpdate: exports.EIP712_RelayedOperatorUpdate,
    AccessUpdate: accessUpdate_1.EIP712_AccessUpdate,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
    OperatorUpdate: operatorUpdate_1.EIP712_OperatorUpdate,
};
