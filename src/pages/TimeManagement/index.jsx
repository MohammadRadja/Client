import Layout from "../Layout";
import TimeManagementCard from "../../components/molecules/TimeManagementCard";
import { useAuthHeader } from "react-auth-kit";
import AddTimeManagement from "../../components/molecules/Modal/AddTimeManagement";
import { instance } from "../../utils/instance";
import { useEffect, useState } from "react";

const TimeManagement = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getTimeManagements = async () => {
    try {
      const res = await instance.get("timeManagement", {
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
    getTimeManagements();
  }, []);
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-5 items-center justify-between">
            <div className="text-2xl font-semibold">Time Management</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
              <AddTimeManagement />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
            {data.length > 0 ? (
              data.map((item) => (
                <TimeManagementCard
                  task={item.task}
                  deadline={item.deadline}
                  priority={item.priority}
                  key={item.id}
                  id={item.id}
                />
              ))
            ) : (
              <p>Belum ada data</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TimeManagement;
