"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupCancellationSigningTypes = exports.EIP712_GroupCancellation = void 0;
const shared_1 = require("../shared");
exports.EIP712_GroupCancellation = [
    {
        name: 'group',
        type: 'uint256',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.GroupCancellationSigningTypes = {
    GroupCancellation: exports.EIP712_GroupCancellation,
    Common: shared_1.EIP712_Common,
};
