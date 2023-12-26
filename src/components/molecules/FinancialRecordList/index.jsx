import FinancialRecordCard from "../FinancialRecordCard";
import { instance } from "../../../utils/instance";
import { useAuthHeader } from "react-auth-kit";
import { useEffect, useState } from "react";
import AddFinancialRecord from "../Modal/AddFinancialRecord";

const FinancialRecordList = () => {
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
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="px-4 py-5 bg-white rounded-[17px] shadow-md">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-2xl font-semibold">Recent Financial Record</div>
        </div>
        <div className="relative flex gap-4 py-6 overflow-x-auto">
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
  );
};

export default FinancialRecordList;
