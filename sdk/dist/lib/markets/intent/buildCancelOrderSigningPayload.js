"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCancelOrderSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const intentUtils_1 = require("../../../utils/intentUtils");
function buildCancelOrderSigningPayload({ chainId, expiry, address: account, overrides, market: market_, orderId, maxFee, }) {
    const market = (0, addressUtils_1.addressForMarket)(chainId, market_);
    const nonce = overrides?.nonce ?? (0, intentUtils_1.generateNonce)();
    const message = {
        action: {
            market,
            orderId,
            maxFee,
            common: {
                nonce,
                group: overrides?.group ?? nonce,
                account,
                signer: overrides?.signer ?? account,
                domain: constants_1.ManagerAddresses[chainId],
                expiry,
            },
        },
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'orders'),
        types: eip712_1.CancelOrderSigningTypes,
        primaryType: 'CancelOrderAction',
        message,
    };
    return { cancelOrder: payload };
}
exports.buildCancelOrderSigningPayload = buildCancelOrderSigningPayload;
