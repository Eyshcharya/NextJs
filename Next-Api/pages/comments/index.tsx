import { CommentProps } from "@/utils/interfaces";
import { log } from "console";
import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  // logic to fetch comments
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  // post comment
  const postComment = async () => {
    const response = await fetch(`api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <button type='submit' onClick={postComment}>
        Post Comment
      </button>
      <br />

      <button onClick={fetchComments}>Load Comments</button>

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
  );
};
export default CommentsPage;
