"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIntentFillable = exports.IntentSimulationSender = exports.addSignerOverrideFromWalletClientSigner = exports.generateNonce = void 0;
const crypto_1 = require("crypto");
const viem_1 = require("viem");
const __1 = require("..");
const constants_1 = require("../constants");
const addressUtils_1 = require("./addressUtils");
const multiinvoker_1 = require("./multiinvoker");
function generateNonce(bytes = 32) {
    return BigInt(`0x${(0, crypto_1.randomBytes)(bytes).toString('hex')}`);
}
exports.generateNonce = generateNonce;
/**
 * Adds a signer override to the overrides object if the signer is not already set.
 * @param walletClientSigner - The address of the wallet client signer.
 * @param overrides - The {@link CommonOverrides} object.
 * @returns The updated overrides object.
 */
function addSignerOverrideFromWalletClientSigner({ walletClientSigner, overrides, }) {
    return Boolean(overrides?.signer) ? overrides : { ...overrides, signer: walletClientSigner };
}
exports.addSignerOverrideFromWalletClientSigner = addSignerOverrideFromWalletClientSigner;
/**
 * The address used to simulate intent updates.
 */
exports.IntentSimulationSender = (0, viem_1.getContractAddress)({ from: viem_1.zeroAddress, nonce: viem_1.maxUint256 });
/**
 * Checks if an intent is fillable by simulating the intent update on the market.
 * @param txData - The transaction data to be sent.
 * @param market - The address or {@link SupportedMarket} of the market.
 * @param publicClient - The public client to be used for the simulation.
 * @param chainId - The chain ID to be used for the simulation.
 * @returns An object with a boolean indicating if the intent is fillable and an optional error string.
 */
async function checkIntentFillable({ txData, market, chainId, publicClient, }) {
    const marketAddress = (0, addressUtils_1.addressForMarket)(chainId, market);
    const multiInvokerUpdate = (0, multiinvoker_1.buildUpdateMarket)({
        market: marketAddress,
        collateral: __1.Big6Math.fromFloatString(_simulationCollateralAmount),
        wrap: false,
    });
    const txDataWithDeposit = (0, multiinvoker_1.mergeMultiInvokerTxs)([
        (0, multiinvoker_1.encodeInvoke)({ chainId, actions: [multiInvokerUpdate], value: 0n }),
        txData,
    ]);
    try {
        const { functionName, args } = (0, viem_1.decodeFunctionData)({
            abi: __1.MultiInvokerAbi,
            data: txDataWithDeposit.data,
        });
        if (functionName !== 'invoke')
            return { fillable: false, error: 'Invalid data' };
        await publicClient.simulateContract({
            address: txDataWithDeposit.to,
            value: txDataWithDeposit.value,
            abi: __1.MultiInvokerAbi,
            functionName: 'invoke',
            args: args.length === 2 ? [args[0], args[1]] : [args[0]],
            account: exports.IntentSimulationSender,
            stateOverride: _intentUpdateStateOverrides(chainId),
        });
    }
    catch (error) {
        return { fillable: false, error: (0, __1.parseViemContractCustomError)(error) };
    }
    return { fillable: true };
}
exports.checkIntentFillable = checkIntentFillable;
// Simulation constants
const _simulationCollateralAmount = (1_000_000_000).toString();
const _intentUpdateStateOverrides = (chainId) => [
    {
        // Give Sender some ETH to pay for gas
        address: exports.IntentSimulationSender,
        balance: (0, viem_1.parseEther)('1'),
    },
    {
        // Give Sender DSU and update allowance
        address: constants_1.DSUAddresses[chainId],
        stateDiff: [
            {
                slot: (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([{ type: 'address' }, { type: 'uint256' }], [exports.IntentSimulationSender, 1n])),
                value: (0, viem_1.pad)((0, viem_1.toHex)(__1.Big18Math.fromFloatString(_simulationCollateralAmount))),
            },
            {
                slot: (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([{ type: 'address' }, { type: 'bytes32' }], [
                    constants_1.MultiInvokerAddresses[chainId],
                    (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([{ type: 'address' }, { type: 'uint256' }], [exports.IntentSimulationSender, 2n])),
                ])),
                value: (0, viem_1.pad)((0, viem_1.toHex)(__1.Big18Math.fromFloatString(_simulationCollateralAmount))),
            },
        ],
    },
];
