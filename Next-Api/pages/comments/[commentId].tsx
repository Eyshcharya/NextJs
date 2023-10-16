import { CommentProps } from "@/utils/interfaces";
import { Comments } from "@/data/comments";
import { GetStaticPropsContext } from "next";

const SingleComment = ({ comment }: any) => {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
};
export default SingleComment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const commentId: any = context.params?.commentId?.toString();

  const comment = Comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}
