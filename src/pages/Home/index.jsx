import Layout from "../Layout";
import ActivityList from "../../components/molecules/ActivityList";
import TimeManagementList from "../../components/molecules/TimeManagementList";
import FinancialRecordList from "../../components/molecules/FinancialRecordList";

const Home = () => {
  return (
    <Layout>
      <ActivityList />
      <TimeManagementList />
      <FinancialRecordList />
    </Layout>
  );
};

export default Home;
