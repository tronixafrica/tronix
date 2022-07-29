import React from "react";

const SwitchProxy = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Start of Switch Card */}
      <div className="border border-backgroundDark bg-backgroundDark font-poppins w-full sm:w-[60%] h-[285px] rounded-lg p-6 mt-4 px-6 sm:px-16">
        {/* Start of Switch header */}
        <div className="border border-[#686868] w-full flex font-poppins justify-between mt-1 p-3 rounded-lg">
          <p className="text-white font-semibold font-poppins">Power</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 border border-green-700 border-solid bg-green-700 rounded-full"></div>
            <p className="text-white font-poppins font-semibold">ON</p>
          </div>
        </div>
        {/* End of Switch header */}

        {/* Start of Switch Button */}
        <div className="border border-[#212121] bg-[#212121] font-poppins w-[40%] sm:w-[20%] h-[100px] m-auto mt-11 flex items-center justify-center rounded-lg">
          <img
            className="cursor-pointer"
            src="/images/power_btn.svg"
            width={55}
            alt="switch button"
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchProxy;
