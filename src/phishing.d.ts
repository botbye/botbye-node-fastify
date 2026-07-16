import { type TPhishingModuleApi } from "@botbye/node-core";
import { type FastifyRequest } from "fastify";
type TPhishingFactoryOptions = {
    module?: {
        name?: string;
        version?: string;
    };
};
declare const phishingFactory: (options?: TPhishingFactoryOptions) => TPhishingModuleApi<FastifyRequest>;
declare const phishing: TPhishingModuleApi<FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>>;
export { phishing, phishingFactory, };
