import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsData = () => {
  const news = useLoaderData(); // Access the loaded data

  return (
    <div className="flex flex-col ">
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      {
      news?.data?.map((article) => 
        <NewsCard key={article._id} article={article}></NewsCard>
    )
      }
    </div>
  );
};

export default NewsData;
