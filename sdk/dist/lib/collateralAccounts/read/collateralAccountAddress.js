"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCollateralAccountAddress = void 0;
const contracts_1 = require("../../contracts");
function readCollateralAccountAddress({ chainId, publicClient, address: owner, }) {
    const controller = (0, contracts_1.getControllerContract)(chainId, publicClient);
    return controller.read.getAccountAddress([owner]);
}
exports.readCollateralAccountAddress = readCollateralAccountAddress;
