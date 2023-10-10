import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>Review {reviewId}</h1>
      <h2>of Product with id = {productId}</h2>
    </>
  );
};
export default Review;
