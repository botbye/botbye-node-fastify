import { type TRequestInfo, type TRequestInfoExtractor } from "@botbye/node-core";
import { type FastifyRequest } from "fastify";
declare const requestInfoExtractor: TRequestInfoExtractor<FastifyRequest, TRequestInfo>;
export { requestInfoExtractor, };
