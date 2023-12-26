import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard";
import { instance } from "../../../utils/instance";
import { useAuthHeader } from "react-auth-kit";

const ActivityList = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getActivitys = async () => {
    try {
      await instance
        .get("activity", {
          headers: {
            Authorization: authHeader(),
          },
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
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="px-4 py-5 bg-white rounded-[17px] shadow-md">
        <div className="flex mb-2  items-center justify-between">
          <div className="text-3xl font-semibold">Recent Activity</div>
        </div>
        <div className="relative flex gap-4 py-6 overflow-x-auto">
          {data.map((item) => {
            return (
              <ActivityCard
                key={item.id}
                title={item.title}
                goal={item.goal}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
