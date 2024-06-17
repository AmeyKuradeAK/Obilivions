import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Icons = () => {
  return (
    <div className="absolute bottom-[200px] left-[1250px]">
        <FaInstagram className="h-[60px] w-[60px] fill-[#200636] mb-10" />
        <FaFacebook className="h-[60px] w-[60px] fill-[#200636] mb-10" />
        <FaSquareXTwitter className="h-[60px] w-[60px] fill-[#200636]  mb-10" />
        <FaLinkedin className="h-[60px] w-[60px] fill-[#200636] mb-10" />
    </div>
  );
};

export default Icons;
