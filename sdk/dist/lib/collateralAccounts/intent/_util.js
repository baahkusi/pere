"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActionMessage = void 0;
const constants_1 = require("../../../constants");
const intentUtils_1 = require("../../../utils/intentUtils");
function buildActionMessage({ maxFee, overrides, expiry, account, chainId, }) {
    const nonce = overrides?.nonce ?? (0, intentUtils_1.generateNonce)();
    return {
        maxFee,
        common: {
            nonce,
            group: overrides?.group ?? nonce,
            account,
            signer: overrides?.signer ?? account,
            domain: constants_1.ControllerAddresses[chainId],
            expiry,
        },
    };
}
exports.buildActionMessage = buildActionMessage;
