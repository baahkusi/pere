"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayedTakeSigningTypes = exports.EIP712_RelayedTake = void 0;
const take_1 = require("../core/take");
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RelayedTake = [
    {
        name: 'take',
        type: 'Take',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RelayedTakeSigningTypes = {
    RelayedTake: exports.EIP712_RelayedTake,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
    Take: take_1.EIP712_Take,
};
