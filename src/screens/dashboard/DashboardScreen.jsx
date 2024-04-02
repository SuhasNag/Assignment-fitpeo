import { AreaCards, AreaCharts,  AreaTop } from "../../Components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
    </div>
  );
};

export default Dashboard;
