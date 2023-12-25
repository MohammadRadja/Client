import { useEffect, useState } from "react";
import { instance } from "../../utils/instance";
import Layout from "../Layout";
import ActivityCard from "../../components/molecules/ActivityCard";
import { useAuthHeader } from "react-auth-kit";

const Activity = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getActivitys = async () => {
    try {
      await instance
        .get("activity", {
          headers: {
            Authorization: authHeader(),
          }
        })
        .then((res) => {
          setData(res.data.data);
        });
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
          <div className="text-2xl mb-2 font-semibold">Activity</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
            {data.map((item) => {
              return (
                <ActivityCard
                  title={item.title}
                  goal={item.goal}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
