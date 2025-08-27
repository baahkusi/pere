"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildIntentSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const intentUtils_1 = require("../../../utils/intentUtils");
function buildIntentSigningPayload({ chainId, intent, address: account, market, expiry, overrides, }) {
    const nonce = overrides?.nonce ?? (0, intentUtils_1.generateNonce)();
    const marketAddress = (0, addressUtils_1.addressForMarket)(chainId, market);
    const message = {
        ...intent,
        common: {
            nonce,
            group: overrides?.group ?? nonce,
            account,
            signer: overrides?.signer ?? account,
            domain: marketAddress,
            expiry,
        },
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.IntentSigningTypes,
        primaryType: 'Intent',
        message,
    };
    return { intent: payload };
}
exports.buildIntentSigningPayload = buildIntentSigningPayload;
