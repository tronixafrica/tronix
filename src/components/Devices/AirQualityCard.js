import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "../../App.css";
import { AuthContext } from "../../state/contexts/AuthContext";
const AirQualityCard = (props) => {
  const { userProfile } = useContext(AuthContext);

  return (
    <>
      {/* Start of Air Quality Card */}
      <div className="w-full flex gap-8">
        <div className="w-full">
          {/* Start of Pollutant Card */}
          <div className="bg-backgroundDark w-full p-4 sm:h-[350px] rounded-lg border border-[#686868]">
            <div className="flex font-poppins justify-between mb-3 px-3">
              <p className="font-semibold text-lg font-poppins text-white">
                Pollutants
              </p>
              <p className="font-semibold text-lg font-poppins text-backgroundRed">
                Unsafe
              </p>
            </div>
            <hr className="border border-[#e2b6b6]" />

            <div
              className="h-[250px] w-full mt-4 p-2 flex gap-2"
              style={{ zIndex: "1000" }}
            >
              {/* First Item */}
              <div className="border border-backgroundRed bg-backgroundRed sm:w-[30%] w-full rounded-lg flex items-center justify-center">
                <div className="text-center font-poppins text-white space-y-2 ">
                  <p className="text-sm">CO2</p>
                  <p className="text-xl font-semibold">0.33</p>
                  <p className="text-sm">UNSAFE</p>
                </div>
              </div>
              {/* Second Item */}
              {/* Carousel Items */}
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="w-[34.38rem] overflow-hidden"
              >
                <SwiperSlide>
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        className="border border-[#059D1D] bg-[#059D1D] w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto"
                        key={i}
                      >
                        <div className="text-center font-poppins text-white space-y-2">
                          <p className="text-sm">CO2</p>
                          <p className="text-xl font-semibold">0.33</p>
                          <p className="text-sm">SAFE</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        className="border border-[#059D1D] bg-[#059D1D] w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto"
                        key={i}
                      >
                        <div className="text-center font-poppins text-white space-y-2">
                          <p className="text-sm">CO2</p>
                          <p className="text-xl font-semibold">0.33</p>
                          <p className="text-sm">SAFE</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        className="border border-[#059D1D] bg-[#059D1D] w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto"
                        key={i}
                      >
                        <div className="text-center font-poppins text-white space-y-2">
                          <p className="text-sm">CO2</p>
                          <p className="text-xl font-semibold">0.33</p>
                          <p className="text-sm">SAFE</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* End of Pollutant Card */}

          {/* Start of Device Details Card */}
          <div className="flex sm:flex-row flex-col sm:h-[10.63rem] mt-5 gap-3">
            <div className="w-full border border-[#686868] bg-backgroundDark text-white font-poppins p-4 rounded-lg">
              <p className="font-semibold text-lg mb-2">Details</p>
              <hr className="mb-2 border border-[#686868]" />
              <div className="flex font-poppins justify-between">
                <p className="text-sm font-semibold">Name of device</p>
                <p className="text-sm font-semibold">Location</p>
              </div>
              <div className="flex font-poppins justify-between">
                <p className="text-sm font-thin capitalize">
                  {
                    userProfile?.device?.airsyn[`${props.deviceName}`]
                      .deviceName
                  }
                </p>
                <p className="text-sm font-thin">
                  {" "}
                  {
                    userProfile?.device?.airsyn[`${props.deviceName}`]
                      .deviceLocation
                  }
                </p>
              </div>
              <div className="flex font-poppins justify-between mt-4">
                <p className="text-sm font-semibold">ID NUMBER</p>
                <p className="text-sm font-semibold">Group</p>
              </div>
              <div className="flex font-poppins justify-between">
                <p className="text-sm font-thin">123456789</p>
                <p className="text-sm font-thin">Air Quality</p>
              </div>
            </div>
            <div className="sm:w-[60%] w-full  border border-[#686868] bg-backgroundDark text-white p-2 pb-24 space-y-3 rounded-lg px-4">
              <div className="flex items-center justify-center">
                <img src="/images/sun_logo.svg" width={70} alt="" />
              </div>
              <div className="flex font-poppins justify-between">
                <p className="font-extrabold text-2xl">32&#176;C</p>
                <p className="font-bold text-[#f5f5f5]">Sunny</p>
              </div>
              <p className="text-center uppercase font-poppins text-sm font-semibold">
                port harcourt
              </p>
            </div>
          </div>
        </div>
        {/* End of Details Service Card */}

        {/* Start of Notification Tab */}
        <div className="w-[40%] hidden sm:block h-[33.5rem] overflow-auto scroll">
          <div className=" bg-backgroundDark text-white p-4 rounded-lg">
            <div className="flex items-center font-poppins justify-between px-3">
              <p className="text-3xl font-semibold text-backgroundRed">
                unsafe
              </p>
              <p className="w-[30px] h-[30px] border border-solid border-red-600 rounded-full bg-backgroundRed"></p>
            </div>
            <hr className="mt-3 border border-[#686868]" />
            <div className="text-2xl font-poppins font-semibold mt-4 px-3">
              Notifications
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="px-3 mt-4 pt-3 font-poppins border-t border-[#686868]">
                <p className="text-sm">High level of co2 detected</p>
                <p className="font-thin text-xs">5mins ago</p>
              </div>
            ))}
          </div>
        </div>
        {/* End of Notification Tab */}
      </div>
    </>
  );
};

export default AirQualityCard;
