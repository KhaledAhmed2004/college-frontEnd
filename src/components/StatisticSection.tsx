import React from "react";
import { FaUniversity, FaUserShield, FaUsers, FaSchool } from "react-icons/fa";

const StatisticSection = () => {
  return (
    <div className="relative bg-[url(../assets/banner2.jpg)] bg-cover bg-center bg-no-repeat text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto flex justify-around items-center p-4 h-[200px]  ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-full border border-black">
            <FaUniversity className="text-4xl text-amber-500" />
          </div>
          <h2 className="font-bold text-4xl">1921</h2>
          <h3 className="font-semibold text-xl">Founded</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-full border border-black">
            <FaUserShield className="text-4xl text-amber-500" />
          </div>
          <h2 className="font-bold text-4xl">2000 +</h2>
          <h3 className="font-semibold text-xl">Faculty Members</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-full border border-black">
            <FaUsers className="text-4xl text-amber-500" />
          </div>
          <h2 className="font-bold text-4xl">37000 +</h2>
          <h3 className="font-semibold text-xl">Regular Students</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-gray-100 p-6 rounded-full border border-black">
            <FaSchool className="text-4xl text-amber-500" />
          </div>
          <h2 className="font-bold text-4xl">134</h2>
          <h3 className="font-semibold text-xl">
            Constituent & Affiliated Colleges
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
