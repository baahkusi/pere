"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigIntToLittleEndian = exports.queryAll = exports.GraphDefaultPageSize = void 0;
const viem_1 = require("viem");
exports.GraphDefaultPageSize = 1000;
async function queryAll(query) {
    const hasMore = (data) => !Object.values(data)
        .filter((d) => Array.isArray(d))
        .every((i) => i.length < exports.GraphDefaultPageSize);
    const merge = (data, incoming) => Object.keys(data).reduce((ret, key) => {
        if (!Array.isArray(data[key]))
            return { ...ret, [key]: ret[key] || data[key] };
        return { ...ret, [key]: [...data[key], ...incoming[key]] };
    }, {});
    let page = 0;
    let data = await query(page);
    let incoming = data;
    while (hasMore(incoming)) {
        page += 1;
        incoming = await query(page);
        data = merge(data, incoming);
    }
    return data;
}
exports.queryAll = queryAll;
function bigIntToLittleEndian(value, size) {
    const hex = (0, viem_1.toHex)(value, { size });
    return `0x${hex.slice(2).match(/.{2}/g).reverse().join('')}`;
}
exports.bigIntToLittleEndian = bigIntToLittleEndian;
