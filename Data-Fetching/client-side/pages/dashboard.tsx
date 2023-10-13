import { useEffect, useState } from "react";

interface DashboardData {
  likes: number;
  posts: number;
  followers: number;
  following: number;
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setIsLoading(false);
      setDashboardData(data);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h3>Posts -{dashboardData?.posts}</h3>
      <h3>Likes -{dashboardData?.likes}</h3>
      <h3>Followers -{dashboardData?.followers}</h3>
      <h3>Following-{dashboardData?.following}</h3>
    </>
  );
};
export default Dashboard;
