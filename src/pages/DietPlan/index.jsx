import Layout from "../Layout";
import { useAuthHeader } from "react-auth-kit";
import { instance } from "../../utils/instance";
import { useEffect, useState } from "react";
import DietPlanCard from "../../components/molecules/DietPlanCard";
import AddDietPlan from "../../components/molecules/Modal/AddDietPlan";

const DietPlan = () => {
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
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-5 items-center justify-between">
            <div className="text-2xl font-semibold">Diet Plan</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
            <AddDietPlan />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
            {data.map((item) => {
              return (
                <DietPlanCard
                  mealType={item.mealType}
                  calories={item.calories}
                  createdAt={item.createdAt}
                  foodItem={item.foodItem}
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

export default DietPlan;
