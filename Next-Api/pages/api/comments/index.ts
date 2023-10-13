import { NextApiRequest, NextApiResponse } from "next";
import { Comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(Comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    // console.log(comment);

    const newComment = {
      id: Date.now(),
      text: comment,
    };

    Comments.push(newComment);
    res.status(201).json(newComment);
  }
}
