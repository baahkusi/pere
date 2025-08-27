"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMarketTransferSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const _util_1 = require("./_util");
function buildMarketTransferSigningPayload({ chainId, address: account, maxFee, market: market_, amount, overrides, expiry, }) {
    const market = (0, addressUtils_1.addressForMarket)(chainId, market_);
    const message = {
        market,
        amount,
        action: (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId }),
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.MarketTransferSigningTypes,
        primaryType: 'MarketTransfer',
        message,
    };
    return { marketTransfer: payload };
}
exports.buildMarketTransferSigningPayload = buildMarketTransferSigningPayload;
