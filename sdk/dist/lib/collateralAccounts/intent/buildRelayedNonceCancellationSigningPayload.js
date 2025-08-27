"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedNonceCancellationSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildRelayedNonceCancellationSigningPayload({ chainId, address: account, nonceToCancel, maxFee, overrides, expiry, }) {
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        nonceCancellation: {
            ...action.common,
            nonce: nonceToCancel,
            domain: constants_1.VerifierAddresses[chainId],
        },
        action,
    };
    const outerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RelayedNonceCancellationSigningTypes,
        primaryType: 'RelayedNonceCancellation',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.CommonSigningTypes,
        primaryType: 'Common',
        message: message.nonceCancellation,
    };
    return { relayedNonceCancellation: outerPayload, nonceCancellation: innerPayload };
}
exports.buildRelayedNonceCancellationSigningPayload = buildRelayedNonceCancellationSigningPayload;
