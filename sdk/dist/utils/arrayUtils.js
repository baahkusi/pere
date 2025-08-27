"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = exports.range = exports.equal = exports.unique = exports.sum = exports.notEmpty = void 0;
function notEmpty(value) {
    return value !== null && value !== undefined;
}
exports.notEmpty = notEmpty;
function sum(values) {
    return values.reduce((sum, value) => sum + value, 0n);
}
exports.sum = sum;
function unique(values) {
    return Array.from(new Set(values));
}
exports.unique = unique;
function equal(a, b) {
    const set1 = new Set(a);
    const set2 = new Set(b);
    return a.every((i) => set2.has(i)) && b.every((i) => set1.has(i));
}
exports.equal = equal;
function range(start, end) {
    const length = Number(BigInt(end) - BigInt(start));
    return Array.from({ length }, (_, i) => BigInt(start) + BigInt(i));
}
exports.range = range;
const chunk = (arr, chunkSize) => Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) => arr.slice(i * chunkSize, i * chunkSize + chunkSize));
exports.chunk = chunk;
