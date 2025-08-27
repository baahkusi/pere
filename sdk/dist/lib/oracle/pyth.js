"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythMarketOpen = exports.pythPriceToBig18 = exports.buildCommitmentsForOracles = void 0;
const viem_1 = require("viem");
const network_1 = require("../../constants/network");
const utils_1 = require("../../utils");
const arrayUtils_1 = require("../../utils/arrayUtils");
const big6Utils_1 = require("../../utils/big6Utils");
const DefaultPythArgs = {
    encoding: 'hex',
    parsed: true,
};
const buildCommitmentsForOracles = async ({ chainId, pyth: pyth_, publicClient, marketOracles, timestamp, }) => {
    const pyth = Array.isArray(pyth_) ? pyth_.at(0) : pyth_;
    if (!pyth)
        throw new Error('No Pyth client provided');
    try {
        const feedIds = marketOracles.map(({ underlyingId, minValidTime }) => ({
            underlyingId,
            minValidTime,
        }));
        // Get current VAAs for each price feed
        const uniqueFeeds = (0, arrayUtils_1.unique)(feedIds.map((f) => f.underlyingId));
        const priceFeedUpdateData = Boolean(timestamp)
            ? await pyth.getPriceUpdatesAtTimestamp(Number(timestamp), uniqueFeeds, DefaultPythArgs)
            : await pyth.getLatestPriceUpdates(uniqueFeeds, DefaultPythArgs);
        if (!priceFeedUpdateData || !priceFeedUpdateData.parsed)
            throw new Error('No price feed update data found');
        // Check if any of the prices are too old
        const now = BigInt((0, utils_1.nowSeconds)());
        for (const p of priceFeedUpdateData.parsed) {
            const oracle = marketOracles.find((o) => o.underlyingId.toLowerCase() === `0x${p.id}`.toLowerCase());
            if (!oracle)
                continue;
            const staleAfter = oracle.staleAfter ?? viem_1.maxUint256;
            if (staleAfter && BigInt(p.price.publish_time) + staleAfter < now)
                if (await pythMarketOpen(`0x${p.id}`))
                    // Only throw an error if the price is stale and the market is open
                    throw new Error(`Price feed ${p.id} is too old: ${p.price.publish_time} < ${staleAfter}`);
        }
        const publishTimeMap = priceFeedUpdateData.parsed.reduce((acc, p) => {
            if (!acc[p.price.publish_time])
                acc[p.price.publish_time] = [];
            const oracles = marketOracles.filter((o) => o.underlyingId.toLowerCase() === `0x${p.id}`.toLowerCase());
            if (!oracles)
                return acc;
            oracles.forEach((o) => {
                acc[p.price.publish_time].push({ ...o, price: pythPriceToBig18(BigInt(p.price.price), p.price.expo) });
            });
            return acc;
        }, {});
        return Object.entries(publishTimeMap).map(([publishTime, oracles]) => ({
            keeperFactory: marketOracles[0].providerFactoryAddress,
            version: BigInt(publishTime) - big6Utils_1.Big6Math.max(...oracles.map((o) => o.minValidTime)),
            value: BigInt(uniqueFeeds.length),
            updateData: `0x${priceFeedUpdateData.binary.data[0]}`,
            ids: oracles.map((o) => o.providerId),
            details: oracles.map((o) => ({
                id: o.providerId,
                underlyingId: o.underlyingId,
                price: o.price,
                publishTime: Number(publishTime),
            })),
        }));
    }
    catch (err) {
        const nextPyth = Array.isArray(pyth_) ? pyth_.slice(1) : [];
        const useBackup = nextPyth.length > 0;
        console.warn('Pyth Recent VAA Error', `Use backup: ${useBackup} (${nextPyth.length} remaining)`, err);
        if (useBackup) {
            return (0, exports.buildCommitmentsForOracles)({
                chainId,
                pyth: nextPyth,
                marketOracles,
                publicClient,
            });
        }
        throw err;
    }
};
exports.buildCommitmentsForOracles = buildCommitmentsForOracles;
function pythPriceToBig18(price, expo) {
    const normalizedExpo = price ? 18 + expo : 0;
    const normalizedPrice = normalizedExpo >= 0 ? price * 10n ** BigInt(normalizedExpo) : price / 10n ** BigInt(Math.abs(normalizedExpo));
    return normalizedPrice;
}
exports.pythPriceToBig18 = pythPriceToBig18;
const marketOpenCache = new Map();
async function pythMarketOpen(priceFeedId) {
    const now = (0, utils_1.nowSeconds)();
    const cachedResult = marketOpenCache.get(priceFeedId);
    // Query if we don't have a cached result or if the cached result is expired
    const shouldQuery = !cachedResult || cachedResult.expiration < now;
    if (!shouldQuery)
        return cachedResult.isOpen;
    const url = `${network_1.pythBenchmarksURL}/v1/price_feeds/${priceFeedId}`;
    const response = await fetch(url);
    if (!response.ok)
        return true; // default to open if we can't get the data
    const data = await response.json();
    const expiration = data.market_hours.is_open ? data.market_hours.next_close : data.market_hours.next_open;
    if (expiration)
        marketOpenCache.set(priceFeedId, { isOpen: data.market_hours.is_open, expiration });
    return data.market_hours.is_open;
}
exports.pythMarketOpen = pythMarketOpen;
