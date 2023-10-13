import Link from "next/link";

interface ProductProps {
  products: Array<any>;
}

const Products = ({ products }: ProductProps) => {
  return (
    <>
      <h1>Lists of Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>
              {product.title}
              <hr />
            </h3>
          </div>
        );
      })}
    </>
  );
};
export default Products;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data.slice(0, 3),
    },
  };
}
