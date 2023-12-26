import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../utils/instance";
import Layout from "../Layout";
import { useAuthHeader } from "react-auth-kit";
import ContentDietPlan from "./child/ContentDietPlan";

const FinancialRecordDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const authHeader = useAuthHeader();
  useEffect(() => {
    const getDietPlans = async () => {
      try {
        await instance
          .get("dietPlan/" + params.id, {
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
    getDietPlans();
  }, [params]);
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <ContentDietPlan data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default FinancialRecordDetail;
