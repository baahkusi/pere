"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP712_Domain = exports.DomainNameForType = exports.VerifyingContractForType = void 0;
const __1 = require("../..");
function VerifyingContractForType(chainId, verifierType) {
    return verifierType === 'core'
        ? __1.VerifierAddresses[chainId]
        : verifierType === 'collateralAccount'
            ? __1.AccountVerifierAddresses[chainId]
            : __1.OrderVerifierAddresses[chainId];
}
exports.VerifyingContractForType = VerifyingContractForType;
function DomainNameForType(verifierType) {
    return verifierType === 'core'
        ? 'Perennial'
        : verifierType === 'collateralAccount'
            ? 'Perennial V2 Collateral Accounts'
            : 'Perennial V2 Trigger Orders';
}
exports.DomainNameForType = DomainNameForType;
const EIP712_Domain = (chainId, verifierType) => {
    const verifyingContract = VerifyingContractForType(chainId, verifierType);
    return { name: DomainNameForType(verifierType), version: '1.0.0', chainId, verifyingContract };
};
exports.EIP712_Domain = EIP712_Domain;
