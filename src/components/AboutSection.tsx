import React from "react";
import Image from "next/image";
import collegeImg from "../assets/college.jpg";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl">Welcome to University of Dhaka</h2>
        <p>
          On the first day of July 1921 the University of Dhaka opened its doors
          to students with Sir P.J. Hartog as the first Vice-Chancellor of the
          University. The University was set up in a picturesque part of the
          city known as Ramna on 600 acres of land.The University started its
          activities with 3 Faculties,12 Departments, 60 teachers, 877 students
          and 3 dormitories (Halls of Residence) for the students. At present
          the University consists of 13 Faculties, 83 Departments, 12
          Institutes, 20 residential halls, 3 hostels and more than 56 Research
          Centres. The number of students and teachers has risen to about 37018
          and 1992 respectively.The main purpose of the University was to create
          new areas of knowledge and disseminate this knowledge to the society
          through its students. Since its inception the University has a
          distinct character of having distinguished scholars as faculties who
          have enriched the global pool of knowledge by making notable
          contributions in the fields of teaching and research.
        </p>
        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white mt-4">
          Read More
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Image
          src={collegeImg}
          alt="college image"
          height={400}
          width={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutSection;
