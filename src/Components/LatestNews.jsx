import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover speed={100} className="space-x-10">
        <Link to='/news'>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quisquam.</Link>

        <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, perspiciatis.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
