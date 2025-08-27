"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPlaceOrderSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const intentUtils_1 = require("../../../utils/intentUtils");
function buildPlaceOrderSigningPayload({ chainId, expiry, address: account, market: market_, side, comparison, price, delta, maxExecutionFee, maxRelayFee, referrer, interfaceFee, orderId, overrides, }) {
    const nonce = overrides?.nonce ?? (0, intentUtils_1.generateNonce)();
    const market = (0, addressUtils_1.addressForMarket)(chainId, market_);
    const message = {
        order: {
            side,
            comparison,
            price,
            delta,
            maxFee: maxExecutionFee,
            isSpent: false,
            referrer: referrer ?? account,
            interfaceFee: interfaceFee ?? {
                amount: 0n,
                receiver: account,
                fixedFee: false,
                unwrap: false,
            },
        },
        action: {
            market,
            orderId: orderId ?? (0, intentUtils_1.generateNonce)(),
            maxFee: maxRelayFee,
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
        types: eip712_1.PlaceOrderSigningTypes,
        primaryType: 'PlaceOrderAction',
        message,
    };
    return { placeOrder: payload };
}
exports.buildPlaceOrderSigningPayload = buildPlaceOrderSigningPayload;
