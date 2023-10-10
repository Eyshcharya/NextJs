import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();

  const { params } = router.query as { params?: String[] };
  console.log(params);

  // params[0] = featureN;
  // params[1] = conceptN;

  if (params?.length === 2) {
    return (
      <>
        <h1> Viewing Docs for {params[0]}</h1>
        <h2>Concept: {params[1]}</h2>
      </>
    );
  } else if (params?.length === 1) {
    return <h1>Docs of {params[0]}</h1>;
  }

  return <div>Doc Home Page</div>;
};
export default Doc;
