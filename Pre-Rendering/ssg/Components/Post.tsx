interface PostProps {
  post: any;
}
const Post = ({ post }: PostProps) => {
  return (
    <>
      <h3>
        {post.id}.{post.title}
      </h3>

      <hr />
    </>
  );
};
export default Post;
