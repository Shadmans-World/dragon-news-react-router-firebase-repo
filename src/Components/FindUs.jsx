import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const FindUs = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h2>Find Us On</h2>
      <div className="join join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
        <CiFacebook /> Facebbok
        </button>

        <button className="btn join-item justify-start">
        <CiTwitter /> Twitter
        </button>

        <button className="btn join-item justify-start">
        <CiInstagram/> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
