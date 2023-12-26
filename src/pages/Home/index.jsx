import Layout from "../Layout";
import ActivityList from "../../components/molecules/ActivityList";
import TimeManagementList from "../../components/molecules/TimeManagementList";
import FinancialRecordList from "../../components/molecules/FinancialRecordList";
import DietPlanList from "../../components/molecules/DietPlanList";

const Home = () => {
  return (
    <Layout>
      <ActivityList />
      <TimeManagementList />
      <FinancialRecordList />
      <DietPlanList />
    </Layout>
  );
};

export default Home;
