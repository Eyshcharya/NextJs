import { GetStaticPropsContext } from "next";

const SinglePost = ({ singlePost }: any) => {
  return (
    <>
      <h3>
        {singlePost.id} {singlePost?.title}
      </h3>
      <h4>user Id : {singlePost.userId}</h4>
      <p>{singlePost.body}</p>
    </>
  );
};
export default SinglePost;

// getStaticPaths
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
  // return {
  //   paths: [
  //     {
  //       params: { postId: "1" },
  //     },
  //     {
  //       params: { postId: "2" },
  //     },
  //     {
  //       params: { postId: "3" },
  //     },
  //   ],
  //   fallback: false,
  // };
}

// Pre-render and Fetch Data
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  // console.log(params?.postId);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();

  return { props: { singlePost: data } };
}
