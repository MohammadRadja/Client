import DietPlanCard from "../DietPlanCard";
import { instance } from "../../../utils/instance";
import { useAuthHeader } from "react-auth-kit";
import { useEffect, useState } from "react";

const DietPlanList = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getTimeManagements = async () => {
    try {
      await instance
        .get("dietPlan", {
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
          <div className="text-3xl font-semibold">Recent Diet Plan</div>
        </div>
        <div className="relative flex gap-4 py-6 overflow-x-auto">
          {data.map((item) => {
            return (
              <DietPlanCard
                mealType={item.mealType}
                foodItem={item.foodItem}
                calories={item.calories}
                createdAt={item.createdAt}
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

export default DietPlanList;
