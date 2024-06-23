import React from "react";
import Obi from "../../Images/Main.png";
import Icons from "../../Base/Icons";

const Navbar = () => {
  return (
    //Navbar Beginning
    //Made flex main nav and used Column
    <nav className="bg-navbar-3 sm:max-xl:flex flex-col sm:max-xl:w-auto sm:max-xl:h-auto sm:max-xl:size-max">
      {/* Below used justify between to arrange "Text", "Logo" and Social Icons in a Row and in 3 columns */}
      <div className="flex sm:max-xl:justify-between">
        {/* Column Flex we used 3 flex boxes 1st empty box 2nd with Text and 3rd with empty box */}
        <div className="sm:max-xl:flex sm:max-xl:justify-between">
          {/* Flex box with Column where 1st column empty div 2nd Column Text div and 3rd Column empty div */}
          <div className="sm:max-xl:flex-col sm:max-xl:justify-evenly ml-40 font-Main xl:text-5xl">
            <h1>India's</h1>
            <h1>Upcoming</h1>
            <h1>eSports Team</h1>
          </div>
        </div>
        <div className="size-96 sm:max-xl:flex sm:max-xl:justify-center">
          
          <img src={Obi} alt="Team Logo" srcset="" />
          
        </div>
        <div className="sm:max-xl:justify-end">
          <Icons />
        </div>
      </div>
      <div className="sm:max-xl:w-auto sm:max-xl:h-auto">
        <p>&nbsp;</p>
      </div>
    </nav>
  );
};

export default Navbar;
