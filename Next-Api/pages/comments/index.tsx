import { CommentArrayProps, CommentProps } from "@/utils/interfaces";
import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  // logic to fetch comments
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments === undefined ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          {comments.map((comment: CommentProps) => {
            return (
              <div key={comment.id}>
                <h3>
                  {comment.id} - {comment.text}
                </h3>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default CommentsPage;
