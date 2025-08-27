"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedSignerUpdateSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildRelayedSignerUpdateSigningPayload({ chainId, address: account, signer, approved, maxFee, overrides, expiry, }) {
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        signerUpdate: {
            access: {
                accessor: signer,
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
        types: eip712_1.RelayedSignerUpdateSigningTypes,
        primaryType: 'RelayedSignerUpdate',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.SignerUpdateSigningTypes,
        primaryType: 'SignerUpdate',
        message: message.signerUpdate,
    };
    return { relayedSignerUpdate: outerPayload, signerUpdate: innerPayload };
}
exports.buildRelayedSignerUpdateSigningPayload = buildRelayedSignerUpdateSigningPayload;
