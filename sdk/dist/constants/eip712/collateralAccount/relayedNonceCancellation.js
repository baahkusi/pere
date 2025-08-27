"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedNonceCancellationSigningTypes = exports.EIP712_RelayedNonceCancellation = void 0;
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedNonceCancellation = [
    {
        name: 'nonceCancellation',
        type: 'Common',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedNonceCancellationSigningTypes = {
    RelayedNonceCancellation: exports.EIP712_RelayedNonceCancellation,
    Common: common_1.EIP712_Common,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
};
