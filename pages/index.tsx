import Link from "next/link";
export default function Home() {
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
    </>
  );
}
