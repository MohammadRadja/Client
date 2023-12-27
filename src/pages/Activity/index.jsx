import { useEffect, useState } from "react";
import { instance } from "../../utils/instance";
import Layout from "../Layout";
import ActivityCard from "../../components/molecules/ActivityCard";
import { useAuthHeader } from "react-auth-kit";
import AddActivity from "../../components/molecules/Modal/AddActivity";
import NoData from "../../components/atoms/NoData";

const Activity = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getActivitys = async () => {
    try {
      const res = await instance.get("activity", {
        headers: {
          Authorization: authHeader(),
        },
      });

      const sortedData = res.data.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setData(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActivitys();
  }, []);

  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-5 items-center justify-between">
            <div className="text-2xl font-semibold">Activity</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
              <AddActivity />
            </button>
          </div>
          {data.length > 0 ? (
            data.map((item) => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
                <ActivityCard
                  title={item.title}
                  goal={item.goal}
                  key={item.id}
                  id={item.id}
                />
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
