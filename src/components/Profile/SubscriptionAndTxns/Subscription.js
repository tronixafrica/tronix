import React from "react";

const Subscription = () => {
  return (
    <div className=" w-full ">
      <article className="flex justify-between items-center mb-3 md:mb-5">
        <h2 className="text-textGreyLighter capitalize w-full pl-3 text-lg md:text-2xl font-bold font-raleway">
          Subscriptions
        </h2>
      </article>
      <div className=" w-full flex space-x-3">
        {/* White container */}
        <div className="bg-white rounded-xl min-h-20 w-full p-3 md:p-4 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-4 ">
          <article className="bg-red-300 rounded-lg w-32 p-2 md:p-3 flex justify-center items-center">
            <p className="text-red-500 font-bold">Sky Plus</p>
          </article>
          <article className="flex flex-col justify-between text-right lg:text-left">
            <p className="text-black font-bold capitalize text-sm md:text-base ">
              Company's ID
            </p>
            <p className="text-secondary-dark text-xs md:text-sm capitalize">
              Chevron Limited
            </p>
          </article>
          <article className="flex flex-col justify-between">
            <p className="text-black font-bold capitalize text-sm md:text-base">
              Started
            </p>
            <p className="text-secondary-dark text-xs md:text-sm capitalize">
              Chevron Limited
            </p>
          </article>
          <article className="flex flex-col justify-between text-right lg:text-left">
            <p className="text-black font-bold capitalize text-sm md:text-base">
              Valid untill
            </p>
            <p className="text-secondary-dark text-xs md:text-sm capitalize">
              Chevron Limited
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
