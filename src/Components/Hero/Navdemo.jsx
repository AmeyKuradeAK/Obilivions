import React from "react";
import Obi from "../../Images/Main.png";
import Icons from "../../Base/Icons";

const Navdemo = () => {
  return (
    <nav className="sm:max-2xl:flex sm:max-2xl:items-center sm:max-2xl:justify-between sm:max-2xl:h-screen bg-navbar-3">
      <div className="sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center sm:max-2xl:h-full sm:max-2xl:px-8">
        <div className="sm:max-xl2:text-left font-Main sm:max-2xl:text-4xl">
          <p className="text-gray-800 text-center">India's</p>
          <p className="text-gray-800 text-center">Upcoming</p>
          <p className="text-gray-800 text-center">eSports Team</p>
        </div>
      </div>
      <div className="sm:max-2xl:flex sm:max-2xl:justify-center sm:max-2xl:items-center sm:max-2xl:h-full">
        <img src={Obi} alt="Company Logo" className="sm:max-2xl:h-96 sm:max-2xl:w-96 sm:max-2xl:rounded-full" />
      </div>
      <div className="sm:max-2xl:flex sm:max-2xl:flex-col sm:max-2xl:justify-center sm:max-2xl:items-center sm:max-2xl:h-full sm:max-2xl:px-8">
        <Icons />
      </div>
    </nav>
  );
};

export default Navdemo;
