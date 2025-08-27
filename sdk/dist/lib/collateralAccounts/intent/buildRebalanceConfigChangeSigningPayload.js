"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRebalanceConfigChangeSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const addressUtils_1 = require("../../../utils/addressUtils");
const _util_1 = require("./_util");
function buildRebalanceConfigChangeSigningPayload({ chainId, address: account, group, markets: markets_, configs, rebalanceMaxFee, maxFee, overrides, expiry, }) {
    const markets = markets_.map((market) => (0, addressUtils_1.addressForMarket)(chainId, market));
    const message = {
        group,
        markets,
        configs,
        maxFee: rebalanceMaxFee,
        action: (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId }),
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RebalanceConfigChangeSigningTypes,
        primaryType: 'RebalanceConfigChange',
        message,
    };
    return { rebalanceConfigChange: payload };
}
exports.buildRebalanceConfigChangeSigningPayload = buildRebalanceConfigChangeSigningPayload;
