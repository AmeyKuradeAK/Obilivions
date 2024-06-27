import React from "react";

const Hookman = () => {
  return (
    <div className="flex flex-col border-2 sm:max-2xl:flex sm:max-2xl:flex-col sm:max-2xl:border-4 justify-between sm:max-2xl:w-2/3 w-full sm:max-2xl:h-60 bg-navbar-2 sm:max-2xl:rounded-xl rounded-md mt-5">
      <div className="sm:max-2xl:flex flex sm:max-2xl:justify-between justify-between">
        <div className="sm:max-2xl:flex flex sm:max-2xl:flex-col flex-col">
          <div>
            <h1 className="text-2xl font-bold mt-5 ml-4">Hookman</h1>
          </div>
          <div className="mt-1 ml-4 text-left">
            <div>
              <p>(IGL of Team)</p>
            </div>
            <div>
              <p>87% headshot rate</p>
            </div>
          </div>
        </div>
        <div className="sm:max-2xl:mr-20 sm:max-2xl:w-16 sm:max-2xl:h-16 w-4 h-4 sm:max-2xl:mt-20">
          <img
            className="sm:max-2xl:w-16 sm:max-2xl:h-16 w-4 h-4"
            src="https://i.ibb.co/0y6T0bN/hookman.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hookman;
