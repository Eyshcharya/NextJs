import Post from "@/Components/Post";

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
            <Post post={post} />
          </div>
        );
      })}
    </>
  );
};
export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
