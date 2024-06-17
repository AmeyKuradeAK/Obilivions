import React from "react";
import Obi from "../Images/Main.png";
import Icons from "../Base/Icons";

const Hero = () => {
  return (
    <div className="flex bg-navbar justify-center bg-blend-normal shadow-xl shadow-[#b7aaaa]">
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center">
          <div className="absolute left-[90px] text-6xl font-Main">
            <h1 className="mb-9">India's</h1>
            <h1 className="mb-9">Upcoming</h1>
            <h1 className="mb-9">eSports Team</h1>
          </div>
        </div>
        <div className="flex justify-center ml-auto mr-auto w-[85%] mt-[5%]">
          <img className="size-11/12 place-items-center" src={Obi} />
        </div>
        <div className="flex">
          <div className="ml-8 mt-40">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
