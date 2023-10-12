import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
const SinglePost = ({ singlePost }: any) => {
  // Logic for fallback:true
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

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

  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: `blocking`,
  };
}

// Pre-render and Fetch Data
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  // console.log(`Generating page for : /posts/${params?.postId}`);

  return { props: { singlePost: data } };
}
