import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>Next Js Pre-Rendering</h1>

      <Link href={`/products`}>
        <h3>{`Products >>>`} </h3>
      </Link>
    </>
  );
};
export default Home;
