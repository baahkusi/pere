"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWithdrawalSigningPayload = void 0;
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildWithdrawalSigningPayload({ chainId, address: account, amount, unwrap, maxFee, overrides, expiry, }) {
    const message = {
        amount,
        unwrap,
        action: (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId }),
    };
    const payload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.WithdrawalSigningTypes,
        primaryType: 'Withdrawal',
        message,
    };
    return { withdrawal: payload };
}
exports.buildWithdrawalSigningPayload = buildWithdrawalSigningPayload;
