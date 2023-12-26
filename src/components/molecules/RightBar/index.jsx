import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import Article from "../Article";

const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block bg-white right-0 w-[300px] py-2 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Articles
          </h1>
          <p className="text-primary">See All</p>
        </div>

        <div className="mt-4">
          <Article />
          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Recomended</h1>
            <div className="flex gap-4">
              <RiVideoAddFill className="text-gray-600" />
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
