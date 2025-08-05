import { TBotByeInitOptions, TBotByeResponse, TValidateRequestOptions as TValidateRequestOptionsCore } from "botbye-node-core";
import { FastifyRequest } from "fastify";
declare function init(options: TBotByeInitOptions): typeof validateRequest;
type TValidateRequestOptions = Omit<TValidateRequestOptionsCore, "requestInfo" | "headers"> & {
    request: FastifyRequest;
};
declare function validateRequest(options: TValidateRequestOptions): Promise<TBotByeResponse>;
export { type TValidateRequestOptions, type TBotByeResponse, init, validateRequest, };
