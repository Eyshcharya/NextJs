import { CommentProps } from "@/utils/interfaces";
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

  // delete comment
  const deleteComment = async (commentId: number) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: `DELETE`,
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
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
              {comment.id} - {comment.text}{" "}
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </h3>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default CommentsPage;
