import React from "react";
import { FaUniversity, FaUserShield, FaUsers, FaSchool } from "react-icons/fa";

const StatisticSection = () => {
  return (
    <div className="relative bg-[url(../assets/banner2.jpg)] bg-cover bg-center bg-no-repeat text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto p-6 flex flex-wrap justify-center gap-8 md:gap-12 items-center h-auto md:h-auto">
        {/* Statistic Item */}
        <div className="flex flex-col justify-center items-center text-center w-40 sm:w-52">
          <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-8 rounded-full border border-black">
            <FaUniversity className="text-4xl sm:text-5xl text-amber-500" />
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mt-2">1921</h2>
          <h3 className="font-semibold text-lg md:text-xl">Founded</h3>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-40 sm:w-52">
          <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-8 rounded-full border border-black">
            <FaUserShield className="text-4xl sm:text-5xl text-amber-500" />
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mt-2">2000 +</h2>
          <h3 className="font-semibold text-lg md:text-xl">Faculty Members</h3>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-40 sm:w-52">
          <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-8 rounded-full border border-black">
            <FaUsers className="text-4xl sm:text-5xl text-amber-500" />
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mt-2">37000 +</h2>
          <h3 className="font-semibold text-lg md:text-xl">Regular Students</h3>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-40 sm:w-52">
          <div className="flex justify-center items-center bg-gray-100 p-6 sm:p-8 rounded-full border border-black">
            <FaSchool className="text-4xl sm:text-5xl text-amber-500" />
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mt-2">134</h2>
          <h3 className="font-semibold text-lg md:text-xl">
            Constituent & Affiliated Colleges
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
