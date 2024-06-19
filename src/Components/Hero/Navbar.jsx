import React from "react";
import Obi from "../../Images/Main.png";
import Icons from "../../Base/Icons";

const Navbar = () => {
  return (
    //Navbar Beginning
    //Made flex main nav and used Column
    <nav className="bg-navbar sm:max-xl:flex flex-col">
      {/* Below used justify between to arrange "Text", "Logo" and Social Icons in a Row and in 3 columns */}
      <div className="flex justify-between">
        {/* Column Flex we used 3 flex boxes 1st empty box 2nd with Text and 3rd with empty box */}
        <div className="sm:max-xl:flex sm:max-xl:flex-col sm:max-xl:justify-between">
          {/* This is the empty div */}
          <div className="sm:max-xl:w-auto sm:max-xl:h-auto">
            <p>&nbsp;</p>
          </div>
          {/* Flex box with Column where 1st column empty div 2nd Column Text div and 3rd Column empty div */}
          <div className="sm:max-xl:flex sm:max-xl:justify-between">
            <div>
              <p>&nbsp;</p>
            </div>
            <div className="sm:max-xl:flex sm:max-xl:flex-col sm:max-xl:justify-between">
              <h1>India's</h1>
              <h1>Upcoming</h1>
              <h1>eSports Team</h1>
            </div>
            <div>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="sm:max-xl:w-auto sm:max-xl:h-auto">
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="sm:size-16">
          <img src={Obi} alt="Team Logo" srcset="" />
        </div>
        <div>
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
