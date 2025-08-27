"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePerennialEvent = exports.parseViemContractCustomError = exports.bufferGasLimit = exports.getVaultAddressForType = void 0;
const viem_1 = require("viem");
const AllErrors_abi_1 = require("../abi/AllErrors.abi");
const AllEvents_abi_1 = require("../abi/AllEvents.abi");
const vaults_1 = require("../constants/vaults");
function getVaultAddressForType(vaultType, chainId) {
    switch (vaultType) {
        case 'alpha':
            return vaults_1.ChainVaults[chainId]?.alpha;
        case 'bravo':
            return vaults_1.ChainVaults[chainId]?.bravo;
    }
}
exports.getVaultAddressForType = getVaultAddressForType;
const bufferGasLimit = (estimatedGas) => (estimatedGas * 3n) / 2n;
exports.bufferGasLimit = bufferGasLimit;
function parseViemContractCustomError(err) {
    if (err instanceof viem_1.BaseError) {
        const revertError = err.walk((err) => err instanceof viem_1.ContractFunctionRevertedError);
        if (revertError instanceof viem_1.ContractFunctionRevertedError) {
            const errorName = revertError.data?.errorName;
            if (errorName)
                return errorName;
            if (revertError.signature) {
                const decodedData = (0, viem_1.decodeErrorResult)({ abi: AllErrors_abi_1.AllErrorsAbi, data: revertError.signature });
                return decodedData.errorName;
            }
        }
    }
}
exports.parseViemContractCustomError = parseViemContractCustomError;
function decodePerennialEvent(log) {
    try {
        const decoded = (0, viem_1.decodeEventLog)({ abi: AllEvents_abi_1.AllEventsAbi, data: log.data, topics: log.topics });
        return decoded;
    }
    catch {
        return null;
    }
}
exports.decodePerennialEvent = decodePerennialEvent;
