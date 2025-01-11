import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main footer section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-4">
        <div className="mb-4 lg:mb-0">
          <h2>Logo</h2>
          <p>Telephone: 01309113488</p>
          <p>Fax: 02 478808019</p>
          <p>email: rajbarigovt.college@yahoo.com</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h2 className="font-bold text-lg mb-2">ACADEMIC LINKS</h2>
          <ul className="text-sm text-blue-500 space-y-1">
            <li>HSC Students Corner</li>
            <li>NU Students Corner</li>
            <li>Teachers Corner</li>
            <li>Employees Corner</li>
            <li>Teachers’ Vacant Details</li>
            <li>Employees’ Vacant Details</li>
          </ul>
        </div>
        <div className="mb-4 lg:mb-0">
          <h2 className="font-bold text-lg mb-2">IMPORTANT LINKS</h2>
          <ul className="text-sm text-blue-500 space-y-1">
            <li>শিক্ষামন্ত্রণালয় মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর মাউশি নোটিস</li>
            <li>University Grants Commission</li>
            <li>BANBEIS</li>
            <li>NAEM</li>
            <li>NCTB</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">FOLLOW US</h2>
          <div className="flex space-x-4 text-blue-500">
            <FaFacebook className="text-3xl" />
            <FaTwitter className="text-3xl" />
            <FaInstagram className="text-3xl" />
            <FaLinkedin className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom footer section */}
      <div className="flex flex-col lg:flex-row justify-between bg-gray-900 p-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="flex gap-6 items-center mb-4 lg:mb-0">
            <p className="text-sm font-semibold">
              © 2025 Rajbari Govt College.
            </p>
            <p className="text-sm">Developed by: Khaled Ahmed Nayeem</p>
          </div>
          <div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg font-semibold text-sm">
              Admin Panel
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
