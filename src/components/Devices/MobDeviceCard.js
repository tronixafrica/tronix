import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../Modals/ConfirmationModal";

const MobDeviceCard = ({ device }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  return (
    <div className="border border-solid border-[#717171] mt-4 mr-2 rounded-lg bg-backgroundDark text-white text-sm">
      <ConfirmationModal
        display={onDisplay}
        onCallConfirmationModal={() => setOnDisplay(false)}
        heading="Remove Devices"
        message="Are you sure you want to remove Razor from your devices?"
        leftButtonText="cancel"
        rightButtonText="remove"
        onClickLeftButton={() => setOnDisplay(false)}
      />
      <Link to="/singledevice">
        <div className="flex items-center justify-between border-b border-solid border-[#717171] p-3">
          <p>Name Of Device</p>
          <p>{device?.name}</p>
        </div>
        <div className="flex items-center justify-between p-3 border-b border-solid border-[#717171]">
          <p>Location</p>
          <p>{device?.loc}</p>
        </div>
        <div className="flex items-center justify-between p-3 border-b border-solid border-[#717171]">
          <p>Status</p>
          <p className="text-[#717171]">{device?.stat}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between p-3 border-b border-solid border-[#717171]">
        <p>Remove Device</p>
        <p className="cursor-pointer" onClick={() => setOnDisplay(true)}>
          <svg
            style={{ width: "1.5rem", height: "1.5rem", color: "#717171" }}
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
      </div>
    </div>
  );
};

export default MobDeviceCard;
