import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/contexts/AuthContext";
import { HeaderContext } from "../../state/contexts/HeaderContext";
import RoundWithPlus from "../icons/RoundWithMinus";
import AddDeviceModal from "../Modals/AddDeviceModal";
import AddUserModal from "../Modals/AddUserModal";
import AlertModal from "../Modals/AlertModal";
import ConfirmationModal from "../Modals/ConfirmationModal";
import DeviceTypeModal from "../Modals/DeviceTypeModal";

const DashboardComponent = () => {
  const [onDisplay, setOnDisplay] = useState(false);
  const [onAddDevice, setOnAddDevice] = useState(false);
  const [onAddUser, setOnAddUser] = useState(false);
  const [alertDisplay, setAlertDisplay] = useState(false);
  const { userProfile } = useContext(AuthContext);
  const { dipsatchPageTitle } = useContext(HeaderContext);

  // instance of Navigate hook
  const navigate = useNavigate();

  // routing to other routes
  const handleRoute = (route, action, title) => {
    // routing to the desired route
    navigate(route);

    // dispatching the title of the header,
    // depending on the route
    dipsatchPageTitle({
      type: action,
      pageTitle: title,
    });
  };
  console.log(userProfile?.device, "user devices");
  const devicesArr = [];
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

  const toggleDevice = () => {
    setOnAddDevice(!onAddDevice);
  };

  const deleteNOtification = () => {};
  return (
    <div>
      {onDisplay && (
        <ConfirmationModal
          display={onDisplay}
          onCallConfirmationModal={() => setOnDisplay(false)}
          heading="Notification Details"
          message="A new device Razor drill was added by James Charles 20 minutes ago."
          leftButtonText="cancel"
          rightButtonText="delete"
          onClickLeftButton={() => setOnDisplay(false)}
          onClickRightButton={() => setAlertDisplay(deleteNOtification)}
        />
      )}
      <AlertModal display={alertDisplay} />
      {onAddDevice && (
        <DeviceTypeModal display={onAddDevice} toggleDevice={toggleDevice} />
      )}
      {/* <AddDeviceModal
        display={onAddDevice}
        onCallAddDeviceModal={() => setOnAddDevice(false)}
      /> */}
      <AddUserModal
        display={onAddUser}
        onCallAddUserModal={() => setOnAddUser(false)}
      />
      {/* START OF TAILWIND DIV */}
      <div className="bg-backgroundGrey p-0 m-0 box-border h-[80%] w-full flex flex-row justify-between">
        <div className="h-full w-[100%] bg-backgroundGrey flex flex-row justify-between">
          {/* DIV HOLDING CARDS DIV AND DEVICES+USERS DIV */}
          <div className="flex flex-col  sm:w-[69%] w-full">
            {/* TOTAL DEVICES + TOTAL USERS CARDS DIV */}
            <div className="flex h-[20%] overflow-y-scroll sm:overflow-hidden flex-row justify-between">
              <ul
                class="nav nav-tabs w-full flex justify-between flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
                id="tabs-tab"
                role="tablist"
              >
                <li
                  class="nav-item w-[70%] mr-1 sm:w-[48%]"
                  role="presentation"
                >
                  <a
                    href="#tabs-home"
                    class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-transparent
      focus:border-transparent
      active
    "
                    id="tabs-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-home"
                    role="tab"
                    aria-controls="tabs-home"
                    aria-selected="true"
                  >
                    <div className="h-full transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212] w-[100%] p-[2rem] cursor-pointer rounded-lg border border-solid border-[#777]">
                      <div className="flex flex-row justify-between">
                        <h1 className="font-raleway text-base text-[#D4D4D4]">
                          TOTAL DEVICES
                        </h1>
                        <p onClick={toggleDevice}>{<RoundWithPlus />}</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <h1 className="font-poppins text-[150%] mr-[1rem] text-[#D4D4D4] font-semibold">
                          {devicesArr.length}
                        </h1>
                        <p className="text-[70%] text-[#D4D4D4]">12 ON</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  class="nav-item w-[70%] ml-1 sm:w-[48%]"
                  role="presentation"
                >
                  <a
                    href="#tabs-profile"
                    class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-transparent
      focus:border-transparent
    "
                    id="tabs-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-profile"
                    role="tab"
                    aria-controls="tabs-profile"
                    aria-selected="false"
                  >
                    <div className="h-full transition ease-in-out duration-300 hover:bg-backgroundRed bg-backgroundDark w-[100%] p-[2rem] cursor-pointer rounded-lg border border-solid border-[#777]">
                      <div className="flex flex-row justify-between">
                        <h1 className="font-raleway text-base text-[#D4D4D4]">
                          TOTAL USERS
                        </h1>
                        <p onClick={() => setOnAddUser(true)}>
                          {<RoundWithPlus />}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <h1 className="font-poppins text-[150%] mr-[1rem] text-[#D4D4D4] font-semibold">
                          30
                        </h1>
                        <p className="text-[70%] text-[#059D1D]">6 Online</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* END OF TOTAL DEVICES + TOTAL USERS CARDS DIV */}
            {/* DEVICES+USERS DIV */}
            <div class="tab-content" id="tabs-tabContent">
              {/* DEVICES DIV */}
              <div
                class="tab-pane fade show active"
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
              >
                <div className="bg-[#121212] h-[32rem] mt-[4%] p-[1rem] border border-[#777] rounded-lg">
                  <div className="p-3 overflow-auto scroll h-[28rem]">
                    <h1 className="text-[160%] font-poppins text-[#D4D4D4] mb-[20px] ml-[8px]">
                      Devices
                    </h1>
                    {devicesArr
                      .sort((a, b) =>
                        a.deviceLocation > b.deviceLocation ? 1 : -1
                      )
                      .map((device) => (
                        <div
                          className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:border-none hover:bg-[#D20202] bg-[#121212] cursor-pointer"
                          key={device.deviceName}
                          onClick={() => {
                            device?.deviceType === "proxie"
                              ? handleRoute(
                                  `/proxydevice/${device.deviceName}`,
                                  "DISPLAY_DEVICE_NAME",
                                  `${device?.deviceName}`
                                )
                              : handleRoute(
                                  `/singledevice/${device.deviceName}`,
                                  "DISPLAY_DEVICE_NAME",
                                  `${device?.deviceName}`
                                );
                          }}
                        >
                          <div className="flex-1">
                            <h1 className="font-poppins text-[#D4D4D4] flex flex-col text-[100%]">
                              {device?.deviceName}
                            </h1>
                            <p className="font-poppins text-[#777] text-[70%]">
                              {device?.deviceLocation}
                            </p>
                            <p className="font-poppins text-[#777] text-[70%]">
                              {device?.deviceType}
                            </p>
                          </div>
                          <div className="flex-1 text-end">
                            <h1
                              className={`font-poppins ${
                                device?.deviceState === "on"
                                  ? "text-[#059D1D]"
                                  : "text-textGrey"
                              } text-[100%]`}
                            >
                              {device?.deviceState}
                            </h1>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* END OF DEVICES DIV */}
              {/* USERS DIV */}
              <div
                class="tab-pane fade"
                id="tabs-profile"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab"
              >
                <div className="bg-[#121212] h-[32rem] mt-[4%] p-[1rem] border border-[#777] rounded-lg">
                  <div className="p-3 overflow-auto scroll h-[28rem]">
                    <h1 className="text-[160%] font-poppins text-[#D4D4D4] mb-[20px] ml-[8px]">
                      Users
                    </h1>
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20,
                    ].map((i) => (
                      <div className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212]">
                        <div>
                          <h1 className="font-poppins text-[#D4D4D4] flex flex-col text-[100%]">
                            Austin is connected to a device
                          </h1>
                          <p className="font-poppins text-[#777] text-[70%]">
                            5 mins ago
                          </p>
                        </div>
                        <div>
                          <div className="bg-[green] w-1 h-1 p-2 mr-6 rounded-[100%]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* END OF USERS DIV */}
            </div>
            {/* END OF DEVICES+USERS DIV */}
          </div>
          {/* END OF DIV HOLDING CARDS DIV AND DEVICES+USERS DIV */}
          {/* START OF NOTIFICATIONS DIV */}
          <div className="bg-backgroundDark h-[40rem] w-[29%] p-[1rem] hidden sm:block border border-[#777] rounded-lg">
            <div className="p-2 overflow-auto scroll h-[100%]">
              <h1 className="text-[160%] font-poppins text-textAuthGrey mb-[20px] ml-[8px]">
                Notifications
              </h1>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((i) => (
                <div className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212]">
                  <div
                    className="cursor-pointer"
                    onClick={() => setOnDisplay(true)}
                  >
                    <h1 className="font-poppins text-[#D4D4D4] flex flex-col text-[100%]">
                      New device added
                    </h1>
                    <p className="font-poppins text-[#777] text-[70%]">
                      5 mins ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* END OF NOTIFICATIONS DIV */}
        </div>
      </div>
      {/* END OF TAILWIND DIV */}
    </div>
  );
};

export default DashboardComponent;
