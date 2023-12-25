import Layout from "../Layout";
import ActivityCard from "../../components/molecules/ActivityCard";
import AddActivity from "../../components/molecules/Modal/AddActivity";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-5 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-2xl font-semibold">Recent Activity</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
              <AddActivity />
            </button> 
          </div>
          <div className="relative flex gap-4 py-6 overflow-x-auto">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
