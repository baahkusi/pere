"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRelayedAccessUpdateBatchSigningPayload = void 0;
const constants_1 = require("../../../constants");
const eip712_1 = require("../../../constants/eip712");
const _util_1 = require("./_util");
function buildRelayedAccessUpdateBatchSigningPayload({ chainId, address: account, signers, operators, maxFee, overrides, expiry, }) {
    const action = (0, _util_1.buildActionMessage)({ maxFee, overrides, expiry, account, chainId });
    const message = {
        accessUpdateBatch: {
            signers: signers.map(({ signer, approved }) => ({
                accessor: signer,
                approved,
            })),
            operators: operators.map(({ operator, approved }) => ({
                accessor: operator,
                approved,
            })),
            common: {
                ...action.common,
                domain: constants_1.MarketFactoryAddresses[chainId],
            },
        },
        action,
    };
    const outerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'collateralAccount'),
        types: eip712_1.RelayedAccessUpdateBatchSigningTypes,
        primaryType: 'RelayedAccessUpdateBatch',
        message,
    };
    const innerPayload = {
        domain: (0, eip712_1.EIP712_Domain)(chainId, 'core'),
        types: eip712_1.AccessUpdateBatchSigningTypes,
        primaryType: 'AccessUpdateBatch',
        message: message.accessUpdateBatch,
    };
    return { relayedAccessUpdateBatch: outerPayload, accessUpdateBatch: innerPayload };
}
exports.buildRelayedAccessUpdateBatchSigningPayload = buildRelayedAccessUpdateBatchSigningPayload;
