import { Comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const commentId = req.query.commentId?.toString();

  if (commentId) {
    const comment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    if (req.method === "GET") {
      res.status(200).json(comment);
    } else if (req.method === "DELETE") {
      const index = Comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
      );
      Comments.splice(index, 1);
      res.status(200).json({ message: "Comment Deleted", comment });
    }
  } else {
    res.status(404).json({ message: "Comment Not Found" });
  }
}
