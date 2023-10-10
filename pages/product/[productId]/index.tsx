import { useRouter } from "next/router";
const singleProduct = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1> Single Product {productId}</h1>;
};
export default singleProduct;
