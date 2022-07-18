import React from "react";

const WifiCard = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Start of Wifi Information Card */}
      <div className="border border-backgroundDark bg-backgroundDark w-full sm:w-[50%] h-[425px] rounded-lg p-6 text-white space-y-8">
        <p className="text-center text-base font-semibold">Wifi Information</p>
        <div className="mt-4">
          <p className="font-semibold">SSID</p>
          <div className="border border-[#686868] w-full p-3 mt-3">
            Select Device Group
          </div>
        </div>
        <div>
          <p className="font-semibold">Password</p>
          <input
            className="border border-[#686868] w-full p-3 mt-3 bg-transparent"
            type="text"
            placeholder="Enter Password"
          />
          <p className="text-center mt-5">Wireless Access Point</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="border border-[#686868] p-2 px-4 rounded-tl-lg rounded-bl-lg text-sm font-semibold hover:bg-[#404040] focus:bg-[#404040] cursor-pointer">
            On
          </div>
          <div className="border border-[#686868] p-2 px-4 rounded-tr-lg rounded-br-lg text-sm font-semibold hover:bg-[#404040] focus:bg-[#404040] cursor-pointer">
            Off
          </div>
        </div>
      </div>
      {/* End of Wifi Information Card */}
    </div>
  );
};

export default WifiCard;
