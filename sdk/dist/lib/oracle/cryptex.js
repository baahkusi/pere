"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPrices = void 0;
const utils_1 = require("../../utils");
const pyth_1 = require("./pyth");
async function fetchPrices({ url, timestamp, feeds, }) {
    const params = new URLSearchParams();
    if (timestamp)
        params.append('timestamp', timestamp.toString());
    feeds.forEach(({ underlyingId }) => params.append('feedID[]', underlyingId));
    const data = await fetch(`${url}/prices?${params.toString()}`).then((res) => res.json());
    if (data.parsed.length !== feeds.length)
        throw new Error('Missing price feed data');
    return transformPriceResponse({ data, feeds });
}
exports.fetchPrices = fetchPrices;
function transformPriceResponse({ data, feeds, }) {
    const maxMinValidTime = utils_1.Big6Math.max(...feeds.map(({ minValidTime }) => minValidTime));
    const maxPublishTime = Math.max(...data.parsed.map((price) => price.price.publish_time));
    return {
        details: data.parsed
            .map((data) => {
            const underlyingId = `0x${data.id}`;
            const id = feeds.find((feed) => feed.underlyingId === underlyingId)?.id;
            if (!id)
                return null;
            return {
                id,
                underlyingId,
                price: (0, pyth_1.pythPriceToBig18)(BigInt(data.price.price), data.price.expo),
                publishTime: data.price.publish_time,
            };
        })
            .filter(utils_1.notEmpty),
        ids: feeds.map(({ id }) => id),
        updateData: `0x${data.binary.data}`,
        version: BigInt(maxPublishTime) - maxMinValidTime,
        value: 0n,
    };
}
