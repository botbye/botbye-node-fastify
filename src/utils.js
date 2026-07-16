"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestInfoExtractor = void 0;
var requestInfoExtractor = function (request, global) {
    var _a;
    try {
        var headers = {};
        for (var _i = 0, _b = Object.entries(request.headers); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            if (value !== undefined) {
                headers[key] = Array.isArray(value) ? value.join(";") : value;
            }
        }
        return {
            ip: (_a = request.ip) !== null && _a !== void 0 ? _a : "0.0.0.0",
            requestUri: request.url,
            requestMethod: request.method,
            headers: headers,
        };
    }
    catch (_d) {
        global.logger.warn("Not valid type of request passed. event.request.request should be instance of FastifyRequest. Fallback value will be used");
        return {
            ip: "0.0.0.0",
            headers: {},
        };
    }
};
exports.requestInfoExtractor = requestInfoExtractor;
