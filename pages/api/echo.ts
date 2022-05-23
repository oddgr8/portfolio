// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  get?: {
    [key: string]: string | string[];
  };
  post?: {
    [key: string]: string | string[];
  };
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "ECHO GET", get: req.query });
      break;

    case "POST":
      res.status(200).json({ name: "ECHO POST", post: req.body });
      break;

    default:
      res.status(200).json({ name: `ECHO ${req.method}` });
      break;
  }
}
