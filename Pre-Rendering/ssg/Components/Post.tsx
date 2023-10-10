interface PostProps {
  post: any;
}
const Post = ({ post }: PostProps) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
};
export default Post;
