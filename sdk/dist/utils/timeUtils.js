"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateRelative = exports.last7dBounds = exports.last24hrBounds = exports.timeToSeconds = exports.nowSeconds = exports.Year = exports.Day = exports.Hour = exports.Minute = exports.Second = void 0;
const date_fns_1 = require("date-fns");
exports.Second = 1n;
exports.Minute = exports.Second * 60n;
exports.Hour = exports.Minute * 60n;
exports.Day = exports.Hour * 24n;
exports.Year = exports.Day * 365n;
function nowSeconds(asBigInt) {
    const seconds = Math.floor(Date.now() / 1000);
    return (Boolean(asBigInt) ? BigInt(seconds) : seconds);
}
exports.nowSeconds = nowSeconds;
function timeToSeconds(time, asBigInt) {
    const seconds = Math.floor(new Date(time).getTime() / 1000);
    return (Boolean(asBigInt) ? BigInt(seconds) : seconds);
}
exports.timeToSeconds = timeToSeconds;
const last24hrBounds = () => {
    const now = new Date();
    const yesterday = new Date(new Date().setDate(now.getDate() - 1));
    const to = Math.floor(now.setUTCHours(now.getUTCHours(), 59, 59, 999) / 1000);
    const from = Math.floor(yesterday.setUTCHours(yesterday.getUTCHours(), 0, 0, 0) / 1000);
    return { to, from };
};
exports.last24hrBounds = last24hrBounds;
const last7dBounds = () => {
    const end = new Date();
    const start = (0, date_fns_1.subDays)(end, 7);
    const to = Math.floor(end.setUTCHours(end.getUTCHours(), 59, 59, 999) / 1000);
    const from = Math.floor(start.setUTCHours(start.getUTCHours(), 0, 0, 0) / 1000);
    return { to, from };
};
exports.last7dBounds = last7dBounds;
const formatDateRelative = (date) => {
    const formatted = (0, date_fns_1.formatDistanceToNowStrict)(date, { addSuffix: true });
    const shortFormMap = {
        second: 's',
        seconds: 's',
        minute: 'm',
        minutes: 'm',
        hour: 'h',
        hours: 'h',
        day: 'd',
        days: 'd',
        month: 'mo',
        months: 'mo',
        year: 'yr',
        years: 'yr',
    };
    return formatted.replace(/ (seconds|second|minutes|minute|hours|hour|days|day|months|month|years|year)/g, (match) => shortFormMap[match.trim()]);
};
exports.formatDateRelative = formatDateRelative;
