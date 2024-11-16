import React, { useState } from "react";
import { FaRegStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  // // State to toggle between truncated and full details
  // const [isExpanded, setIsExpanded] = useState(false);

  // // Function to toggle "Read More" state
  // const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="border rounded-lg p-5 shadow-lg bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={article.author.img}
            alt={article.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{article.author.name}</p>
            <p className="text-gray-500 text-sm">
              {article.author.published_date}
            </p>
          </div>
        </div>
        <button className="text-gray-500">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3">{article.title}</h2>

      {/* Image */}
      <div className="h-[500px]">
        <img
          src={article.thumbnail_url}
          alt={article.title}
          className="w-full h-full object-contain rounded-lg mb-3"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-3">
        {`${article.details.slice(0, 100)}...`}
        <Link to={`/news/${article._id}`} className="text-red-500 font-semibold ml-2">Read More</Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaRegStar />
          <span className="text-black font-semibold">
            {article.rating.number}
          </span>
          <span className="text-gray-500 text-sm ml-1">
            {article.rating.badge}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{article.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
