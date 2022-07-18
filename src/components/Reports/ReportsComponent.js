import React from "react";

const ReportsComponent = () => {
  return (
    <div className="bg-[#464646] flex flex-row h-[100vh] w-full">
      {/* TIME FRAME + POLLUTANT CONTAINER STARTS HERE */}
      <div className="bg-[#464646] flex flex-col justify-between h-[90%] w-[70%]">
        {/* TIME FRAME DIV STARTS HERE */}
        <div className="bg-[#121212] border border-[#777] rounded-lg flex flex-col justify-between h-[35%] w-[95%] font-poppins text-base text-[white] p-8">
          <h1 className="text-[150%]">Time frame</h1>
          <div className="bg-[#121212] flex flex-row justify-between">
            <div className="w-[50%]">
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
                }}
              />
            </div>
            <div className="w-[50%]">
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
                }}
              />
            </div>
          </div>
        </div>
        {/* TIME FRAME DIV ENDS HERE */}
        {/* POLLUTATNTS DIV STARTS HERE */}
        <div className="bg-[#121212] border border-[#777] rounded-lg flex flex-col h-[45%] w-[95%] font-poppins text-base text-[white]">
          <h1 className="text-[150%] p-8">Pollutant</h1>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              CO<sub>2</sub>
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              CO
            </p>
          </div>
          <div className="border-[#777] border-t flex flex-row items-center transition ease-in-out duration-300 hover:bg-[#D20202] hover:rounded-b-lg">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              PM1
            </p>
          </div>
        </div>
        {/* POLLUTATNTS DIV ENDS HERE */}
        <button className="bg-[#D20202] rounded-md font-poppins text-base text-[white] p-3 w-[95%]">
          Dowload Report
        </button>
      </div>
      {/* time frame + POLLUTANT CONTAINER ends HERE */}
      {/* TIME INTERVAL DIV STARTS HERE */}
      <div className="bg-[#121212] border border-[#777] rounded-lg flex flex-col h-[78%] w-[40%] font-poppins text-base text-[white]">
        <h1 className="text-[150%] p-8">Time interval</h1>
        <div className="flex flex-col justify-between h-full">
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Minutes
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Hours
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Days
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Week
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Month
            </p>
          </div>
          <div className="border-[#777] border-t transition ease-in-out duration-300 hover:bg-[#D20202]">
            <p className="font-poppins text-[#D4D4D4] text-[120%] p-5 flex flex-row items-center">
              Year
            </p>
          </div>
        </div>
      </div>
      {/* TIME INTERVAL DIV ENDS HERE */}
    </div>
  );
};

export default ReportsComponent;
