/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
//For Choosing a Device.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean

import React, { useContext, useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddDeviceContext } from "../../state/contexts/AddDeviceContext";

const DeviceTypeModal = (props) => {
  const [loader, setLoader] = useState(false);
  const { deviceType, switchDevice } = useContext(AddDeviceContext);
  // Formik initial values ... this is the initial form state
  let initialValues = {
    name: "",
    location: "",
  };

  // Yup validation schema... this is for form validation
  const validationSchema = Yup.object({});

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  return (
    <motion.section
      variants={authLeft}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        },
      }}
      className={`w-full h-screen bg-[#121212B2] shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center `}
      onClick={props.toggleDevice}
    >
      {deviceType.deviceName}
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundDark border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <div className="w-full text-center sm:mt-14">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            Welcome James
          </p>
          {/* <p className="mt-2">Let's help you get started, choose a device</p> */}
        </div>
        {/* Heading end */}

        <div className=" w-full border border-white bg-white text-black h-[70px] text-center cursor-pointer flex items-center justify-center rounded-lg font-semibold">
          <a href="https://tronix.africa/" target="_blank">
            Click here to get started!!!
          </a>
          {/* <div
            className="border border-white bg-white text-black w-full h-[70px] text-center cursor-pointer flex items-center justify-center rounded-lg font-semibold"
            onClick={() => {
              switchDevice("airsyn", "/connect_device");
            }}
          >
            Airsyn
          </div>
          <div
            className="border border-white bg-white text-black w-full h-[70px] text-center cursor-pointer flex items-center justify-center rounded-lg font-semibold"
            onClick={() => switchDevice("proxie", "/connect_device")}
          >
            Proxie
          </div> */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DeviceTypeModal;
