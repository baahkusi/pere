"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedOperatorUpdateSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildRelayedOperatorUpdateSigningPayload({ chainId, address: account, operator, approved, maxFee, overrides, expiry, }) {
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        operatorUpdate: {
            access: {
                accessor: operator,
                approved,
            },
            common: {
                ...action.common,
                domain: constants_1.MarketFactoryAddresses[chainId],
            },
        },
        action,
    };
    const outerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RelayedOperatorUpdateSigningTypes,
        primaryType: 'RelayedOperatorUpdate',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.OperatorUpdateSigningTypes,
        primaryType: 'OperatorUpdate',
        message: message.operatorUpdate,
    };
    return { relayedOperatorUpdate: outerPayload, operatorUpdate: innerPayload };
}
exports.buildRelayedOperatorUpdateSigningPayload = buildRelayedOperatorUpdateSigningPayload;
