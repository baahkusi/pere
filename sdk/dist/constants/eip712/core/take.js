"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeSigningTypes = exports.EIP712_Take = void 0;
const shared_1 = require("../shared");
exports.EIP712_Take = [
    {
        name: 'amount',
        type: 'int256',
    },
    {
        name: 'referrer',
        type: 'address',
    },
    {
        name: 'common',
        type: 'Common',
    },
];
exports.TakeSigningTypes = {
    Take: exports.EIP712_Take,
    Common: shared_1.EIP712_Common,
};
