import Link from "next/link";

interface PostsProps {
  posts: Array<any>;
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <h1>Lists of Posts</h1>
    </>
  );
};
export default Posts;
