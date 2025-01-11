// "use client";
// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`py-4 top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
//         isScrolled ? "fixed bg-gray-800/80 shadow-lg" : "hidden bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div>
//           <h2 className="text-xl font-bold text-white">Rajbari Govt College</h2>
//         </div>
//         <div>
//           <ul className="flex gap-4 font-semibold cursor-pointer text-white">
//             <li>HOME</li>
//             <li>ADMINISTRATION</li>
//             <li>CO CURRICULUM</li>
//             <li>HOSTEL</li>
//             <li>LIBRARY & SPOTS</li>
//             <li>FACULTY</li>
//             <li>GALLERIES</li>
//             <li>CONTACT US</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`py-4 top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "fixed bg-gray-800/80 shadow-lg" : "hidden bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div>
          <h2 className="text-xl font-bold text-white">Rajbari Govt College</h2>
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
    </nav>
  );
};

export default Navbar;
