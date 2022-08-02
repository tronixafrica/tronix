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
import { setConsent } from "firebase/analytics";
import { Howl } from "howler";

const AirQualityCard = (props) => {

  const [unsafes, setUnSafes] = useState([]);
  const [overallStatus, setOverallStatus] = useState();
  const { userProfile } = useContext(AuthContext);
  const [ co, setCo ] = useState(true)
  const [ co2, setCo2 ] = useState(true)
  const [ p1, setP1 ] = useState(true)
  const [ p10, setP10 ] = useState(true)
  const [ cl2, setCl2 ] = useState(true)
  const [ p25, setP25 ] = useState(true)
  const [ p, setP ] = useState(true)
  const [ be, setBE ] = useState(true)
  const [ oz, setOz ] = useState(true)
  const [ t, setT ] = useState(true)
  const [ nh, setNh ] = useState(true)
  const [ lpg, setLpg ] = useState(true)
  const [ no, setNo ] = useState(true)
  const [ a, setA ] = useState(true)
  const [ al, setAl ] = useState(true)
  const [ sound, setSound ] = useState(0)
  const [ overalStatus, setoverallStatus ] = useState(false)

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
  
  const pollutant = {
    CO: 'CO',
    CO2: 'CO2',
    P1: 'P1',
    P25: 'P25',
    P10: 'P10',
    CL: 'CL',
    P: 'P',
    BE: 'BE',
    T: 'T',
    NH: 'NH',
    LPG: 'LPG',
    NO: 'NO',
    A: 'A',
    Al: 'Al',
    OZ: 'OZ'


  }
  // A: Acetone
  // al: Alcohol
  // be: Benzene
  // cl: CL2
  // co: co
  // CO2: CO2
  // lpg: lpg
  // nh: Nh4
  // no: NOX
  // oz: ozone
  // p: Propane
  // p1: PM1
  // p10: PM10
  // p25: pm2.5  
  // t:toulene
  // Play the speech if there is a pollutant
  // useEffect(() => {
  //   return () =>
  //     setInterval(() => {
  //       playSpeech();
  //     }, 5000);
  // }, [unsafes.length]);
  
  const myAudio = new Audio("/speech.mp3");

  const playSpeech = () => {
    if (typeof myAudio.loop == "boolean") {
      myAudio.loop = true;
      console.log("loop is a boolean");
    } else {
      myAudio.addEventListener(
        "ended",
        function () {
          myAudio.currentTime = 0;
          myAudio.play();
          console.log("loop is a function");
        },
        true
      );
    }
    myAudio.play();
  };

  const stopSpeech = () => {
    // const myAudio = new Audio("/speech.mp3");
    myAudio.removeAttribute("src", "/speech.mp3");
    myAudio.pause();
  };

  
  const play = (src) => {
    const sound = new Howl({
      src: ['/speech.mp3'],
      html5: true
    })

    sound.once('end', () => {
      sound.play()
    })

    sound.play()
    
  }

  const asn = userProfile?.device?.airsyn[`${props.deviceName}`].deviceReadings || {};
  const asnn = asn[Object.keys(asn)[Object.keys(asn).length - 1]] || {}
  // asn[Object.keys(device)[Object.keys(device).length - 1]]

  let readings = [];

  

  console.log('asna ===>>>>>>> na me', asn)
  console.log('asnn ===>>>>>>> na me', asnn)

  // let readingsArr = [];
  readings.push(asnn);
  console.log(readings, 'na the readings ooo');
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
    // console.log(unsafes, "unsafes pollutant guys");
    // return threshold;
  }



  useEffect(() => {
    console.log(userProfile, unsafes, 'the airsyn has changes')

    // CO
    if (readings[0].CO > 10) setCo(false) 
    else setCo(true)
    
    // CO2
    if (readings[0].CO2 > 20) setCo2(false)
    else setCo2(true)
    
    // P10
    if (readings[0].P10 > 500) setP10(false)
    else setP10(true)
    
    // P10
    if (readings[0].P1 > 500) setP1(false)
    else setP1(true)
    
    // P25
    if (readings[0].P25 > 500) setP25(false)
    else setP25(true)
    
    // CL
    if (readings[0].CL > 35) setCl2(false)
    else setCl2(true)
    
    // P
    if (readings[0].P > 800) setP(false)
    else setP(true)
    
    //BE
    if (readings[0].BE > 40) setBE(false)
    else setBE(true)
    
    //BE
    if (readings[0].OZ > 40) setOz(false)
    else setOz(true)
    
    //Toulene
    if (readings[0].T > 140) setT(false)
    else setT(true)

    //NH4
    if (readings[0].NH > 40) setNh(false)
    else setNh(true)
    
    // LPG
    if (readings[0].LPG > 8) setLpg(false)
    else setLpg(true)
    
    // NOX
    if (readings[0].NO > 40) setNo(false)
    else setNo(true)
    
    // ACETONE
    if (readings[0].A > 400) setA(false)
    else setA(true)
    
    // ALCOHOL
    if (readings[0].Al > 60) setAl(false)
    else setAl(true)
    
  }, [userProfile])

 


  return (
    <>
      {/* Start of Air Quality Card */}
      <div className="w-full flex gap-8 ">
        <div className="w-full">
          {/* Start of Pollutant Card */}
          {
            co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
            && a && al ? null : play()
          }
          <div className="bg-backgroundDark w-full p-4 sm:h-[350px] rounded-lg border border-[#686868]">
            <div className="flex justify-between mb-3 px-3">
              <p className="font-semibold text-lg text-white">Pollutants</p>
              <p
                className={`text-lg font-semibold ${
                  co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                  && a && al  ? "text-[#059D1D]" : "text-backgroundRed"
                } capitalize`}
              >
                {co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                && a && al  ? "Safe" : "Unsafe"}
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
                  co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                  && a && al
                    ? "bg-[#059D1D] border-[#059D1D]"
                    : "border-backgroundRed bg-backgroundRed"
                }  sm:w-[30%] w-full rounded-lg flex items-center justify-center`}
              >
                <div className="text-center text-white space-y-2 ">
                  <p className="text-xl font-semibold capitalize">
                    overall status
                  </p>
                  <p className="font-thin text-sm">
                    {co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                  && a && al ? "Safe" : "Unsafe"}
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
                {/* desktop pollutants cards */}
                {/* first slide */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid grid-cols-3 gap-2 mx-1">
                    {/* CO */}
                    <div
                      className={`border ${
                        co ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          { co ? 'Safe' : 'Unsafe' }
                        </p>
                      </div>
                    </div>

                    {/* CO2 */}
                    <div
                      className={`border ${
                        co2
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO2]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co2
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>


                    {/* PM1 */}
                    <div
                      className={`border ${
                        p1
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P1]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p1
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM2.5 */}
                    <div
                      className={`border ${
                        p25
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P25]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          { p25
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM10 */}
                    <div
                      className={`border ${
                        p10
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P10]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p10
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CL */}
                    <div
                      className={`border ${
                        cl2
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CL]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {cl2
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div> 
                </SwiperSlide>
                
                {/* SECOND SLIDE */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    
                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        p
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* BENZENE */}
                    <div
                      className={`border ${
                        be
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.BE]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {be
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        t
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.T]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {t
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div> 

                    {/* OZONE */}
                    <div
                      className={`border ${
                        oz
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.OZ]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {oz
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        nh
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NH]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {nh
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                       lpg
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.LPG]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {lpg
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div> 
                </SwiperSlide>  

                {/* third slide */}
                <SwiperSlide className="hidden sm:grid ">
                  <div className="border-none grid sm:grid-cols-3 grid-cols-2 gap-2 mx-1">
                    {/* NOX */}
                    <div
                      className={`border ${
                        no
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {no
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        a
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.A]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {a ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        al
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.Al]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {al
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </SwiperSlide>
                

                {/* mobile view */}

                {/* first slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* CO */}
                    <div
                      className={`border ${
                        co
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CO2 */}
                    <div
                      className={`border ${
                        co2
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CO2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CO2]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {co2
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>


                    {/* PM1 */}
                    <div
                      className={`border ${
                        p1
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM1</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P1]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p1
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* PM2.5 */}
                    <div
                      className={`border ${
                        p25
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM2.5</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P25]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p25
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </SwiperSlide>
                
                {/* second slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* PM10 */}
                    <div
                      className={`border ${
                        p10
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">PM10</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P10]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p10
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* CL */}
                    <div
                      className={`border ${
                        cl2
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">CL2</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.CL]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {cl2
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>


                    {/* PROPANE*/}
                    <div
                      className={`border ${
                        p
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Propane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {p
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* OZONE */}
                    <div
                      className={`border ${
                        oz
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">OZONE</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.OZ]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {oz
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                {/* third slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    {/* BENZENE */}
                    <div
                      className={`border ${
                        be
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Benzene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.P]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {be
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* TOULENE */}
                    <div
                      className={`border ${
                        t
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Toluene</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.T]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {t
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* NH4 */}
                    <div
                      className={`border ${
                        nh
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Nh4</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NH]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {nh
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* LPG */}
                    <div
                      className={`border ${
                        lpg
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">LPG</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.LPG]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {lpg
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* fourth slide */}
                <SwiperSlide className="sm:hidden grid">
                  <div className="border-none grid grid-cols-2 gap-2 mx-1">
                    
                    {/* NOX */}
                    <div
                      className={`border ${
                        no
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">NOX</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.NO]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {no
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ACETANE*/}
                    <div
                      className={`border ${
                        a
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Acetane</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.A]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {a
                            ? "Safe"
                            : "Unsafe"}
                        </p>
                      </div>
                    </div>

                    {/* ALCOHOL */}
                    <div
                      className={`border ${
                        al
                          ? "bg-[#059D1D] border-[#059D1D]"
                          : "bg-backgroundRed border-backgroundRed pollutant_glow"
                      } w-full h-[110px] rounded-lg flex items-center justify-center overflow-auto`}
                    >
                      <div className="text-center text-white space-y-2">
                        <p className="text-sm font-thin uppercase">Alcohol</p>
                        <p className="text-xl font-semibold">
                          {readings[0] && readings[0][pollutant.Al]}
                        </p>
                        <p className="text-sm font-thin uppercase">
                          {al
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
            <div className="w-full border border-[#686868] bg-backgroundDark text-white p-4 rounded-lg">
              <p className="font-semibold text-lg mb-2">Details</p>
              <hr className="mb-2 border border-[#686868]" />
              <div className="flex justify-between">
                <p className="text-sm font-semibold">Name of device</p>
                <p className="text-sm font-semibold">Location</p>
              </div>
              <div className="flex justify-between">
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
              <div className="flex justify-between mt-4">
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
              <div className="flex justify-between">
                <p className="font-extrabold text-2xl">32&#176;C</p>
                <p className="font-bold text-[#C0B6FA]">Rainy</p>
              </div>
              <p className="text-center uppercase text-sm font-semibold">
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
                  co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                  && a && al ? "text-[#059D1D]" : "text-backgroundRed"
                } capitalize`}
              >
                { co && co2 && p1 && p10 && p25 && cl2 && p && be && oz && t && nh && lpg && no
                  && a && al ? "Safe" : "Unsafe" }
              </p>
              {/* <p className="w-[30px] h-[30px] border border-solid border-red-600 rounded-full bg-backgroundRed"></p> */}
            </div>
            <hr className="mt-3 border border-[#686868]" />
            <div className="text-2xl font-semibold mt-4 px-3">
              Notifications
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div className="px-3 mt-4 pt-3 border-t border-[#686868]">
                <p className="text-sm font-thin">High level of co2 detected</p>
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
