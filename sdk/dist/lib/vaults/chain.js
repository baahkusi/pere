"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchVaultPositionHistory = exports.fetchVaultSnapshots = void 0;
const viem_1 = require("viem");
const __1 = require("..");
const Lens_abi_1 = require("../../abi/Lens.abi");
const Vault_abi_1 = require("../../abi/Vault.abi");
const VaultLens_abi_1 = require("../../abi/VaultLens.abi");
const contracts_1 = require("../../constants/contracts");
const markets_1 = require("../../constants/markets");
const units_1 = require("../../constants/units");
const vaults_1 = require("../../constants/vaults");
const arrayUtils_1 = require("../../utils/arrayUtils");
const big6Utils_1 = require("../../utils/big6Utils");
const big18Utils_1 = require("../../utils/big18Utils");
const chain_1 = require("../markets/chain");
const oracle_1 = require("../oracle");
async function fetchVaultSnapshots({ chainId, publicClient, address = viem_1.zeroAddress, marketOracles, oracleClients, onError, onSuccess, }) {
    const vaults = (0, vaults_1.chainVaultsWithAddress)(chainId);
    if (!vaults) {
        return;
    }
    if (!marketOracles) {
        marketOracles = await (0, chain_1.fetchMarketOracles)(chainId, publicClient);
    }
    const snapshotData = await fetchVaultSnapshotsAfterSettle({
        chainId,
        address,
        marketOracles,
        publicClient,
        oracleClients: oracleClients,
        onOracleError: onError,
        resetOracleError: onSuccess,
    });
    const vaultSnapshots = snapshotData.vault.reduce((acc, vaultData) => {
        acc[vaultData.vaultType] = {
            ...vaultData,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            pre: snapshotData.vaultPre.find((pre) => pre.vaultType === vaultData.vaultType),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            markets: vaultData.registrations.map((r) => ({ weight: r.weight, market: (0, markets_1.addressToMarket)(chainId, r.market) })),
        };
        return acc;
    }, {});
    const userSnapshots = snapshotData.user.reduce((acc, vaultData) => {
        acc[vaultData.vaultType] = {
            ...vaultData,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            pre: snapshotData.userPre.find((pre) => pre.vaultType === vaultData.vaultType),
        };
        return acc;
    }, {});
    return {
        user: address === viem_1.zeroAddress ? undefined : userSnapshots,
        vault: vaultSnapshots,
        commitments: snapshotData.commitments,
        settles: snapshotData.settles,
        updates: snapshotData.updates,
    };
}
exports.fetchVaultSnapshots = fetchVaultSnapshots;
const fetchVaultSnapshotsAfterSettle = async ({ chainId, address, marketOracles, publicClient, oracleClients, onOracleError, resetOracleError, }) => {
    const vaults = (0, vaults_1.chainVaultsWithAddress)(chainId);
    const vaultLensAddress = (0, viem_1.getContractAddress)({ from: address, nonce: units_1.MaxUint256 - 1n });
    const lensAddress = (0, viem_1.getContractAddress)({ from: address, nonce: units_1.MaxUint256 });
    const priceCommitments = await (0, oracle_1.oracleCommitmentsLatest)({
        chainId,
        oracleClients: oracleClients,
        publicClient,
        requests: (0, oracle_1.marketOraclesToUpdateDataRequest)(Object.values(marketOracles)),
        onError: onOracleError,
        onSuccess: resetOracleError,
    });
    const vaultAddresses = vaults.map(({ vaultAddress }) => vaultAddress);
    const { result: lensRes } = await publicClient.simulateContract({
        address: vaultLensAddress,
        abi: VaultLens_abi_1.VaultLensAbi,
        functionName: 'snapshot',
        args: [priceCommitments, lensAddress, vaultAddresses, address, contracts_1.MultiInvokerAddresses[chainId]],
        account: address,
        stateOverride: [
            {
                address: lensAddress,
                code: Lens_abi_1.LensDeployedBytecode,
                balance: viem_1.maxUint256,
            },
            {
                address: vaultLensAddress,
                code: VaultLens_abi_1.VaultLensDeployedBytecode,
                balance: viem_1.maxUint256,
            },
            {
                // Give the vaultLensAddress some DSU to pay for settlement
                address: contracts_1.DSUAddresses[chainId],
                stateDiff: [
                    {
                        slot: (0, viem_1.keccak256)((0, viem_1.encodePacked)(['bytes32', 'bytes32'], [(0, viem_1.pad)(vaultLensAddress), (0, viem_1.pad)((0, viem_1.toHex)(1n))])),
                        value: (0, viem_1.pad)((0, viem_1.toHex)(big18Utils_1.Big18Math.fromFloatString('100000'))),
                    },
                ],
            },
        ],
    });
    return {
        commitments: lensRes.commitmentStatus,
        updates: lensRes.updateStatus,
        settles: lensRes.settleStatus,
        vault: lensRes.postUpdate.vaultSnapshots
            .map((s) => {
            const vaultType = vaults.find(({ vaultAddress }) => vaultAddress === (0, viem_1.getAddress)(s.vault));
            if (!vaultType)
                return;
            return {
                ...s,
                vaultType: vaultType.vault,
            };
        })
            .filter(arrayUtils_1.notEmpty),
        vaultPre: lensRes.preUpdate.vaultSnapshots
            .map((s) => {
            const vaultType = vaults.find(({ vaultAddress }) => vaultAddress === (0, viem_1.getAddress)(s.vault));
            if (!vaultType)
                return;
            return {
                ...s,
                vaultType: vaultType.vault,
            };
        })
            .filter(arrayUtils_1.notEmpty),
        user: lensRes.postUpdate.vaultAccountSnapshots
            .map((s) => {
            const vaultType = vaults.find(({ vaultAddress }) => vaultAddress === (0, viem_1.getAddress)(s.vault));
            if (!vaultType)
                return;
            return {
                ...s,
                vaultType: vaultType.vault,
            };
        })
            .filter(arrayUtils_1.notEmpty),
        userPre: lensRes.preUpdate.vaultAccountSnapshots
            .map((s) => {
            const vaultType = vaults.find(({ vaultAddress }) => vaultAddress === (0, viem_1.getAddress)(s.vault));
            if (!vaultType)
                return;
            return {
                ...s,
                vaultType: vaultType.vault,
            };
        })
            .filter(arrayUtils_1.notEmpty),
    };
};
async function fetchVaultPositionHistory({ chainId, address, publicClient, }) {
    const vaults = (0, vaults_1.chainVaultsWithAddress)(chainId);
    const getLogsArgs = { account: address };
    // TODO: migrate this to the graph when available
    const vaultPositionHistory = await Promise.all(vaults.map(async ({ vaultAddress, vault }) => {
        const vaultContract = (0, __1.getVaultContract)(vaultAddress, publicClient);
        const logs_ = await publicClient.getLogs({
            address: vaultAddress,
            args: getLogsArgs,
            fromBlock: 0n,
            toBlock: 'latest',
            strict: true,
            event: (0, viem_1.getAbiItem)({ abi: Vault_abi_1.VaultAbi, name: 'Updated' }),
        });
        const logs = logs_.sort((a, b) => big6Utils_1.Big6Math.cmp(b.args.version, a.args.version));
        const deposits = logs.filter((l) => l.args.depositAssets > 0n);
        const redeems = logs.filter((l) => l.args.redeemShares > 0n);
        const claims = logs.filter((l) => l.args.claimAssets > 0n);
        let currentPositionStartBlock = (logs.at(-1)?.blockNumber || 0n) - 1n;
        for (const claim of claims) {
            if (claim.blockNumber === null)
                continue;
            const accountData = await vaultContract.read.accounts([address], { blockNumber: claim.blockNumber });
            if (accountData.shares === 0n) {
                // If less than 100 wei, consider it a new starting block
                currentPositionStartBlock = claim.blockNumber;
                break;
            }
        }
        const currentPositionDeposits = (0, arrayUtils_1.sum)(deposits.filter((l) => (l.blockNumber ?? 0n) > currentPositionStartBlock).map((l) => l.args.depositAssets));
        const currentPositionClaims = (0, arrayUtils_1.sum)(claims.filter((l) => (l.blockNumber ?? 0n) > currentPositionStartBlock).map((l) => l.args.claimAssets));
        return {
            vault,
            vaultAddress,
            logs,
            deposits,
            redeems,
            claims,
            currentPositionDeposits,
            currentPositionClaims,
        };
    }));
    return vaultPositionHistory.reduce((acc, vaultData) => {
        acc[vaultData.vault] = vaultData;
        return acc;
    }, {});
}
exports.fetchVaultPositionHistory = fetchVaultPositionHistory;
