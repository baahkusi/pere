"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedGroupCancellationSigningTypes = exports.EIP712_RelayedGroupCancellation = void 0;
const groupCancellation_1 = require("../core/groupCancellation");
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedGroupCancellation = [
    {
        name: 'groupCancellation',
        type: 'GroupCancellation',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedGroupCancellationSigningTypes = {
    RelayedGroupCancellation: exports.EIP712_RelayedGroupCancellation,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
    GroupCancellation: groupCancellation_1.EIP712_GroupCancellation,
};
