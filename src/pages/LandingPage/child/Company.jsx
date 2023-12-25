import React from "react";
import { BsXDiamondFill } from "react-icons/bs";

function Company() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
          You’ll be in good company
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
          <a href="#" className="flex justify-center items-center">
            <BsXDiamondFill
              className="h-9 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Company;
