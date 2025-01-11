import React from "react";
import img1 from "../assets/man.jpg";
import Image from "next/image";

const AboutPrincipel = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4 p-6">
      <div className="w-[30%]">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <!-- Image Section --> */}

          <div className="relative w-full h-60 mb-2">
            <Image src={img1} alt="Principal" layout="fill" objectFit="cover" />
          </div>

          {/* <!-- Content Section --> */}
          <div className="text-center px-2 pb-4">
            <h3 className="text-base font-bold text-gray-800">
              সিদ্দিক জোবায়ের
            </h3>
            <p className="text-gray-600 text-xs mt-2"> সম্মানিত অধ্যক্ষ</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] bg-white border-2 shadow-md rounded-lg p-8">
        <h2 className="font-semibold text-xl">
          Message from the Vice Chancellor
        </h2>
        <p>Respected members of the university community,</p>
        <p>
          Welcome to the official website of the University of Dhaka. It is an
          honor for me to serve as the Vice Chancellor of University of Dhaka
          and I hope that this website provides you with the necessary
          information that will meet your academic, research, and administrative
          needs.&nbsp; Established in 1921, the University of Dhaka has always
          been an integral part of the history of Bangladesh. In every critical
          juncture of the nation’s journey, be it the ...
        </p>
      </div>
    </div>
  );
};

export default AboutPrincipel;
