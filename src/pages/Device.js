/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import DeviceCardComp from "../components/Devices/DeviceCardComp";
import MobDeviceCard from "../components/Devices/MobDeviceCard";
import GoToTop from "../components/GoToTop/GoToTop";
import DeviceTypeModal from "../components/Modals/DeviceTypeModal";
import { AuthContext } from "../state/contexts/AuthContext";

const Device = () => {
  const [onDisplay, setOnDisplay] = useState(false);
  // const [onConnect, setOnConnect] = useState(false);
  // const [deviceName, setDeviceName] = useState("");
  // const [val, setVal] = useState("");
  // const [allDevice, setAllDevice] = useState("");

  const { userProfile } = useContext(AuthContext);

  // const [onShow, setOnShow] = useState(false);

  console.log(userProfile?.device, "user devices");
  const devicesArr = [];
  // const [filteredData, setfilteredData] = useState(devicesArr);
  const prx = userProfile?.device?.proxie || {};
  const asn = userProfile?.device?.airsyn || {};

  // Check if object is null or undefined

  Object.values(prx).map((item, index) => {
    console.log(item, "item sss");
    return devicesArr.push(item);
  });
  Object.values(asn).map((item, index) => {
    console.log(item, "item sss");
    return devicesArr.push(item);
  });

  console.log(devicesArr, "deviceArrrtt");

  // const handleSearch = (value) => {
  //   let result = [];
  //   result = devicesArr?.filter((data) => {
  //     return data?.deviceName.includes(value);
  //   });
  //   setfilteredData(result);
  // };

  // useEffect(() => {
  //   console.log(val, "rrrrruu");
  //   console.log(devicesArr, "yyyyyyyy");
  //   const handleSearch = (value) => {
  //     let result = [];
  //     result = devicesArr?.filter((data) => {
  //       return data?.deviceName.includes(value);
  //     });
  //     setfilteredData(result);
  //   };
  //   handleSearch(val);
  // }, []);

  // useEffect(() => {
  //   handleSearch(val);
  // }, [val]);

  const toggleDevice = () => {
    console.log("This is an iframe", onDisplay);
    setOnDisplay(!onDisplay);
  };

  // check device type and display the connection modal
  // function setDeviceType(deviceName) {
  //   console.log(deviceName, "device");
  //   setOnDisplay(false);
  //   setDeviceName(deviceName);
  //   setOnConnect(true);
  // }

  return (
    <>
      {onDisplay && (
        <DeviceTypeModal
          display={onDisplay}
          toggleDevice={toggleDevice}
          // onCallAddDeviceModal={() => setOnDisplay(false)}
          // onClickAirsynButton={() => {
          //   setDeviceType("airsyn");
          // }}
          // onClickProxieButton={() => {
          //   setDeviceType("proxie");
          // }}
        />
      )}
      {/* <ConnectDeviceModal
        display={onConnect}
        onCallAddDeviceModal={() => setOnConnect(false)}
        deviceName={deviceName}
        onGoBack={() => {
          setOnConnect(false);
          setOnDisplay(true);
        }}
      /> */}

      {/* {onShow && <IFrameModals toggleDevice={toggleDevice} display={onShow} />} */}

      {/* Start of Device header */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="w-full border border-solid border-[#7A7878] flex-1 flex items-center justify-between p-4 rounded-lg px-6 bg-backgroundDark">
          <p className="text-white">{devicesArr.length} Devices</p>
          <div className="cursor-pointer" onClick={toggleDevice}>
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
        </div>
        <div className="w-full p-2 border border-solid border-[#7A7878] flex-1 rounded-lg flex items-center bg-backgroundDark px-6">
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
            // value={val}
            placeholder="Search"
            className="border-none bg-transparent p-2 text-white w-full"
            // onChange={(event) => {
            //   setVal(event.target.value);
            // }}
          />
          {/* <svg
            style={{ color: "white", transform: "rotate(90deg)" }}
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
          </svg> */}
        </div>
      </div>
      {/* End of Device Header */}

      {/* Desktop Device Card Components */}
      <div className="hidden sm:block border border-solid border-[#454545] mt-6 rounded-lg px-6 p-4 bg-backgroundDark">
        {/* Start of Device List Items Header */}
        <div className=" flex items-center justify-between gap-2 py-4 text-white">
          <p className="flex-1">Device Name</p>
          <p className="flex-1">Device Location</p>
          <p className="flex-1">Device Type</p>
          <p className="flex-1">Status</p>
          <p>Remove</p>
        </div>
        {/* End of Device List Items Header */}
        {/* if (searchDevice === "") {
                return device;
              } else if (
                device?.deviceName
                  .toLowerCase()
                  .includes(searchDevice.toLowerCase())
              ) {
                return device;
              } */}
        {/* device.deviceName.includes(searchDevice */}
        <div className="h-[25.63rem] overflow-auto scroll">
          {devicesArr
            .sort((a, b) => (a.deviceLocation > b.deviceLocation ? 1 : -1))
            .map((device) => {
              console.log(device, "ppppp");
              return (
                <div key={device.deviceName}>
                  <DeviceCardComp device={device} />
                </div>
              );
            })}
        </div>
      </div>

      {/* Mobile Device Card Components */}
      <div className="block sm:hidden mt-5 h-[25.63rem] overflow-auto scroll">
        {devicesArr
          .sort((a, b) => (a.deviceLocation > b.deviceLocation ? 1 : -1))
          .map((device) => (
            <div key={device.deviceName}>
              <MobDeviceCard device={device} />
            </div>
          ))}
      </div>
      <GoToTop />
    </>
  );
};

export default Device;
