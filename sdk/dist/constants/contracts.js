"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainlinkFactoryAddresses = exports.StorkFactoryAddresses = exports.CryptexFactoryAddresses = exports.PythFactoryAddresses = exports.USDCAddresses = exports.EmptysetReserveAddresses = exports.DSUAddresses = exports.OrderVerifierAddresses = exports.AccountVerifierAddresses = exports.ManagerAddresses = exports.ControllerAddresses = exports.VerifierAddresses = exports.OracleFactoryAddresses = exports.VaultFactoryAddresses = exports.MarketFactoryAddresses = exports.MultiInvokerAddresses = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const customChains_1 = require("./customChains");
exports.MultiInvokerAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x431603567EcBb4aa1Ce5a4fdBe5554cAEa658832'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x40652853a0e51D28F4eb0ca70b48E77B5dC8520E'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xB3DC5187B1Fb6F1b41852cFeBE06d370384110eF'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0xbcA65Ce3629167600d52492b61A97627305F4E0e'),
};
exports.MarketFactoryAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xDaD8A103473dfd47F90168A0E46766ed48e26EC7'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x247CeaE79E5C5778e00F449eDEC1d49c06f1Ede8'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xC27399bE9E39f7F6b1f94fBd512F5c2aD2b5eDb7'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0xFfB33F838096cF3C3c7dD21c1F941BB2705248E1'),
};
exports.VaultFactoryAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xad3565680aEcEe27A39249D8c2D55dAc79BE5Ad0'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x877682C7a8840D59A63a6227ED2Aeb20C3ae7FeB'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xAEf566ca7E84d1E736f999765a804687f39D9094'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0xD174C71aBB6De9d71F62eb666921C950c5a81853'),
};
exports.OracleFactoryAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x8CDa59615C993f925915D3eb4394BAdB3feEF413'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x9229E05f700b543b8056D35149991c1fe72fb846'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x49bCb3e1b0bA6A68EE1f1941EB56Ac7F46B67e09'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x5f2fc88cC29726D5643072Bf423338D69AE47053'),
};
exports.VerifierAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xF12a4ACDA6cA2e777b353538cb8e5ad6f05e0437'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x35c9C8c07B37899833eaed23a63E233A58a7E9Ef'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xfC20BccA96BDE758E9C69151d99cEcfEAE3AB37E'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x7AAF9184EE1299226d46fFEB36595Bb8D0EdF753'),
};
exports.ControllerAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x197dE1B26ad733380fD22159A2671f497A6DDd7C'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x708525e662738a1021E09F1C2D0A7bc2d2906250'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xe69FdDc2c8aDA6BE0ed02aE414f138B8edBC1D1c'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x07B891ae5E0eeAF7FB407552C28EAc785Ac8AF9C'),
};
exports.ManagerAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xbbF8A9D4961496FFE3F9c35F76106ec697Af2261'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x863e5bb7C7Ad31d6a7f24818e38ec0d0B293f722'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x2C19eac953048801FfE1358D109A1Ac2aF7930fD'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0xa9AF20277A894EC90BC4EB308eB0B077332DAcd8'),
};
exports.AccountVerifierAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x0E9D1dF540aCB30A321D3D3edd4996E0248aaf5C'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x176D7B19E2DBA90fdC9533C3d1B585135187bE8d'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xB5585A0cAac9f384A6Db545e89d0AC58215DBeFb'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x1cc0E7883DC01cCa0CC7A04b1Eb3e51C290645E7'),
};
exports.OrderVerifierAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x7C65ab8fc1f2d31c7144e148dd900Ea4EdC7EDd3'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0xd51b1A9c1F93185A26854976FD2DcCE4655B81F7'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x32F3aB7b3c5BBa0738b72FdB83FcE6bb1a1a943c'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x6b1C4978142A9BC9dD5777866AA8Ad610deD696c'),
};
exports.DSUAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x5FA881826AD000D010977645450292701bc2f56D'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x7b4Adf64B0d60fF97D672E473420203D52562A84'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b'),
};
exports.EmptysetReserveAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0x0d49c416103Cbd276d9c3cd96710dB264e3A0c27'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0x841d7C994aC0Bb17CcD65a021E686e3cFafE2118'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x0d49c416103Cbd276d9c3cd96710dB264e3A0c27'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x16b38364bA6f55B6E150cC7f52D22E89643f3535'),
};
exports.USDCAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xaf88d065e77c8cC2239327C5EDb3A432268e5831'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0xEd64A15A6223588794A976d344990001a065F3f1'),
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0x39CD9EF9E511ec008247aD5DA01245D84a9521be'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x37Fa204b282e46f54744660bf3dF48b43A554EbC'),
};
exports.PythFactoryAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xFeB35f293D2114DF6b284876dc8fbfcFfB873B7C'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0xB24D51487C5E8c83BD20330F0c765A91BDccB710'),
    [customChains_1.perennial.id]: viem_1.zeroAddress,
    [customChains_1.perennialSepolia.id]: viem_1.zeroAddress,
};
exports.CryptexFactoryAddresses = {
    [chains_1.arbitrum.id]: (0, viem_1.getAddress)('0xcB3B6A451Ca973F99BE29cC616bD9fD1D35ef048'),
    [chains_1.arbitrumSepolia.id]: (0, viem_1.getAddress)('0xBdf5dc8C77b468Ef3c54dC17222f5Cd2688BaaeD'),
    [customChains_1.perennial.id]: viem_1.zeroAddress,
    [customChains_1.perennialSepolia.id]: viem_1.zeroAddress,
};
exports.StorkFactoryAddresses = {
    [chains_1.arbitrum.id]: viem_1.zeroAddress,
    [chains_1.arbitrumSepolia.id]: viem_1.zeroAddress,
    [customChains_1.perennial.id]: (0, viem_1.getAddress)('0xfFE829F928Cb8C07961bfFF04512ac0749d65d27'),
    [customChains_1.perennialSepolia.id]: (0, viem_1.getAddress)('0x7A18A52EF9Ab4E2EDE9113ef13483eD18b395ca7'),
};
exports.ChainlinkFactoryAddresses = {
    [chains_1.arbitrum.id]: viem_1.zeroAddress,
    [chains_1.arbitrumSepolia.id]: viem_1.zeroAddress,
    [customChains_1.perennial.id]: viem_1.zeroAddress,
    [customChains_1.perennialSepolia.id]: viem_1.zeroAddress,
};
