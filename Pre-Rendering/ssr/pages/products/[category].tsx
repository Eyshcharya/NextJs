import { GetServerSidePropsContext } from "next";
import { ProductProps } from ".";
import { ParsedUrlQuery } from "querystring";

const Category = ({ products }: ProductProps, { category }: ParsedUrlQuery) => {
  return (
    <>
      <h2>{category} Products</h2>
      {products.map((product) => {
        return (
          <div key={product?.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Category;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Batman"]);

  // console.log(context);
  // const { category }: any = context.params;
  const { category } = context.query;

  const response = await fetch(
    `http://localhost:4000/products?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      products: data,
      category,
    },
  };
}
