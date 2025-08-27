"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebalanceConfigChangeSigningTypes = exports.EIP712_RebalanceConfigChange = exports.EIP712_RebalanceConfig = void 0;
const common_1 = require("../shared/common");
const collateralAccountAction_1 = require("./collateralAccountAction");
exports.EIP712_RebalanceConfig = [
    {
        name: 'target',
        type: 'uint256',
    },
    {
        name: 'threshold',
        type: 'uint256',
    },
];
exports.EIP712_RebalanceConfigChange = [
    {
        name: 'group',
        type: 'uint256',
    },
    {
        name: 'markets',
        type: 'address[]',
    },
    {
        name: 'configs',
        type: 'RebalanceConfig[]',
    },
    {
        name: 'maxFee',
        type: 'uint256',
    },
    {
        name: 'action',
        type: 'Action',
    },
];
exports.RebalanceConfigChangeSigningTypes = {
    RebalanceConfigChange: exports.EIP712_RebalanceConfigChange,
    Action: collateralAccountAction_1.EIP712_CollateralAccountAction,
    Common: common_1.EIP712_Common,
    RebalanceConfig: exports.EIP712_RebalanceConfig,
};
