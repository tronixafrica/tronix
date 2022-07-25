import React from "react";

import { TimeIntervalCard } from "./TimeIntervalCard";

const ReportsComponent = () => {
  return (
    <div className="bg-backgroundGrey w-full flex-row sm:flex h-full pb-10 ">
      {/* TIME FRAME + POLLUTANT CONTAINER STARTS HERE */}
      <div className="bg-backgroundGrey flex flex-col mb-10 justify-between h-[90%] w-full sm:w-[70%]">
        {/* TIME FRAME DIV STARTS HERE */}
        <div className="bg-backgroundDark border border-[#777] rounded-lg flex flex-col justify-between h-40 sm:h-[35%] w-full sm:w-full font-poppins text-base text-textGreyLighter p-5 sm:p-8">
          <h1 className="text-[150%]">Time frame</h1>
          <div className="bg-backgroundDark w-[95%] flex flex-row justify-between">
            <div className="w-[45%]">
              <p>From</p>
              <input
                type="date"
                id="date-start"
                min="2021-01-01"
                max="2099-12-31"
                name="datepicker"
                style={{
                  backgroundColor: "#464646",
                  borderRadius: "4px",
                  padding: "10px",
                  marginTop: "10px",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              />
            </div>
            <div className="w-[45%]">
              <p>To</p>
              <input
                type="date"
                id="date-end"
                min="2021-01-01"
                max="2099-12-31"
                name="datepicker"
                style={{
                  backgroundColor: "#464646",
                  borderRadius: "4px",
                  padding: "10px",
                  marginTop: "10px",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              />
            </div>
          </div>
        </div>
        {/* TIME FRAME DIV ENDS HERE */}
        <div className="w-full mt-8 sm:hidden">
          <TimeIntervalCard />
        </div>
        {/* POLLUTATNTS DIV STARTS HERE */}
        <div className="bg-backgroundDark border border-[#777] mt-8 rounded-lg flex flex-col h-[45%] w-full font-poppins text-base text-textGreyLighter">
          <h1 className="text-[150%] p-6 sm:p-8">Pollutant</h1>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-backgroundRed">
            <p className="font-poppins text-textGreyLighter text-[120%] p-3 sm:p-5 flex flex-row items-center">
              CO<sub>2</sub>
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-backgroundRed">
            <p className="font-poppins text-textGreyLighter text-[120%] p-3 sm:p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-[#777] border-t flex flex-row items-center transition ease-in-out duration-300 hover:bg-backgroundRed hover:rounded-b-lg">
            <p className="font-poppins text-textGreyLighter text-[120%] p-3 sm:p-5 flex flex-row items-center">
              PM1
            </p>
          </div>
        </div>
        {/* POLLUTATNTS DIV ENDS HERE */}
        <button className="bg-backgroundRed rounded-md font-poppins text-base text-textGreyLighter p-3 mt-8 w-full">
          Dowload Report
        </button>
      </div>
      {/* time frame + POLLUTANT CONTAINER ends HERE */}
      {/* TIME INTERVAL DIV STARTS HERE */}
      <div className="hidden sm:flex w-[30%]">
        <TimeIntervalCard />
      </div>
      {/* TIME INTERVAL DIV ENDS HERE */}
    </div>
  );
};

export default ReportsComponent;
