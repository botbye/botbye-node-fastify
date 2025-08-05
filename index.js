"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.validateRequest = validateRequest;
var botbye_node_core_1 = require("botbye-node-core");
(0, botbye_node_core_1.initPackageInfo)({ name: "NodeJS-Fastify", version: "0.1.0" });
function init(options) {
    (0, botbye_node_core_1.init)(options);
    return validateRequest;
}
function validateRequest(options) {
    var _a;
    var token = options.token, request = options.request, customFields = options.customFields;
    var headers = Object.entries(request.headers)
        .reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = Array.isArray(value) ? value.join(";") : value;
        return acc;
    }, {});
    var requestInfo = {
        'request_uri': request.url,
        'request_method': request.method,
        'remote_addr': request.ip,
        'server_port': String((_a = request.port) !== null && _a !== void 0 ? _a : "0000"),
        'server_name': request.hostname || "",
    };
    return (0, botbye_node_core_1.validateRequest)({
        token: token,
        headers: headers,
        requestInfo: requestInfo,
        customFields: customFields,
    });
}
