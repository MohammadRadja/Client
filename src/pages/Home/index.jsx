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
        <div className="px-4 py-5 bg-white  rounded-[17px] shadow-md">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-2xl font-semibold">Recent Activity</div>
            <button className=" text-2xl flex flex-wrap gap-4 justify-center">
              <AiOutlinePlus />
            </button>
          </div>
          <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
          </div>
        
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-5 bg-white  rounded-[17px] shadow-md">
          <div className="text-2xl mb-2 font-semibold">
            Recent Time Management
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div class="card md:flex max-w-lg">
              <div class="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                <img
                  class="object-cover rounded-full"
                  src="/assets/profile_image.png"
                />
              </div>
              <div class="flex-grow text-center md:text-left">
                <p class="support">Senior Researcher</p>
                <h3 class="text-xl heading">Dr. Katya Hattenagh</h3>
                <p class="mt-2 mb-3">
                  Katya studies the intersection of machine learning and
                  differential topology.
                </p>
                <div>
                  <span class="chip ~neutral mb-1">Discrete Math</span>{" "}
                  <span class="chip ~neutral mb-1">Topology</span>{" "}
                  <span class="chip ~neutral mb-1">Neural Nets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <div className="px-4 py-5 bg-white  rounded-[17px] shadow-md">
          <div className="text-2xl mb-2 font-semibold">
            Recent Financial Record
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
