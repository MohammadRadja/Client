import Layout from "../Layout";
import ActivityList from "../../components/molecules/ActivityList";
import TimeManagementList from "../../components/molecules/TimeManagementList";

const Home = () => {
  return (
    <Layout>
      <ActivityList />
      <TimeManagementList />
    </Layout>
  );
};

export default Home;
