const productList = () => {
  const productArray = ["Product 1", "Product 2", "Product 3"];
  return (
    <>
      <h1>productList</h1>
      {productArray.map((product, index) => {
        return <h2 key={index}>{product}</h2>;
      })}
    </>
  );
};
export default productList;
