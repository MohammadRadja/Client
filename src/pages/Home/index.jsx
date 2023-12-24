import React from "react";

import { HiBookOpen } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import Layout from "../Layout";
import ActivityCard from "../../components/molecules/ActivityCard";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-5 ro bg-white rounded-[17px] justify-center shadow-md flex flex-wrap gap-4">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
