import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import ConfirmationModal from "../Modals/ConfirmationModal";

const DeviceCardComp = ({ device }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#717171] border-solid hover:bg-backgroundRed hover:text-white hover:border-none text-[#FEFDFD] text-sm">
      <ConfirmationModal
        display={onDisplay}
        onCallConfirmationModal={() => setOnDisplay(false)}
        heading="Remove Devices"
        message="Are you sure you want to remove Razor from your devices?"
        leftButtonText="cancel"
        rightButtonText="remove"
        onClickLeftButton={() => setOnDisplay(false)}
      />
      {/* Start of List of Devices Card */}
      <Link to="/singledevice">
        <p>{device?.name}</p>
      </Link>
      <p>{device?.loc}</p>
      <p>{device?.stat}</p>
      <p className="mr-4 cursor-pointer" onClick={() => setOnDisplay(true)}>
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
