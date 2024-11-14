import React from "react";
import Logo from "../assets/logo.png";
import moment from "moment";
const SubHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300px" src={Logo} alt="logo" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p>{moment().format('dddd, MMMM Do YYYY')}</p>
    </div>
  );
};

export default SubHeader;
