"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDeployAccountSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildDeployAccountSigningPayload({ chainId, address: account, maxFee, overrides, expiry, }) {
    const message = {
        action: (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId }),
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.DeployAccountSigningTypes,
        primaryType: 'DeployAccount',
        message,
    };
    return { deployAccount: payload };
}
exports.buildDeployAccountSigningPayload = buildDeployAccountSigningPayload;
