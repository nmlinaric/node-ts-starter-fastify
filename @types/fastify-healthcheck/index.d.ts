declare module "fastify-healthcheck" {

  import {IncomingMessage, Server, ServerResponse} from "http";
  import {Plugin} from "fastify";
  import up from "under-pressure";

  namespace fastifyHealthCheckNamespace {
    interface FastifyHealthCheckOptions {
      healthcheckUrl?: string;
      healthcheckUrlDisable?: boolean;
      healthcheckUrlAlwaysFail?: boolean;
      underPressureOptions?: up.UnderPressureOptions;
    }
  }

  // eslint-disable-next-line no-redeclare
  const fastifyHealthCheck: Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  fastifyHealthCheckNamespace.FastifyHealthCheckOptions
  >;

  export = fastifyHealthCheck;
}