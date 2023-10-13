import { useRouter } from "next/router";
import Link from "next/link";
const Home = () => {
  const router = useRouter();
  return (
    <>
      <h1>Next Js Pre-rendering</h1>

      <Link href={`/posts`}>
        <h3>{`Posts >>>`} </h3>
      </Link>
    </>
  );
};
export default Home;
