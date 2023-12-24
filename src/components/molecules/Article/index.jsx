import React from "react";

const Article = () => {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
          <img
            className="h-[50px] w-[50px] rounded-full object-cover"
            src="/elon_musk.jpg"
            alt="dp"
          />
          <div>
            <h1 className="font-semibold">Berita Kesehatan</h1>
            <p className="text-gray-500 text-[14px]">Waspada</p>
          </div>
          <p className="ml-auto text-primary text-[14px]">23 June</p>
        </div>
      </div>
  );
};

export default Article;
