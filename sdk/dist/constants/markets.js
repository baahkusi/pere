"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentTriggerOrderFullCloseMagicValue = exports.TriggerOrderFullCloseMagicValue = exports.OrderExecutionDeposit = exports.triggerOrderTypes = exports.orderTypes = exports.OrderTypes = exports.TriggerComparison = exports.addressToMarket = exports.chainMarketsWithAddress = exports.ChainMarkets = exports.MarketMetadata = exports.PositionStatus = exports.PositionSide = exports.QuoteCurrency = exports.SupportedMarket = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const utils_1 = require("../utils");
const arrayUtils_1 = require("../utils/arrayUtils");
const payoffUtils_1 = require("../utils/payoffUtils");
const customChains_1 = require("./customChains");
var SupportedMarket;
(function (SupportedMarket) {
    SupportedMarket["btc"] = "btc";
    SupportedMarket["eth"] = "eth";
    SupportedMarket["arb"] = "arb";
    SupportedMarket["sol"] = "sol";
    SupportedMarket["pol"] = "pol";
    SupportedMarket["tia"] = "tia";
    SupportedMarket["rlb"] = "rlb";
    SupportedMarket["link"] = "link";
    SupportedMarket["bnb"] = "bnb";
    SupportedMarket["xrp"] = "xrp";
    SupportedMarket["msqBTC"] = "btc\u00B2";
    SupportedMarket["cmsqETH"] = "eth\u00B2";
    SupportedMarket["jup"] = "jup";
    SupportedMarket["xau"] = "xau";
    SupportedMarket["mog"] = "mog";
    SupportedMarket["jpy"] = "jpy";
    SupportedMarket["mkr"] = "mkr";
    SupportedMarket["doge"] = "doge";
    SupportedMarket["eur"] = "eur";
    SupportedMarket["gbp"] = "gbp";
    SupportedMarket["meem"] = "meem";
    SupportedMarket["aero"] = "aero";
    SupportedMarket["popcat"] = "popcat";
    SupportedMarket["unknown"] = "unknown";
})(SupportedMarket || (exports.SupportedMarket = SupportedMarket = {}));
var QuoteCurrency;
(function (QuoteCurrency) {
    QuoteCurrency["usd"] = "USDC";
})(QuoteCurrency || (exports.QuoteCurrency = QuoteCurrency = {}));
var PositionSide;
(function (PositionSide) {
    PositionSide["maker"] = "maker";
    PositionSide["long"] = "long";
    PositionSide["short"] = "short";
    PositionSide["none"] = "none";
})(PositionSide || (exports.PositionSide = PositionSide = {}));
var PositionStatus;
(function (PositionStatus) {
    PositionStatus["open"] = "open";
    PositionStatus["closed"] = "closed";
    PositionStatus["opening"] = "opening";
    PositionStatus["closing"] = "closing";
    PositionStatus["pricing"] = "pricing";
    PositionStatus["resolved"] = "noValue";
    PositionStatus["failed"] = "failed";
    PositionStatus["syncError"] = "syncError";
    PositionStatus["notMargined"] = "notMargined";
})(PositionStatus || (exports.PositionStatus = PositionStatus = {}));
exports.MarketMetadata = {
    [SupportedMarket.btc]: {
        symbol: 'BTC-USD',
        name: 'Bitcoin',
        baseCurrency: SupportedMarket.btc,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.eth]: {
        symbol: 'ETH-USD',
        name: 'Ethereum',
        baseCurrency: SupportedMarket.eth,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.arb]: {
        symbol: 'ARB-USD',
        name: 'Arbitrum',
        baseCurrency: SupportedMarket.arb,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.sol]: {
        symbol: 'SOL-USD',
        name: 'Solana',
        baseCurrency: SupportedMarket.sol,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.pol]: {
        symbol: 'POL-USD',
        name: 'Polygon Ecosystem Token',
        baseCurrency: SupportedMarket.pol,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.tia]: {
        symbol: 'TIA-USD',
        name: 'Celestia',
        baseCurrency: SupportedMarket.tia,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x09f7c1d7dfbb7df2b8fe3d3d87ee94a2259d212da4f30c1f0540d066dfa44723',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.rlb]: {
        symbol: 'RLB-USD',
        name: 'Rollbit',
        baseCurrency: SupportedMarket.rlb,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x2f2d17abbc1e781bd87b4a5d52c8b2856886f5c482fa3593cebf6795040ab0b6',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.link]: {
        symbol: 'LINK-USD',
        name: 'Chainlink',
        baseCurrency: SupportedMarket.link,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.bnb]: {
        symbol: 'BNB-USD',
        name: 'BNB',
        baseCurrency: SupportedMarket.bnb,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.xrp]: {
        symbol: 'XRP-USD',
        name: 'XRP',
        baseCurrency: SupportedMarket.xrp,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.msqBTC]: {
        symbol: 'BTC²-USD',
        name: 'Bitcoin²',
        baseCurrency: SupportedMarket.msqBTC,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x403d2f23c2015aee67e9311896907cc05c139b2c771a92ae48a2c0e50e6883a4',
        transform: payoffUtils_1.microPowerTwoTransform,
        untransform: payoffUtils_1.microPowerTwoUntransform,
    },
    [SupportedMarket.cmsqETH]: {
        symbol: 'ETH²-USD',
        name: 'Ethereum²',
        baseCurrency: SupportedMarket.cmsqETH,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x002aa13b58df1c483e925045e9a580506812ed5bc85c188d3d8b501501294ad4',
        transform: payoffUtils_1.centimilliPowerTwoTransform,
        untransform: payoffUtils_1.centimilliPowerTwoUntransform,
    },
    [SupportedMarket.jup]: {
        symbol: 'JUP-USD',
        name: 'Jupiter',
        baseCurrency: SupportedMarket.jup,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.xau]: {
        symbol: 'XAU-USD',
        name: 'Gold',
        baseCurrency: SupportedMarket.xau,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.mog]: {
        symbol: 'MOG-USD',
        name: 'Mog Coin',
        baseCurrency: SupportedMarket.mog,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x17894b9fff49cd07efeab94a0d02db16f158efe04e0dee1db6af5f069082ce83',
        transform: (0, payoffUtils_1.decimalTransform)(6n),
        untransform: (0, payoffUtils_1.decimalUntransform)(6n),
    },
    [SupportedMarket.jpy]: {
        symbol: 'JPY-USD',
        name: 'Japanese Yen',
        baseCurrency: SupportedMarket.jpy,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52',
        transform: (0, payoffUtils_1.inverseTransform)(3n),
        untransform: (0, payoffUtils_1.inverseUntransform)(3n),
    },
    [SupportedMarket.mkr]: {
        symbol: 'MKR-USD',
        name: 'Maker',
        baseCurrency: SupportedMarket.mkr,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x9375299e31c0deb9c6bc378e6329aab44cb48ec655552a70d4b9050346a30378',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.doge]: {
        symbol: 'DOGE-USD',
        name: 'Dogecoin',
        baseCurrency: SupportedMarket.doge,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c',
        transform: (0, payoffUtils_1.decimalTransform)(1n),
        untransform: (0, payoffUtils_1.decimalUntransform)(1n),
    },
    [SupportedMarket.eur]: {
        symbol: 'EUR-USD',
        name: 'Euro',
        baseCurrency: SupportedMarket.eur,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.gbp]: {
        symbol: 'GBP-USD',
        name: 'British Pound',
        baseCurrency: SupportedMarket.gbp,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.meem]: {
        symbol: 'MEEM-USD',
        name: 'MEEM',
        baseCurrency: SupportedMarket.meem,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xa217ab749c14596d69a6206c34bda27188dcfaf9d38dfcd9b76a0b348e78be44',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.aero]: {
        symbol: 'AERO-USD',
        name: 'Aerodrome Finance',
        baseCurrency: SupportedMarket.aero,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0x9db37f4d5654aad3e37e2e14ffd8d53265fb3026d1d8f91146539eebaa2ef45f',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.popcat]: {
        symbol: 'POPCAT-USD',
        name: 'Popcat',
        baseCurrency: SupportedMarket.popcat,
        quoteCurrency: QuoteCurrency.usd,
        providerId: '0xb9312a7ee50e189ef045aa3c7842e099b061bd9bdc99ac645956c3b660dc8cce',
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
    [SupportedMarket.unknown]: {
        symbol: 'UNKNOWN',
        name: 'UNKNOWN',
        baseCurrency: SupportedMarket.unknown,
        quoteCurrency: QuoteCurrency.usd,
        providerId: viem_1.zeroHash,
        transform: payoffUtils_1.linearTransform,
        untransform: payoffUtils_1.linearUntransform,
    },
};
/**
 * @description Map of market addresses organized by chain ID and market
 */
exports.ChainMarkets = {
    [chains_1.arbitrum.id]: {
        [SupportedMarket.eth]: (0, viem_1.getAddress)('0x90A664846960AaFA2c164605Aebb8e9Ac338f9a0'),
        [SupportedMarket.btc]: (0, viem_1.getAddress)('0xcC83e3cDA48547e3c250a88C8D5E97089Fd28F60'),
        [SupportedMarket.sol]: (0, viem_1.getAddress)('0x02258bE4ac91982dc1AF7a3D2C4F05bE6079C253'),
        [SupportedMarket.pol]: (0, viem_1.getAddress)('0x7e34B5cBc6427Bd53ECFAeFc9AC2Cad04e982f78'),
        [SupportedMarket.tia]: (0, viem_1.getAddress)('0x2CD8651b0dB6bE605267fdd737C840442A96fAFE'),
        [SupportedMarket.rlb]: (0, viem_1.getAddress)('0x708B750f9f5bD23E074a5a0A64EF542585906e85'),
        [SupportedMarket.link]: (0, viem_1.getAddress)('0xD9c296A7Bee1c201B9f3531c7AC9c9310ef3b738'),
        [SupportedMarket.bnb]: (0, viem_1.getAddress)('0x362c6bC2A4EA2033063bf20409A4c5E8C5754056'),
        [SupportedMarket.xrp]: (0, viem_1.getAddress)('0x2402E92f8C58886F716F5554039fA6398d7A1EfB'),
        [SupportedMarket.arb]: (0, viem_1.getAddress)('0x3D1D603073b3CEAB5974Db5C54568058a9551cCC'),
        [SupportedMarket.msqBTC]: (0, viem_1.getAddress)('0x768a5909f0B6997efa56761A89344eA2BD5560fd'),
        [SupportedMarket.cmsqETH]: (0, viem_1.getAddress)('0x004E1Abf70e4FF99BC572843B63a63a58FAa08FF'),
        [SupportedMarket.jup]: (0, viem_1.getAddress)('0xbfa99F19a376F25968865983c41535fa368B28da'),
        [SupportedMarket.xau]: (0, viem_1.getAddress)('0x1A1745e9cc740269D3e75b506e1AbF7Cbf1fE7d3'),
        [SupportedMarket.mog]: (0, viem_1.getAddress)('0xc8b73eCFdb775cB9899A0d22fFc8d11228Ac35CB'),
        [SupportedMarket.jpy]: (0, viem_1.getAddress)('0xB7558189c794239ef9453208f2e58Fa049E1035c'),
        [SupportedMarket.mkr]: (0, viem_1.getAddress)('0xe8BF156034b64A7266AcD28046F67f3fa7Ecc53a'),
        [SupportedMarket.doge]: (0, viem_1.getAddress)('0x5bef017aC7Ea4f6f59946f27d50A137D4362F6A4'),
        [SupportedMarket.eur]: (0, viem_1.getAddress)('0xb8df4bea28B1F0748D386E8A69ea1bD46B70922d'),
        [SupportedMarket.gbp]: (0, viem_1.getAddress)('0xe588d7d041e18E754e95eF51D77f6e0fC6334EfD'),
        [SupportedMarket.meem]: (0, viem_1.getAddress)('0xbc96A6E57000ADE8755A896DfBd0552FE90141dD'),
        [SupportedMarket.aero]: (0, viem_1.getAddress)('0x24a305EE9BFeBeA7dC26380a96723D6Fb6066C2C'),
        [SupportedMarket.popcat]: (0, viem_1.getAddress)('0xd1551be8c92b35212033B41dBb21efA86389768D'),
    },
    [chains_1.arbitrumSepolia.id]: {
        [SupportedMarket.eth]: (0, viem_1.getAddress)('0x6e710fDDE613609C5044813db674D4da35a593FB'),
        [SupportedMarket.btc]: (0, viem_1.getAddress)('0xFEb2588d42768f0dCeF6652E138d3C9D306e1FaB'),
        [SupportedMarket.cmsqETH]: (0, viem_1.getAddress)('0xfC51de1f1a4ddeE5AD50df492f0A642cF1894E73'),
        [SupportedMarket.xau]: (0, viem_1.getAddress)('0x122b781CF4fCa219aDB9704132D7fa11460D4fBa'),
        [SupportedMarket.meem]: (0, viem_1.getAddress)('0x7A2fE407C4F459eD62ea75fEeBB27188e4F9E6aD'),
        [SupportedMarket.sol]: (0, viem_1.getAddress)('0x15ba2b5D1C3eA1cfFb4541d2B1baF0Deab6aAF9B'),
    },
    [customChains_1.perennial.id]: {
        [SupportedMarket.eth]: (0, viem_1.getAddress)('0x62564Cd7278B79b9CFe76388e0EEe115389586c6'),
        [SupportedMarket.btc]: (0, viem_1.getAddress)('0x687CC5097210dE03940bBC8e5edD820da7Dd6827'),
        [SupportedMarket.sol]: (0, viem_1.getAddress)('0xa534972Ec3Bc7e25559cc7A3b1e3Adc03C9Fb6f8'),
    },
    [customChains_1.perennialSepolia.id]: {
        [SupportedMarket.eth]: (0, viem_1.getAddress)('0xb1f5301294695d70eCDb27E5181E94eC41d809f0'),
        [SupportedMarket.btc]: (0, viem_1.getAddress)('0xD0fd5dff874Ecf9CE24c790831bAfDD70c30eeC9'),
        [SupportedMarket.sol]: (0, viem_1.getAddress)('0xA9F5376494b6770c788247921cB5aDB6a0343d0E'),
    },
};
const chainMarketsWithAddress = (chainId, supportedMarkets) => {
    return Object.entries(exports.ChainMarkets[chainId])
        .map(([market, marketAddress]) => (isSupportedMarket(market) && !!marketAddress ? { market, marketAddress } : null))
        .filter((entry) => {
        return (0, arrayUtils_1.notEmpty)(entry) && (!supportedMarkets || supportedMarkets.includes(entry.market));
    });
};
exports.chainMarketsWithAddress = chainMarketsWithAddress;
/**
 * Helper to retrieve a market name from a market address
 * @param chainId Chain ID
 * @param address Market Address
 * @returns SupportedMarket {@link SupportedMarket}
 */
const addressToMarket = (chainId, address) => {
    for (const market of Object.keys(exports.ChainMarkets[Number(chainId)])) {
        if (exports.ChainMarkets[Number(chainId)][market] === (0, viem_1.getAddress)(address)) {
            return market;
        }
    }
    console.warn(`Market not found for address: ${address}`);
    return SupportedMarket.unknown;
};
exports.addressToMarket = addressToMarket;
var TriggerComparison;
(function (TriggerComparison) {
    TriggerComparison["lte"] = "lte";
    TriggerComparison["gte"] = "gte";
})(TriggerComparison || (exports.TriggerComparison = TriggerComparison = {}));
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["market"] = "market";
    OrderTypes["limit"] = "limit";
    OrderTypes["stopLoss"] = "stopLoss";
    OrderTypes["takeProfit"] = "takeProfit";
})(OrderTypes || (exports.OrderTypes = OrderTypes = {}));
exports.orderTypes = [OrderTypes.market, OrderTypes.limit, OrderTypes.stopLoss, OrderTypes.takeProfit];
exports.triggerOrderTypes = [OrderTypes.stopLoss, OrderTypes.takeProfit];
function isSupportedMarket(market) {
    return Object.values(SupportedMarket).includes(market);
}
/**
 * @description Deposit required for placing trigger orders
 */
exports.OrderExecutionDeposit = utils_1.Big6Math.fromFloatString('20');
/**
 * @description When passed to trigger orders, this value will fully close the position.
 */
exports.TriggerOrderFullCloseMagicValue = 0n;
exports.IntentTriggerOrderFullCloseMagicValue = viem_1.minInt64;
