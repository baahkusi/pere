"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedAccessUpdateBatchSigningTypes = exports.EIP712_RelayedAccessUpdateBatch = void 0;
const accessUpdate_1 = require("../core/accessUpdate");
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedAccessUpdateBatch = [
    {
        name: 'accessUpdateBatch',
        type: 'AccessUpdateBatch',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedAccessUpdateBatchSigningTypes = {
    RelayedAccessUpdateBatch: exports.EIP712_RelayedAccessUpdateBatch,
    AccessUpdate: accessUpdate_1.EIP712_AccessUpdate,
    AccessUpdateBatch: accessUpdate_1.EIP712_AccessUpdateBatch,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
};
