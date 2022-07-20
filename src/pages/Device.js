import DeviceCardComp from "../components/Devices/DeviceCardComp";
import { deviceItems } from "../../src/components/DataList/dummyData";
import MobDeviceCard from "../components/Devices/MobDeviceCard";
import { Link } from "react-router-dom";

const Device = () => {
  return (
    <>
      {/* Start of Device header */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="w-full border border-solid border-[#7A7878] flex-1 flex items-center justify-between p-4 rounded-lg px-6 bg-backgroundDark">
          <p className="text-white">40 Devices</p>
          <svg
            style={{ color: "#686868", width: "1.5rem", height: "1.5rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="w-full border border-solid border-[#7A7878] flex-1 p-4 rounded-lg flex items-center bg-backgroundDark px-6">
          <svg
            style={{ color: "#686868", marginRight: ".7rem" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-transparent text-white w-full"
          />
          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
      </div>
      {/* End of Device Header */}

      {/* Desktop Device Card Components */}
      <div className="hidden sm:block border border-solid border-[#454545] mt-6 rounded-lg px-6 p-4 bg-backgroundDark">
        {/* Start of Device List Items Header */}
        <div className=" flex items-center justify-between gap-2 py-4 text-white">
          <p>User Name</p>
          <p>Device Location</p>
          <p>Status</p>
          <p>Remove</p>
        </div>
        {/* End of Device List Items Header */}

        <div className="h-[25.63rem] overflow-auto scroll">
          {deviceItems.map((device, index) => (
            <div key={index}>
              <Link to="/singledevice">
                <DeviceCardComp device={device} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Device Card Components */}
      <div className="block sm:hidden mt-5 h-[25.63rem] overflow-auto scroll">
        {deviceItems.map((device, index) => (
          <div key={index}>
            <Link to="/singledevice">
              <MobDeviceCard device={device} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Device;
