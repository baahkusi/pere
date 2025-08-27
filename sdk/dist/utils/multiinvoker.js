"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMultiInvokerTxs = exports.encodeInvoke = exports.EmptyInterfaceFee = exports.buildClaimFee = exports.buildUpdateIntent = exports.buildApproveTarget = exports.buildLiquidate = exports.buildCommitPrice = exports.buildCancelOrder = exports.buildPlaceTriggerOrder = exports.buildUpdateVault = exports.buildUpdateMarket = exports.buildNoop = void 0;
const viem_1 = require("viem");
const MultiInvoker_abi_1 = require("../abi/MultiInvoker.abi");
const constants_1 = require("../constants");
const eip712_1 = require("../constants/eip712");
const positionUtils_1 = require("./positionUtils");
const buildNoop = () => ({
    action: 0,
    args: '0x',
});
exports.buildNoop = buildNoop;
const buildUpdateMarket = ({ market, maker, long, short, collateral, wrap, interfaceFee, interfaceFee2, }) => ({
    action: 1,
    args: (0, viem_1.encodeAbiParameters)([
        { type: 'address' },
        { type: 'uint256' },
        { type: 'uint256' },
        { type: 'uint256' },
        { type: 'int256' },
        { type: 'bool' },
        {
            type: 'tuple',
            name: 'interfaceFee1',
            components: [
                {
                    internalType: 'UFixed6',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                },
                {
                    internalType: 'bool',
                    name: 'unwrap',
                    type: 'bool',
                },
            ],
        },
        {
            type: 'tuple',
            name: 'interfaceFee2',
            components: [
                {
                    internalType: 'UFixed6',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                },
                {
                    internalType: 'bool',
                    name: 'unwrap',
                    type: 'bool',
                },
            ],
        },
    ], [
        market,
        maker ?? positionUtils_1.UpdateNoOp,
        long ?? positionUtils_1.UpdateNoOp,
        short ?? positionUtils_1.UpdateNoOp,
        collateral ?? 0n,
        !!wrap,
        interfaceFee ?? exports.EmptyInterfaceFee,
        interfaceFee2 ?? exports.EmptyInterfaceFee,
    ]),
});
exports.buildUpdateMarket = buildUpdateMarket;
const buildUpdateVault = ({ vault, deposit, redeem, claim, wrap, }) => ({
    action: 2,
    args: (0, viem_1.encodeAbiParameters)(['address', 'uint256', 'uint256', 'uint256', 'bool'].map((type) => ({ type })), [vault, deposit ?? 0n, redeem ?? 0n, claim ?? 0n, wrap]),
});
exports.buildUpdateVault = buildUpdateVault;
const PlaceTriggerOrderInputs = [
    {
        internalType: 'IMarket',
        name: 'market',
        type: 'address',
    },
    {
        type: 'tuple',
        components: [
            {
                internalType: 'uint8',
                name: 'side',
                type: 'uint8',
            },
            {
                internalType: 'int8',
                name: 'comparison',
                type: 'int8',
            },
            {
                internalType: 'UFixed6',
                name: 'fee',
                type: 'uint256',
            },
            {
                internalType: 'Fixed6',
                name: 'price',
                type: 'int256',
            },
            {
                internalType: 'Fixed6',
                name: 'delta',
                type: 'int256',
            },
            {
                type: 'tuple',
                name: 'interfaceFee1',
                components: [
                    {
                        internalType: 'UFixed6',
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'receiver',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'unwrap',
                        type: 'bool',
                    },
                ],
            },
            {
                type: 'tuple',
                name: 'interfaceFee2',
                components: [
                    {
                        internalType: 'UFixed6',
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'receiver',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'unwrap',
                        type: 'bool',
                    },
                ],
            },
        ],
    },
];
const buildPlaceTriggerOrder = ({ market, side, comparison, maxFee, triggerPrice, delta, interfaceFee, interfaceFee2, }) => ({
    action: 3,
    args: (0, viem_1.encodeAbiParameters)(PlaceTriggerOrderInputs, [
        market,
        {
            side: side === 'long' ? 1 : 2,
            comparison: comparison === 'lte' ? -1 : 1,
            fee: maxFee,
            price: triggerPrice,
            delta,
            interfaceFee1: interfaceFee ?? exports.EmptyInterfaceFee,
            interfaceFee2: interfaceFee2 ?? exports.EmptyInterfaceFee,
        },
    ]),
});
exports.buildPlaceTriggerOrder = buildPlaceTriggerOrder;
const buildCancelOrder = ({ market, nonce }) => ({
    action: 4,
    args: (0, viem_1.encodeAbiParameters)(['address', 'uint256'].map((type) => ({ type })), [market, nonce]),
});
exports.buildCancelOrder = buildCancelOrder;
const buildCommitPrice = ({ keeperFactory, version, value, ids, vaa, revertOnFailure, }) => ({
    action: 6,
    args: (0, viem_1.encodeAbiParameters)(['address', 'uint256', 'bytes32[]', 'uint256', 'bytes', 'bool'].map((type) => ({ type })), [keeperFactory, value, ids, version, vaa, revertOnFailure]),
});
exports.buildCommitPrice = buildCommitPrice;
const buildLiquidate = ({ market, user }) => ({
    action: 7,
    args: (0, viem_1.encodeAbiParameters)(['address', 'address'].map((type) => ({ type })), [market, user]),
});
exports.buildLiquidate = buildLiquidate;
const buildApproveTarget = ({ target }) => ({
    action: 8,
    args: (0, viem_1.encodeAbiParameters)(['address'].map((type) => ({ type })), [target]),
});
exports.buildApproveTarget = buildApproveTarget;
const UpdateIntentInputs = [
    {
        type: 'address',
    },
    {
        type: 'tuple',
        components: [
            {
                name: 'amount',
                type: 'int256',
            },
            {
                name: 'price',
                type: 'int256',
            },
            {
                name: 'fee',
                type: 'uint256',
            },
            {
                name: 'originator',
                type: 'address',
            },
            {
                name: 'solver',
                type: 'address',
            },
            {
                name: 'collateralization',
                type: 'uint256',
            },
            {
                name: 'common',
                type: 'tuple',
                components: eip712_1.EIP712_Common,
            },
        ],
    },
    {
        type: 'bytes',
    },
];
const buildUpdateIntent = ({ market, intent, signature, }) => ({
    action: 9,
    args: (0, viem_1.encodeAbiParameters)(UpdateIntentInputs, [market, intent, signature]),
});
exports.buildUpdateIntent = buildUpdateIntent;
const buildClaimFee = ({ market, unwrap }) => ({
    action: 10,
    args: (0, viem_1.encodeAbiParameters)([{ type: 'address' }, { type: 'bool' }], [market, unwrap]),
});
exports.buildClaimFee = buildClaimFee;
exports.EmptyInterfaceFee = { amount: 0n, receiver: viem_1.zeroAddress, unwrap: false };
/**
 * Encodes a MultiInvoker invoke transaction
 * @param chainId - Chain ID
 * @param actions - MultiInvoker actions
 * @param address - Address to invoke from
 * @returns Transaction data object - { data: Hex, value: bigint, to: Address }
 */
const encodeInvoke = ({ chainId, actions, address, value, }) => {
    const data = (0, viem_1.encodeFunctionData)({
        functionName: 'invoke',
        abi: MultiInvoker_abi_1.MultiInvokerAbi,
        args: address && address !== viem_1.zeroAddress ? [address, actions] : [actions],
    });
    return {
        to: constants_1.MultiInvokerAddresses[chainId],
        data,
        value,
    };
};
exports.encodeInvoke = encodeInvoke;
/**
 * Combines the transaction data from multiple MultiInvoker transactions into a single transaction
 * @param transactionData - Array of transaction data to merge
 * @returns Transaction data object - { data: Hex, value: bigint, to: Address }
 */
const mergeMultiInvokerTxs = (transactionData) => {
    if (transactionData.length === 0) {
        throw new Error('No transaction data provided');
    }
    if (transactionData.some((d) => d.to !== transactionData[0].to)) {
        throw new Error('All transaction data must have the same "to" address');
    }
    let delegate = null;
    const actions = transactionData.flatMap(({ data }) => {
        const { functionName, args } = (0, viem_1.decodeFunctionData)({
            abi: MultiInvoker_abi_1.MultiInvokerAbi,
            data,
        });
        if (functionName !== 'invoke')
            throw new Error('Invalid data');
        const [firstArg, secondArg] = args;
        // If first argument is an array, then this is the non-delegated invoke
        if (Array.isArray(firstArg)) {
            // If this is non-delegated invoke and there was a previous delegated invoke, throw an error
            if (delegate)
                throw new Error('All transactions must have the same delegate');
            return firstArg;
        }
        // secondArg should always exist
        if (!secondArg)
            throw new Error('Invalid data');
        if (!delegate)
            delegate = firstArg;
        if (firstArg !== delegate)
            throw new Error('All transactions must have the same delegate');
        return secondArg;
    });
    const data = (0, viem_1.encodeFunctionData)({
        functionName: 'invoke',
        abi: MultiInvoker_abi_1.MultiInvokerAbi,
        args: delegate ? [delegate, actions] : [actions],
    });
    return {
        data,
        value: transactionData.reduce((acc, { value }) => acc + value, 0n),
        to: transactionData[0].to,
    };
};
exports.mergeMultiInvokerTxs = mergeMultiInvokerTxs;
