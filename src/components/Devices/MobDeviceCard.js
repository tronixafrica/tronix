import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../Modals/ConfirmationModal";

const MobDeviceCard = ({ device }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="border font-poppins border-solid border-[#717171] mt-4 mr-2 rounded-lg bg-backgroundDark text-white text-sm cursor-pointer"
      onClick={() => {
        device?.deviceType === "proxie"
          ? navigate(`/proxydevice/${device?.deviceName}`)
          : navigate(`/singledevice/${device?.deviceName}`);
      }}
    >
      <ConfirmationModal
        display={onDisplay}
        onCallConfirmationModal={() => setOnDisplay(false)}
        heading="Remove Devices"
        message="Are you sure you want to remove Razor from your devices?"
        leftButtonText="cancel"
        rightButtonText="remove"
        onClickLeftButton={() => setOnDisplay(false)}
      />
      <div className="flex items-center justify-between border-b border-solid border-[#717171] p-3">
        <p className="flex-1 font-poppins">Name Of Device</p>
        <p className="flex-1 text-end">{device?.deviceName}</p>
      </div>
      <div className="flex items-center justify-between p-3 border-b border-solid border-[#717171]">
        <p className="flex-1 font-poppins">Location</p>
        <p className="flex-1 text-end">{device?.deviceLocation}</p>
      </div>
      <div className="flex items-center justify-between font-poppins p-3 border-b border-solid border-[#717171]">
        <p>Device Type</p>
        <p>{device?.deviceType}</p>
      </div>
      <div className="flex items-center font-poppins justify-between p-3 border-b border-solid border-[#717171]">
        <p>Status</p>
        <p className="text-[#717171] font-poppins">{device?.deviceState}</p>
      </div>
      <div className="flex items-center justify-between p-3 border-b font-poppins border-solid border-[#717171]">
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
