"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedTakeSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const _util_1 = require("./_util");
function buildRelayedTakeSigningPayload({ chainId, address: account, amount, referrer, maxFee, overrides, expiry, market, }) {
    const marketAddress = (0, addressUtils_1.addressForMarket)(chainId, market);
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        take: {
            amount,
            referrer,
            common: {
                ...action.common,
                domain: marketAddress,
            },
        },
        action,
    };
    const outerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RelayedTakeSigningTypes,
        primaryType: 'RelayedTake',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.TakeSigningTypes,
        primaryType: 'Take',
        message: message.take,
    };
    return { relayedTake: outerPayload, take: innerPayload };
}
exports.buildRelayedTakeSigningPayload = buildRelayedTakeSigningPayload;
