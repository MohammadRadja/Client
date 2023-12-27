import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { instance } from "../../../utils/instance";
import Article from "../Article";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [data, setData] = useState([]);
  const getBlogs = async () => {
    try {
      await instance.get("blog").then((res) => {
        setData(res.data.data);
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
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">Articles</h1>
          <Link to="/blog">
          <button className="text-primary">See All</button>
      </Link>
        </div>

        <div className="mt-4">
            {data.map((item) => {
              return (
                <Article
                  title={item.title}
                  content={item.content}
                  id={item.id}
                  key={item.id}
                />
            );
          })}


          {/* <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">
              Recomended
            </h1>
            <div className="flex gap-4">
              <RiVideoAddFill className="text-gray-600" />
              <BiSearch />
              <BsThreeDots />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
