import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>Next Js Pre-Rendering</h1>

      <Link href={`/dashboard`}>
        <h3>{`dashboard >>>`} </h3>
      </Link>
    </>
  );
};
export default Home;
