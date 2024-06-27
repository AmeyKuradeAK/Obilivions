import React from "react";
import Hookman from "./Hookman";
import SkinWalker from "./SkinWalker";
import InfoMain from "./InfoMain";

const MainInfo = () => {
  return (
    <div className="flex flex-col sm:max-2xl:flex sm:max-2xl:flex-col sm:max-2xl:mt-10 mt-5">
      <div>
        <InfoMain />
      </div>
      <div className="sm:max-2xl:flex sm:max-2xl:justify-start">
        <Hookman />
      </div>
      <div className="sm:max-2xl:flex sm:max-2xl:justify-end">
        <SkinWalker />
      </div>
    </div>
  );
};

export default MainInfo;
