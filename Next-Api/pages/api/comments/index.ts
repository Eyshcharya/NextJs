import { NextApiRequest, NextApiResponse } from "next";
import { Comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Comments);
}
