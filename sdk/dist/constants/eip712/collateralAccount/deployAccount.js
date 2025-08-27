"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployAccountSigningTypes = exports.EIP712_DeployAccount = void 0;
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_DeployAccount = [
    {
        name: 'action',
        type: 'Action',
    },
];
exports.DeployAccountSigningTypes = {
    DeployAccount: exports.EIP712_DeployAccount,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
};
