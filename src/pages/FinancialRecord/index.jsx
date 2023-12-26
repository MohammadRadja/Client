import Layout from "../Layout";
import FinancialRecordCard from "../../components/molecules/FinancialRecordCard";
import { useAuthHeader } from "react-auth-kit";
import AddFinancialRecord from "../../components/molecules/Modal/AddFinancialRecord";
import { instance } from "../../utils/instance";
import { useEffect, useState } from "react";

const FinanialRecord = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getTimeManagements = async () => {
    try {
      await instance
        .get("financialRecord", {
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
    getTimeManagements();
  }, []);
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-5 items-center justify-between">
            <div className="text-2xl font-semibold">Financial Record</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
              <AddFinancialRecord />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
            {data.map((item) => {
              return (
              <FinancialRecordCard
                title={item.title}
                description={item.description}
                category={item.category}
                amount={item.amount}
                date={item.date}
                id={item.id}
                key={item.id}
              />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FinanialRecord;
