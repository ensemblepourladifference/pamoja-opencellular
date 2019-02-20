// tslint:disable no-var-requires
require("app-module-path").addPath(require("path").join(__dirname, "../"));
// tslint:enable no-var-requires

import * as Hapi from "hapi";
import getPlugins from "./config/plugins";
import { RESOURCES_HOST, RESOURCES_PORT } from "./constants";

import userHandler from "./features/user/handler";

export async function createServer() {
  const server = new Hapi.Server({
    host: RESOURCES_HOST,
    port: RESOURCES_PORT,
    routes: {
      cors: { origin: ["*"] }
    }
  });

  server.route({
    method: "GET",
    path: "/user",
    handler: userHandler,
    options: {
      tags: ["api"],
      description: "Returns hello world"
    }
  });

  await server.register(getPlugins());

  async function stop() {
    await server.stop();
    server.log("info", "server stopped");
  }

  async function start() {
    await server.start();
    server.log("info", `server started on ${RESOURCES_HOST}:${RESOURCES_PORT}`);
  }

  return { server, start, stop };
}

if (require.main === module) {
  createServer().then(server => server.start());
}
