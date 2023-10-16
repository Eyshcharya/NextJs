import { Comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const commentId = req.query.commentId?.toString();

  if (commentId) {
    const id = parseInt(commentId);
    const comment = Comments.find((comment) => comment.id === id);

    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } else {
    res.status(400).json({ message: "Invalid commentId" });
  }
}
