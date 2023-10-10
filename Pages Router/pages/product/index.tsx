import Link from "next/link";
const productList = () => {
  const productArray = ["Product 1", "Product 2", "Product 3"];
  return (
    <>
      <h1>productList</h1>
      {productArray.map((product, index) => {
        return (
          <h2 key={index}>
            <Link href={`/product/${index + 1}`}>{product}</Link>
          </h2>
        );
      })}
      <Link href={`/`}>
        <p>Home</p>
      </Link>
    </>
  );
};
export default productList;
