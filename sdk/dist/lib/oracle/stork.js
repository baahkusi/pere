"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPrices = void 0;
const json_bigint_1 = __importDefault(require("json-bigint"));
const viem_1 = require("viem");
const utils_1 = require("../../utils");
const JSONBig = (0, json_bigint_1.default)({ useNativeBigInt: true });
async function fetchPrices({ url, apiKey, timestamp, feeds, }) {
    const params = new URLSearchParams();
    // TODO: Stork doesn't support timestamping yet
    if (timestamp)
        throw new Error('Timestamp queries not supported');
    // Do this in a regular loop as only the first request will request the asset list
    const assets = [];
    for (const { underlyingId } of feeds) {
        const asset = await idToStorkAsset({ id: underlyingId, storkUrl: url, storkApiKey: apiKey });
        assets.push(asset);
    }
    params.append('assets', assets.join(','));
    // We need to parse as JSONBig because the native JSON parse can cause rounding issues
    const headers = apiKey ? { Authorization: `${apiKey}` } : undefined;
    const data = await fetch(`${url}/v1/prices/latest?${params.toString()}`, {
        headers,
    })
        .then((res) => res.text())
        .then((raw) => JSONBig.parse(raw));
    if (Object.keys(data.data).length !== feeds.length)
        throw new Error('Missing price feed data');
    return transformPriceResponse({ data, feeds });
}
exports.fetchPrices = fetchPrices;
function transformPriceResponse({ data, feeds, }) {
    const maxMinValidTime = utils_1.Big6Math.max(...feeds.map(({ minValidTime }) => minValidTime));
    const maxPublishTime = Math.max(...Object.values(data.data).map((price) => storkTimestampNsToSeconds(price.stork_signed_price.timestamped_signature.timestamp)));
    return {
        details: Object.values(data.data)
            .map((data) => {
            const underlyingId = data.stork_signed_price.encoded_asset_id;
            const id = feeds.find((feed) => feed.underlyingId === underlyingId)?.id;
            if (!id)
                return null;
            return {
                id,
                underlyingId,
                price: BigInt(data.stork_signed_price.price),
                publishTime: storkTimestampNsToSeconds(data.stork_signed_price.timestamped_signature.timestamp),
            };
        })
            .filter(utils_1.notEmpty),
        ids: feeds.map(({ id }) => id),
        updateData: buildUpdateData({ underlyingIds: feeds.map(({ underlyingId }) => underlyingId), data: data.data }),
        version: BigInt(maxPublishTime) - maxMinValidTime,
        value: 0n,
    };
}
const storkAssetCache = new Map();
async function idToStorkAsset({ id, storkUrl, storkApiKey, }) {
    if (storkAssetCache.has(id))
        return storkAssetCache.get(id);
    const headers = storkApiKey ? { Authorization: `${storkApiKey}` } : undefined;
    const assetList = (await fetch(`${storkUrl}/v1/prices/assets`, { headers }).then((res) => res.json()));
    for (const asset of assetList.data) {
        const id = (0, viem_1.keccak256)((0, viem_1.stringToBytes)(asset));
        storkAssetCache.set(id, asset);
    }
    if (!storkAssetCache.has(id))
        throw new Error('Asset not found');
    return storkAssetCache.get(id);
}
function storkTimestampNsToSeconds(timestamp) {
    return Number(timestamp / BigInt(1e9));
}
/*
  struct TemporalNumericValue {
    uint64 timestampNs; // 8 bytes
    int192 quantizedValue; // 8 bytes
  }
  struct TemporalNumericValueInput {
    TemporalNumericValue temporalNumericValue;
    bytes32 id;
    bytes32 publisherMerkleRoot;
    bytes32 valueComputeAlgHash;
    bytes32 r;
    bytes32 s;
    uint8 v;
  }
*/
function buildUpdateData({ underlyingIds, data }) {
    // encode the stork data
    const updateData = (0, viem_1.encodeAbiParameters)([
        {
            type: 'tuple[]',
            components: [
                { type: 'tuple', components: [{ type: 'uint64' }, { type: 'int192' }] },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'uint8' },
            ],
        },
    ], [
        Object.values(data)
            // Sort the data by the underlyingId to maintain order
            .sort((d1, d2) => {
            return (underlyingIds.indexOf(d1.stork_signed_price.encoded_asset_id) -
                underlyingIds.indexOf(d2.stork_signed_price.encoded_asset_id));
        })
            .map((storkData) => [
            [storkData.stork_signed_price.timestamped_signature.timestamp, BigInt(storkData.stork_signed_price.price)],
            storkData.stork_signed_price.encoded_asset_id,
            storkData.stork_signed_price.publisher_merkle_root,
            `0x${storkData.stork_signed_price.calculation_alg.checksum}`,
            storkData.stork_signed_price.timestamped_signature.signature.r,
            storkData.stork_signed_price.timestamped_signature.signature.s,
            (0, viem_1.hexToNumber)(storkData.stork_signed_price.timestamped_signature.signature.v),
        ]),
    ]);
    return updateData;
}
