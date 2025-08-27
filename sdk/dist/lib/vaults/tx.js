"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClaimTx = exports.buildRedeemSharesTx = exports.buildDepositTx = void 0;
const viem_1 = require("viem");
const _1 = require(".");
const __1 = require("..");
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const multiinvoker_1 = require("../../utils/multiinvoker");
const chain_1 = require("../markets/chain");
const chain_2 = require("./chain");
function buildDepositTx(args) {
    const updateAction = (0, multiinvoker_1.buildUpdateVault)({
        vault: args.vaultAddress,
        deposit: args.amount,
        wrap: true,
    });
    return buildPerformVaultUpdateTx({
        ...args,
        baseAction: updateAction,
    });
}
exports.buildDepositTx = buildDepositTx;
async function buildRedeemSharesTx(args) {
    const vaultType = (0, constants_1.chainVaultsWithAddress)(args.chainId).find(({ vaultAddress: v }) => v === args.vaultAddress);
    if (!vaultType)
        throw new Error('Invalid Vault');
    const assets = args.assets ?? true;
    const max = args.max ?? false;
    let vaultAmount = max ? constants_1.MaxUint256 : args.amount;
    const vaultSnapshots = args.vaultSnapshots ??
        (await (0, chain_2.fetchVaultSnapshots)({
            ...args,
            address: viem_1.zeroAddress,
        }));
    const vaultSnapshot = vaultSnapshots?.vault[vaultType.vault];
    if (assets && !max && vaultSnapshot) {
        vaultAmount = convertAssetsToShares({ vaultSnapshot, assets: args.amount });
    }
    const updateAction = (0, multiinvoker_1.buildUpdateVault)({
        vault: args.vaultAddress,
        redeem: vaultAmount,
        wrap: true,
    });
    return buildPerformVaultUpdateTx({
        ...args,
        baseAction: updateAction,
        vaultSnapshots,
    });
}
exports.buildRedeemSharesTx = buildRedeemSharesTx;
function buildClaimTx(args) {
    const updateAction = (0, multiinvoker_1.buildUpdateVault)({
        vault: args.vaultAddress,
        claim: constants_1.MaxUint256,
        wrap: true,
    });
    return buildPerformVaultUpdateTx({
        ...args,
        baseAction: updateAction,
    });
}
exports.buildClaimTx = buildClaimTx;
const buildPerformVaultUpdateTx = async ({ chainId, publicClient, oracleClients, baseAction, vaultAddress, marketOracles, vaultSnapshots, address, }) => {
    const vaultType = (0, constants_1.chainVaultsWithAddress)(chainId).find(({ vaultAddress: v }) => v === vaultAddress);
    if (!vaultType)
        throw new Error('Invalid Vault');
    const multiInvoker = (0, __1.getMultiInvokerContract)(chainId, publicClient);
    if (!marketOracles) {
        marketOracles = await (0, chain_1.fetchMarketOracles)(chainId, publicClient);
    }
    if (!vaultSnapshots) {
        vaultSnapshots = await (0, chain_2.fetchVaultSnapshots)({
            chainId,
            address: viem_1.zeroAddress,
            publicClient,
            marketOracles,
            oracleClients,
        });
    }
    if (!vaultSnapshots)
        throw new Error('Unable to fetch Vault Snapshots');
    const vaultMarketSnapshot = vaultSnapshots.vault[vaultType.vault]?.pre.marketSnapshots;
    if (!vaultMarketSnapshot)
        throw new Error('Unable to fetch Vault Market Snapshots');
    const commitments = await (0, _1.fetchVaultCommitments)({
        chainId,
        oracleClients,
        marketOracles,
        publicClient,
        preMarketSnapshots: vaultMarketSnapshot,
    });
    const actions = commitments.length ? [...commitments.map((c) => c.commitAction), baseAction] : [baseAction];
    const data = (0, viem_1.encodeFunctionData)({
        abi: multiInvoker.abi,
        functionName: 'invoke',
        args: address ? [address, actions] : [actions],
    });
    return {
        to: multiInvoker.address,
        value: (0, utils_1.sum)(commitments.map((c) => c.value)),
        data,
    };
};
const convertAssetsToShares = ({ vaultSnapshot, assets }) => {
    const totalAssets = utils_1.Big6Math.max(vaultSnapshot.totalAssets, 0n);
    const totalShares = vaultSnapshot.totalShares;
    if (totalShares === 0n)
        return assets;
    return utils_1.Big6Math.div(utils_1.Big6Math.mul(assets, totalShares), totalAssets);
};
