import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard";
import { instance } from "../../../utils/instance";
import { useAuthHeader } from "react-auth-kit";
import NoData from "../../atoms/NoData";

const ActivityList = () => {
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
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="px-4 py-5 bg-white rounded-[17px] shadow-md">
        <div className="flex mb-2  items-center justify-between">
          <div className="text-2xl font-semibold">Recent Activity</div>
        </div>
        <div className="relative flex gap-4 py-6 overflow-x-auto">
          {data.length > 0 ? (
            data.map((item) => (
              <ActivityCard
                key={item.id}
                title={item.title}
                goal={item.goal}
                id={item.id}
              />
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
