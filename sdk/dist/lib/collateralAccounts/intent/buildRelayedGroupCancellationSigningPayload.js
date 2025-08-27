"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedGroupCancellationSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildRelayedGroupCancellationSigningPayload({ chainId, address: account, groupToCancel, maxFee, overrides, expiry, }) {
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        groupCancellation: {
            group: groupToCancel,
            common: {
                ...action.common,
                domain: constants_1.VerifierAddresses[chainId],
            },
        },
        action,
    };
    const outerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RelayedGroupCancellationSigningTypes,
        primaryType: 'RelayedGroupCancellation',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.GroupCancellationSigningTypes,
        primaryType: 'GroupCancellation',
        message: message.groupCancellation,
    };
    return { relayedGroupCancellation: outerPayload, groupCancellation: innerPayload };
}
exports.buildRelayedGroupCancellationSigningPayload = buildRelayedGroupCancellationSigningPayload;
