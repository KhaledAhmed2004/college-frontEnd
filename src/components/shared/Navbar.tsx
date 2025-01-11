"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "fixed bg-gray-800/80 shadow-lg" : "hidden bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Rajbari Govt College</h2>
        </div>
        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
