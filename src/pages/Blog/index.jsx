import { useEffect, useState } from "react";
import { instance } from "../../utils/instance";
import Layout from "../Layout";
import ActivityCard from "../../components/molecules/ActivityCard";
import { useAuthHeader } from "react-auth-kit";
import AddActivity from "../../components/molecules/Modal/AddActivity";
import NoData from "../../components/atoms/NoData";
import BlogCard from "../../components/molecules/BlogCard";

const Blog = () => {
  const authHeader = useAuthHeader();
  const [data, setData] = useState([]);
  const getActivitys = async () => {
    try {
      const res = await instance.get("blog", {
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
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-4 bg-white rounded-[17px] shadow-md">
          <div className="flex mb-5 items-center justify-between">
            <div className="text-2xl font-semibold">Health Article</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
            {data.length > 0 ? (
              data.map((item) => (
                <BlogCard
                  title={item.title}
                  content={item.content}
                  image={item.image}
                  id={item.id}
                />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
