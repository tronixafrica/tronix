import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "../../App.css";
import { AuthContext } from "../../state/contexts/AuthContext";
import PulseLoader from "../Modals/PulseLoader";
const AirQualityCard = (props) => {
  const [unsafes, setUnSafes] = useState([]);
  const [overallStatus, setOverallStatus] = useState();
  const { userProfile } = useContext(AuthContext);
  // const pollutantsThreshold = [
  //   ["Acetane", 400],
  //   ["Alcohol", 60],
  //   ["Benzene", 40],
  //   ["CH4", 40],
  //   ["CL2", 40],
  //   ["CO", 10],
  //   ["CO2", 10],
  //   ["H2", 15],
  //   ["LPG", 8],
  //   ["NOX", 40],
  //   ["Nh4", 40],
  //   ["O3", 40],
  //   ["PM1", 500],
  //   ["PM10", 500],
  //   ["PM25", 500],
  //   ["Propane", 800],
  //   ["Toulene", 140],
  // ];

  // Play the speech if there is a pollutant
  // useEffect(() => {
  //   return () =>
  //     setInterval(() => {
  //       playSpeech();
  //     }, 5000);
  // }, [unsafes.length]);

  const playSpeech = async () => {
    if (unsafes.length >= 1) {
      const audio = new Audio("/speech.mp3");
      // await audio.play();
      console.log("Playing speech", audio);
    }
  };
  const asn =
    userProfile?.device?.airsyn[`${props.deviceName}`].deviceReadings || {};
  let readings = [];
  // let readingsArr = [];
  Object.values(asn).map((item, index) => {
    console.log(item, "item sss");
    return readings.push(item);
  });
  console.log(readings, "readings");

  // Compare the values of the readings with their threshold values
  function compare(min, max, pollutant) {
    let threshold = max >= min;
    if (!threshold) {
      // setUnSafes
      if (unsafes.includes(pollutant)) {
      } else {
        setUnSafes([...unsafes, pollutant]);
      }
      console.log("this is the max pollutants", pollutant);
    } else {
      if (unsafes.includes(pollutant)) {
        let pollutantIndex = unsafes.indexOf(pollutant);
        const newArray = unsafes;
        console.log(newArray, "this is the new array here wenesjhjsdhjh");
        let updatedPollutants = newArray.splice(pollutantIndex, 1);
        setUnSafes(updatedPollutants);
        console.log(newArray, "this is updated array here wenesjhjsdhjh");

        console.log("this is the min pollutants", pollutant);
      }
    }
    console.log(unsafes, "unsafes pollutant guys");
    return threshold;
  }

  // Object.entries(readings[0]&&readings[0] || {}).map((item, index) => {
  //   console.log(item, "item arr");
  //   return readingsArr.push(item);
  // });
  // console.log(readingsArr, "readingsArr");

  // const chunkSize = 6;
  // let chunkedReadings = [];
  // for (let i = 0; i < readingsArr.length; i += chunkSize) {
  //   const chunk = readingsArr.slice(i, i + chunkSize);
  //   chunkedReadings.push(chunk);
  // }
  // console.log(chunkedReadings, "chunkedReadings");

  return (
    <>
      {/* Start of Air Quality Card */}
      <div className="w-full flex gap-8 ">
        <div className="w-full">
          {/* Start of Pollutant Card */}
          <div className="bg-backgroundDark w-full p-4 sm:h-[350px] rounded-lg border border-[#686868]">
            <div className="flex justify-between mb-3 px-3">
              <p className="font-semibold text-lg text-white">Pollutants</p>
              <p
                className={`text-lg font-semibold ${
                  unsafes.length >= 1 ? "text-backgroundRed" : "text-[#059D1D]"
                } capitalize`}
              >
                {unsafes.length >= 1 ? "Unsafe" : "Safe"}
              </p>
            </div>
            <hr className="border border-[#e2b6b6]" />

            <div
              className="h-[250px] w-full mt-4 p-2 flex gap-2"
              style={{ zIndex: "1000" }}
            >
              {/* First Item */}
              <div
                className={`border  ${
                  unsafes.length >= 1
                    ? "border-backgroundRed bg-backgroundRed"
                    : "bg-[#059D1D] border-[#059D1D]"
                }  sm:w-[30%] w-full rounded-lg flex items-center justify-center`}
              >
                <div className="text-center text-white space-y-2 ">
                  <p className="text-xl font-semibold capitalize">
                    overall status
                  </p>
                  <p className="font-thin text-sm">
                    {unsafes.length >= 1 ? "Unsafe" : "Safe"}
                  </p>
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
                    {/* First pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["CO"], 10, "CO")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["CO"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["CO"], 10, "CO")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* second pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["CO2"], 10, "CO2")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["CO2"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["CO2"], 10, "CO2")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* third pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["H2"], 15, "H2")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">H2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["H2"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["H2"], 15, "H2")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* fourth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["PM1"], 500, "PM1")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["PM1"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["PM1"],
                            500,
                            "PM1"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* fifth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["PM25"], 500, "PM25")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["PM25"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["PM25"],
                            500,
                            "PM25"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* sixth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["PM10"], 500, "PM10")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["PM10"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["PM10"],
                            500,
                            "PM10"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {/* seventh pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["CL2"], 40, "CL2")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["CL2"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["CL2"], 40, "CL2")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* eight pollutant */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0]["Propane"],
                          800,
                          "Propane"
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Propane"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["Propane"],
                            800,
                            "Propane"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* ninth pollutant */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0]["Benzene"],
                          40,
                          "Benzene"
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Benzene"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["Benzene"],
                            40,
                            "Benzene"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* tenth pollutant */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0]["Toulene"],
                          140,
                          "Toulene"
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Toulene"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["Toulene"],
                            140,
                            "Toulene"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* eleventh pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["O3"], 40, "O3")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">O3</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["O3"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["O3"], 40, "O3")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* twelveth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["Nh4"], 40, "Nh4")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Nh4"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["Nh4"], 40, "Nh4")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {/* thirteenth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["LPG"], 8, "LPG")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["LPG"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["LPG"], 8, "LPG")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* fourteenth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["NOX"], 40, "NOX")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["NOX"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["NOX"], 40, "NOX")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* fifteenth pollutant */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0]["Acetane"],
                          400,
                          "Acetane"
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Acetane"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["Acetane"],
                            400,
                            "Acetane"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* sixteenth pollutant */}
                    <div
                      className={`border ${
                        compare(
                          readings[0] && readings[0]["Alcohol"],
                          60,
                          "Alcohol"
                        )
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["Alcohol"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(
                            readings[0] && readings[0]["Alcohol"],
                            60,
                            "Alcohol"
                          )
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                    {/* seventeenth pollutant */}
                    <div
                      className={`border ${
                        compare(readings[0] && readings[0]["CH4"], 40, "CH4")
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CH4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0]["CH4"]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {compare(readings[0] && readings[0]["CH4"], 40, "CH4")
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
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
                    userProfile?.device?.airsyn[`${props?.deviceName}`]
                      .deviceName
                  }
                </p>
                <p className="text-sm font-thin">
                  {" "}
                  {
                    userProfile?.device?.airsyn[`${props?.deviceName}`]
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
            <div className="flex items-center justify-between px-3">
              <p
                className={`text-3xl font-semibold ${
                  unsafes.length >= 1 ? "text-backgroundRed" : "text-[#059D1D]"
                } capitalize`}
              >
                {unsafes.length >= 1 ? "Unsafe" : "Safe"}
              </p>
              {/* <p className="w-[30px] h-[30px] border border-solid border-red-600 rounded-full bg-backgroundRed"></p> */}
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
