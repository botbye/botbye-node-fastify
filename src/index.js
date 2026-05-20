"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = exports.dev = exports.evaluate = exports.init = void 0;
var node_core_1 = require("@botbye/node-core");
var node_http_client_1 = require("@botbye/node-core/node-http-client");
var constants_1 = require("./constants");
var factory = function (options) {
    var _a, _b, _c, _d;
    return (0, node_core_1.moduleApiFactory)({
        httpClient: node_http_client_1.nodeHttpClient,
        module: {
            name: (_b = (_a = options === null || options === void 0 ? void 0 : options.module) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : constants_1.MODULE_NAME,
            version: (_d = (_c = options === null || options === void 0 ? void 0 : options.module) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : constants_1.MODULE_VERSION,
        },
        requestInfoExtractor: function (request, global) {
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
        },
    });
};
exports.factory = factory;
var _a = factory(), init = _a.init, evaluate = _a.evaluate, dev = _a.dev;
exports.init = init;
exports.evaluate = evaluate;
exports.dev = dev;