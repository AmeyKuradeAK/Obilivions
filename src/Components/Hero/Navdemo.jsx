import React from "react";
import Obi from "../../Images/Main.png";
import Icons from "../../Base/Icons";

const Navdemo = () => {
  return (
    <nav className="sm:max-2xl:flex sm:max-2xl:items-center sm:max-2xl:justify-between sm:max-2xl:h-screen h-screen items-center justify-between bg-navbar-3 shadow-lg shadow-navbar rounded-b-xl">
      <div className="sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center sm:max-2xl:h-full sm:max-2xl:px-8">
        <div className="sm:max-xl2:text-left font-Main sm:max-2xl:text-4xl text-3xl mb-10">
          <p className="text-gray-800 text-center">India's</p>
          <p className="text-gray-800 text-center">Upcoming</p>
          <p className="text-gray-800 text-center">eSports Team</p>
        </div>
      </div>
      <div className="sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center sm:max-2xl:h-full mb-10 mt-36 sm:max-2xl:mt-0">
        <img
          src={Obi}
          alt="Company Logo"
          className="sm:max-2xl:h-96 sm:max-2xl:w-96 sm:max-2xl:rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-32 sm:max-2xl:mt-0">
          <Icons />
      </div>
    </nav>
  );
};

export default Navdemo;
