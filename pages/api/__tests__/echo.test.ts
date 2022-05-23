import { createMocks, RequestMethod } from "node-mocks-http";
import type { NextApiRequest, NextApiResponse } from "next";
import echoHandler, { Data } from "../echo";

describe("Echo API", () => {
  const data = {
    "string query key": "string query value",
    "array query key": "array query value",
  };
  it("should echo GET requests correctly", async () => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method: "GET" });
    req.query = data;
    await echoHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual("OK");
    expect(res._getJSONData()).toStrictEqual({
      name: "ECHO GET",
      get: data,
    } as Data);
  });
  it("should echo POST requests correctly", async () => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method: "POST" });
    req.body = data;
    await echoHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual("OK");
    expect(res._getJSONData()).toStrictEqual({
      name: "ECHO POST",
      post: data,
    } as Data);
  });
  it("should echo PUT requests correctly", async () => {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method: "PUT" });
    await echoHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual("OK");
    expect(res._getJSONData()).toStrictEqual({
      name: "ECHO PUT",
    } as Data);
  });
});
