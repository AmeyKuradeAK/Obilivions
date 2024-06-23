import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Icons = () => {
  return (
    <div className="flex flex-col justify-center ite h-full px-8">
      <a href="#" className="mb-4 text-gray-600 hover:text-gray-800">
        <FaInstagram class="h-6 w-6 fill-current" />
      </a>
      <a href="#" className="mb-4 text-gray-600 hover:text-gray-800">
        <FaFacebook class="h-6 w-6 fill-current" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaSquareXTwitter class="h-6 w-6 fill-current" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <FaLinkedin class="h-6 w-6 fill-current" />
      </a>
    </div>
  );
};

export default Icons;
