import * as Hapi from "hapi";

export default async function userHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<string> {
  return "Hello World";
}
