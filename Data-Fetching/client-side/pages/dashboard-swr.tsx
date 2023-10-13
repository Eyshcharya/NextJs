import useSWR from "swr";

// fetching data in client side using swr - recommended by Next.js
const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h1>{`An Error has Occured :(`} </h1>;
  if (!data) return <h1>{`Loading...`} </h1>;
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Posts -{data?.posts}</h3>
      <h3>Likes -{data?.likes}</h3>
      <h3>Followers -{data?.followers}</h3>
      <h3>Following-{data?.following}</h3>
    </>
  );
};
export default DashboardSWR;
