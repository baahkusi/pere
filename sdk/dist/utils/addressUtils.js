"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressForMarket = exports.throwIfZeroAddress = void 0;
const viem_1 = require("viem");
const constants_1 = require("../constants");
function throwIfZeroAddress(address_) {
    const address = (0, viem_1.getAddress)(address_);
    if ((0, viem_1.isAddressEqual)(address, viem_1.zeroAddress))
        throw new Error('Address cannot be zero');
}
exports.throwIfZeroAddress = throwIfZeroAddress;
function addressForMarket(chainId, market) {
    const address = (0, viem_1.isAddress)(market, { strict: false }) ? market : constants_1.ChainMarkets[chainId][market];
    if (!(0, viem_1.isAddress)(address, { strict: false }))
        throw new Error('Invalid Market');
    return address;
}
exports.addressForMarket = addressForMarket;
