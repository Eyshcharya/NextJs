import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log(`Placing your Order`);
    router.push(`/product`);
    // router.replace(`/product`);
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href={`/blog`}>
        <p>Blog</p>
      </Link>
      <Link href={`/product`}>
        <p>Products</p>
      </Link>
      <Link href={`/docs`}>
        <p>Docs</p>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
