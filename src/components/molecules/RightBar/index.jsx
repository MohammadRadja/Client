import { instance } from "../../../utils/instance";
import Article from "../Article";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [data, setData] = useState([]);

  const getBlogs = async () => {
    try {
      await instance.get("blog").then((res) => {
        // Sort articles by createdAt in descending order
        const sortedData = res.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        // Limit the display to a maximum of 7 articles
        const limitedData = sortedData.slice(0, 10);
        setData(limitedData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="fixed hidden xl:block bg-white right-0 w-[300px] py-2 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between mt-4">
          <h1 className="font-semibold text-secondary text-[18px]">
            Health Article
          </h1>
          <Link to="/blog">
            <button className="text-primary font-semibold">See All</button>
          </Link>
        </div>
        <div className="mt-2">
          {data.map((item) => (
            <Article
              title={item.title}
              content={item.content}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
