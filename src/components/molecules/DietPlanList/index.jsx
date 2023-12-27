import DietPlanCard from "../DietPlanCard";
import { instance } from "../../../utils/instance";
import { useAuthHeader } from "react-auth-kit";
import { useEffect, useState } from "react";
import NoData from "../../atoms/NoData";

const DietPlanList = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);

  const getDietPlans = async () => {
    try {
      const res = await instance.get("dietPlan", {
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
    getDietPlans();
  }, []);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="px-4 py-5 bg-white rounded-[17px] shadow-md">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-2xl font-semibold">Recent Diet Plan</div>
        </div>
        <div className="relative flex gap-4 py-6 overflow-x-auto">
          {data.length > 0 ? (
            data.map((item) => (
              <DietPlanCard
                mealType={item.mealType}
                foodItem={item.foodItem}
                calories={item.calories}
                createdAt={item.createdAt}
                id={item.id}
                key={item.id}
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

export default DietPlanList;
