"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { FaUniversity, FaBook, FaChalkboardTeacher } from "react-icons/fa";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Detect scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu state

  return (
    <div>
      <nav
        className={`py-4 top-0 absolute bg-transparent w-full z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "hidden bg-gray-800/80 shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              Rajbari Govt College
            </h2>
          </div>
          {/* Desktop Navbar */}
          <div className="hidden md:flex">
            <ul className="flex gap-4 font-semibold cursor-pointer text-white">
              <li>HOME</li>
              <li>ADMINISTRATION</li>
              <li>CO CURRICULUM</li>
              <li>HOSTEL</li>
              <li>LIBRARY & SPOTS</li>
              <li>FACULTY</li>
              <li>GALLERIES</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800/80 shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-white font-semibold">
          <li>HOME</li>
          <li>ADMINISTRATION</li>
          <li>CO CURRICULUM</li>
          <li>HOSTEL</li>
          <li>LIBRARY & SPOTS</li>
          <li>FACULTY</li>
          <li>GALLERIES</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      <Carousel arrows>
        {/* First Slide */}
        <div>
          <div className="relative h-screen bg-[url('../assets/hero1.jpg')] bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white text-center px-4 md:px-8 pt-16">
              <h2 className="text-4xl font-bold mb-4">
                Welcome to Our University
              </h2>
              <p className="text-lg mb-4">
                Discover a place of academic excellence, vibrant community, and
                opportunities for growth.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div>
          <div className="relative h-screen bg-[url('../assets/hero2.jpg')] bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-white text-center px-4 md:px-8 pt-16">
              <h2 className="text-4xl font-semibold mb-4">
                Welcome to the University of Dhaka
              </h2>
              <p className="mb-4 text-lg">
                On the first day of July 1921, the University of Dhaka opened
                its doors to students with Sir P.J. Hartog as its first
                Vice-Chancellor.
              </p>
              <div className="space-y-2">
                <h3 className="flex items-center justify-center text-xl">
                  <FaUniversity className="mr-2" /> Departments: 83
                </h3>
                <h3 className="flex items-center justify-center text-xl">
                  <FaUniversity className="mr-2" /> Institutes: 13
                </h3>
                <h3 className="flex items-center justify-center text-xl">
                  <FaUniversity className="mr-2" /> Research Centers: 54
                </h3>
              </div>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div>
          <div className="relative h-screen bg-[url('../assets/hero3.jpg')] bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white text-center px-4 md:px-8 pt-16">
              <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg mb-4">
                Become part of a legacy of leaders, innovators, and
                changemakers. Together, we shape the future.
              </p>
              <div className="flex justify-center space-x-4">
                <h3 className="flex items-center text-xl">
                  <FaBook className="mr-2" /> Academic Programs
                </h3>
                <h3 className="flex items-center text-xl">
                  <FaChalkboardTeacher className="mr-2" /> World-Class Faculty
                </h3>
              </div>
              <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
