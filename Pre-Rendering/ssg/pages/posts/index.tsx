import Link from "next/link";

interface PostsProps {
  posts: Array<any>;
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <h1>Lists of Posts</h1>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              {post.id}.{post.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Posts;

// Pre-rendering and fetching data.
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
