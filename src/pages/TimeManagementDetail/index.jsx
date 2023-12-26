import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../utils/instance";
import Layout from "../Layout";
import { useAuthHeader } from "react-auth-kit";
import ContentTimeManagement from "./child/ContentTimeManagement";

const TimeManagementDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const authHeader = useAuthHeader();
  useEffect(() => {
    const getDetailNews = async () => {
      try {
        await instance
          .get("timeManagement/" + params.id, {
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
    getDetailNews();
  }, [params]);
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <ContentTimeManagement data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default TimeManagementDetail;
