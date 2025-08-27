"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hermes_client_1 = require("@pythnetwork/hermes-client");
const graphql_request_1 = require("graphql-request");
const viem_1 = require("viem");
const __1 = require("..");
const network_1 = require("../constants/network");
const collateralAccounts_1 = require("../lib/collateralAccounts");
const contracts_1 = require("../lib/contracts");
const markets_1 = require("../lib/markets");
const operators_1 = require("../lib/operators");
const oracle_1 = require("../lib/oracle");
const vaults_1 = require("../lib/vaults");
/**
 * Perennial SDK class
 *
 * @param config SDK configuration
 * @param config.rpcUrl Rpc URL
 * @param config.walletClient Wallet Client
 * @param config.chainId {@link SupportedChainId}
 * @param config.graphUrl SubGraph URL
 * @param config.pythUrl Pyth URL
 * @param config.operatingFor If set, the SDK will read data and send multi-invoker transactions on behalf of this address.
 * @param config.supportedMarkets Subset of availalbe markets to support.
 *
 * @returns Perennial SDK instance
 *
 * @beta
 */
class PerennialSDK {
    constructor(config) {
        this._currentChainId = network_1.DefaultChain.id;
        this.config = {
            ...config,
            supportedMarkets: config.supportedMarkets && config.supportedMarkets.length
                ? config.supportedMarkets
                : Object.keys(__1.ChainMarkets[config.chainId]),
        };
        this._publicClient = (0, viem_1.createPublicClient)({
            chain: network_1.chainIdToChainMap[config.chainId],
            transport: (0, viem_1.http)(config.rpcUrl),
            batch: {
                multicall: true,
            },
            ...config.publicClientOpts,
        });
        this._oracleClients = {
            pyth: this.buildPythClients(config.pythUrl),
            cryptex: config.cryptexUrl,
            stork: config.storkConfig
                ? {
                    url: config.storkConfig.url,
                    apiKey: config.storkConfig.apiKey,
                }
                : undefined,
        };
        this._graphClient = config.graphUrl ? new graphql_request_1.GraphQLClient(config.graphUrl) : undefined;
        this.contracts = new contracts_1.ContractsModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            signer: config.walletClient,
        });
        this.markets = new markets_1.MarketsModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            walletClient: config.walletClient,
            graphClient: this._graphClient,
            oracleClients: this._oracleClients,
            operatingFor: this.config.operatingFor,
            supportedMarkets: this.config.supportedMarkets,
        });
        this.vaults = new vaults_1.VaultsModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            walletClient: config.walletClient,
            graphClient: this._graphClient,
            oracleClients: this._oracleClients,
            operatingFor: this.config.operatingFor,
        });
        this.operator = new operators_1.OperatorModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            walletClient: config.walletClient,
            operatingFor: this.config.operatingFor,
        });
        this.oracles = new oracle_1.OraclesModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            oracleClients: this._oracleClients,
            supportedMarkets: this.config.supportedMarkets,
            operatingFor: this.config.operatingFor,
            walletClient: config.walletClient,
        });
        this.collateralAccounts = new collateralAccounts_1.CollateralAccountModule({
            chainId: config.chainId,
            publicClient: this._publicClient,
            walletClient: config.walletClient,
            operatingFor: this.config.operatingFor,
        });
        this._walletClient = config.walletClient;
        this._currentChainId = config.chainId;
    }
    get currentChainId() {
        return this._currentChainId;
    }
    get rpcProviderUrl() {
        return this.config.rpcUrl;
    }
    get walletClient() {
        return this._walletClient;
    }
    get publicClient() {
        return this._publicClient;
    }
    get graphClient() {
        if (!this._graphClient)
            throw new Error('Graph client not initialized');
        return this._graphClient;
    }
    get oracleClients() {
        return this._oracleClients;
    }
    get supportedMarkets() {
        return this.config.supportedMarkets;
    }
    buildPythClients(urls_) {
        const urls = Array.isArray(urls_) ? urls_ : [urls_];
        return [
            ...urls.map((url_) => {
                const url = new URL(url_);
                const headers = {};
                if (url.username && url.password) {
                    headers.Authorization = `Basic ${Buffer.from(`${url.username}:${url.password}`).toString('base64')}`;
                    url.username = '';
                    url.password = '';
                }
                return new hermes_client_1.HermesClient(url.toString(), {
                    timeout: 30000,
                    headers,
                });
            }),
            network_1.BackupPythClient,
        ];
    }
}
exports.default = PerennialSDK;
