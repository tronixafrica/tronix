import React from "react";

export const TimeIntervalCard = () => {
  return (
    <>
      <div className="bg-[#121212] w-full border border-[#454545] rounded-lg sm:h-[80%] sm:ml-8 sm:w-full font-poppins text-base text-[white]">
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-[150%] p-6 sm:p-8">Time interval</h1>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Minutes
            </p>
          </div>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Hours
            </p>
          </div>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Days
            </p>
          </div>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Week
            </p>
          </div>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Month
            </p>
          </div>
          <div className="border-[#454545] border-t transition ease-in-out duration-300 hover:bg-[#D20202] hover:rounded-b-lg">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-3 sm:p-5 flex flex-row items-center">
              Year
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
