"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OraclesModule = exports.buildCommitPriceTx = exports.marketOraclesToUpdateDataRequest = exports.oracleCommitmentsTimestamp = exports.oracleCommitmentsLatest = exports.oracleProviderTypeForFactoryAddress = void 0;
const viem_1 = require("viem");
const constants_1 = require("../../constants");
const multiinvoker_1 = require("../../utils/multiinvoker");
const contracts_1 = require("../contracts");
const chain_1 = require("../markets/chain");
const cryptex_1 = require("./cryptex");
const pyth_1 = require("./pyth");
const stork_1 = require("./stork");
async function oracleProviderTypeForFactoryAddress({ chainId, publicClient, factory, }) {
    // Check hardcoded addresses first
    if (factory === constants_1.PythFactoryAddresses[chainId])
        return 'PythFactory';
    if (factory === constants_1.ChainlinkFactoryAddresses[chainId])
        return 'ChainlinkFactory';
    if (factory === constants_1.CryptexFactoryAddresses[chainId])
        return 'CryptexFactory';
    if (factory === constants_1.StorkFactoryAddresses[chainId])
        return 'StorkFactory';
    // Otherwise, try to read from the contract
    try {
        const oracleFactory = (0, contracts_1.getKeeperFactoryContract)(factory, publicClient);
        const type = await oracleFactory.read.factoryType();
        return type;
    }
    catch (err) {
        console.error(err);
    }
    return 'unknown';
}
exports.oracleProviderTypeForFactoryAddress = oracleProviderTypeForFactoryAddress;
async function oracleCommitmentsLatest({ chainId, oracleClients, requests, versionOverride, publicClient, onSuccess, onError, }) {
    try {
        // Group by factory
        const groupedRequests = requests.reduce((acc, req) => {
            if (!acc.has(req.factory))
                acc.set(req.factory, []);
            acc.get(req.factory)?.push(req);
            return acc;
        }, new Map());
        // Generate commitment(s) gor each factory grouping
        const commitmentPromises = Array.from(groupedRequests.entries()).map(async ([factory, reqs]) => {
            const providerType = await oracleProviderTypeForFactoryAddress({ chainId, publicClient, factory });
            if (providerType === 'PythFactory') {
                const pythResponse = await (0, pyth_1.buildCommitmentsForOracles)({
                    chainId,
                    publicClient,
                    pyth: oracleClients.pyth,
                    marketOracles: reqs.map((r) => ({
                        providerFactoryAddress: factory,
                        providerAddress: r.subOracle,
                        underlyingId: r.underlyingId,
                        providerId: r.id,
                        minValidTime: r.minValidTime,
                    })),
                });
                return pythResponse.map((res) => ({ ...res, keeperFactory: factory }));
            }
            if (providerType === 'CryptexFactory' && oracleClients.cryptex) {
                const cryptexResponse = await (0, cryptex_1.fetchPrices)({
                    url: oracleClients.cryptex,
                    feeds: reqs,
                });
                return [{ ...cryptexResponse, keeperFactory: factory }];
            }
            if (providerType === 'StorkFactory' && oracleClients.stork) {
                const storkResponse = await (0, stork_1.fetchPrices)({
                    url: oracleClients.stork.url,
                    apiKey: oracleClients.stork.apiKey,
                    feeds: reqs,
                });
                return [{ ...storkResponse, keeperFactory: factory }];
            }
            // if (providerType === 'chainlink')
            return [];
        });
        onSuccess?.();
        const commitments = (await Promise.all(commitmentPromises)).flat();
        // Override version if passed in
        return commitments.map((c) => ({ ...c, version: versionOverride ?? c.version }));
    }
    catch (err) {
        onError?.();
        throw err;
    }
}
exports.oracleCommitmentsLatest = oracleCommitmentsLatest;
async function oracleCommitmentsTimestamp({ chainId, oracleClients, requests, timestamp, versionOverride, publicClient, onSuccess, onError, }) {
    try {
        // Group by factory
        const groupedRequests = requests.reduce((acc, req) => {
            if (!acc.has(req.factory))
                acc.set(req.factory, []);
            acc.get(req.factory)?.push(req);
            return acc;
        }, new Map());
        // Generate commitment(s) gor each factory grouping
        const commitmentPromises = Array.from(groupedRequests.entries()).map(async ([factory, reqs]) => {
            const providerType = await oracleProviderTypeForFactoryAddress({ chainId, publicClient, factory });
            if (providerType === 'PythFactory') {
                const pythResponse = await (0, pyth_1.buildCommitmentsForOracles)({
                    chainId,
                    publicClient,
                    pyth: oracleClients.pyth,
                    timestamp,
                    marketOracles: reqs.map((r) => ({
                        providerFactoryAddress: factory,
                        providerAddress: r.subOracle,
                        underlyingId: r.underlyingId,
                        providerId: r.id,
                        minValidTime: r.minValidTime,
                        staleAfter: r.staleAfter,
                    })),
                });
                return pythResponse.map((res) => ({ ...res, keeperFactory: factory }));
            }
            if (providerType === 'CryptexFactory' && oracleClients.cryptex) {
                const cryptexResponse = await (0, cryptex_1.fetchPrices)({
                    url: oracleClients.cryptex,
                    timestamp,
                    feeds: reqs,
                });
                return [{ ...cryptexResponse, keeperFactory: factory }];
            }
            // if (providerType === 'chainlink')
            return [];
        });
        onSuccess?.();
        const commitments = (await Promise.all(commitmentPromises)).flat();
        // Override version if passed in
        return commitments.map((c) => ({ ...c, version: versionOverride ?? c.version }));
    }
    catch (err) {
        onError?.();
        throw err;
    }
}
exports.oracleCommitmentsTimestamp = oracleCommitmentsTimestamp;
function marketOraclesToUpdateDataRequest(marketOracles) {
    return marketOracles.map((marketOracle) => ({
        factory: marketOracle.subOracleFactoryAddress,
        subOracle: marketOracle.subOracleAddress,
        id: marketOracle.id,
        underlyingId: marketOracle.underlyingId,
        minValidTime: marketOracle.minValidTime,
        staleAfter: marketOracle.staleAfter,
    }));
}
exports.marketOraclesToUpdateDataRequest = marketOraclesToUpdateDataRequest;
function buildCommitPriceTx({ chainId, keeperFactory, address, value, ids, version, updateData, revertOnFailure = true, }) {
    const actions = [(0, multiinvoker_1.buildCommitPrice)({ keeperFactory, value, ids, version, vaa: updateData, revertOnFailure })];
    return (0, multiinvoker_1.encodeInvoke)({
        chainId,
        address,
        actions,
        value,
    });
}
exports.buildCommitPriceTx = buildCommitPriceTx;
class OraclesModule {
    constructor(config) {
        this.config = config;
        this.defaultAddress = viem_1.zeroAddress;
        this.defaultAddress = config.operatingFor ?? config.walletClient?.account?.address ?? this.defaultAddress;
    }
    get read() {
        return {
            oracleCommitmentsLatest: async (args = {}) => {
                return oracleCommitmentsLatest({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    requests: args.requests ??
                        marketOraclesToUpdateDataRequest(Object.values(await (0, chain_1.fetchMarketOracles)(this.config.chainId, this.config.publicClient, args.markets ?? this.config.supportedMarkets))),
                    ...args,
                });
            },
            oracleCommitmentsTimestamp: async (args) => {
                return oracleCommitmentsTimestamp({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    oracleClients: this.config.oracleClients,
                    requests: args.requests ??
                        marketOraclesToUpdateDataRequest(Object.values(await (0, chain_1.fetchMarketOracles)(this.config.chainId, this.config.publicClient, args.markets ?? this.config.supportedMarkets))),
                    ...args,
                });
            },
            oracleProviderForFactoryAddress: (args) => {
                return oracleProviderTypeForFactoryAddress({
                    chainId: this.config.chainId,
                    publicClient: this.config.publicClient,
                    ...args,
                });
            },
        };
    }
    get build() {
        return {
            commitPrice: (args) => {
                const address = args.address ?? this.defaultAddress;
                return buildCommitPriceTx({
                    chainId: this.config.chainId,
                    ...args,
                    address,
                });
            },
        };
    }
    get write() {
        const walletClient = this.config.walletClient;
        if (!walletClient || !walletClient.account) {
            throw new Error('Wallet client required for write methods.');
        }
        const { chainId } = this.config;
        const address = walletClient.account;
        const txOpts = { account: address, chainId, chain: constants_1.chainIdToChainMap[chainId] };
        return {
            commitPrice: async (...args) => {
                const tx = this.build.commitPrice(...args);
                const hash = await walletClient.sendTransaction({ ...tx, ...txOpts });
                return hash;
            },
        };
    }
}
exports.OraclesModule = OraclesModule;
