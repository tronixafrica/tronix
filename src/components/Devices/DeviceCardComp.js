import React from "react";
import "../../../src/App.css";

const DeviceCardComp = ({ device }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#777] border-solid hover:bg-backgroundRed hover:text-white hover:border-none text-textAuthGrey text-sm">
      {/* Start of List of Devices Card */}
      <p>{device?.name}</p>
      <p>{device?.loc}</p>
      <p className="">{device?.stat}</p>
      <p className="mr-4">
        <svg
          style={{ width: "1.5rem", height: "1.5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </p>
      {/* End of List of Devices Card */}
    </div>
  );
};

export default DeviceCardComp;
