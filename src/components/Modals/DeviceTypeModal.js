//For Choosing a Device.

// Props:
// heading: string
// message: string
// status: string is "success" or "error"
// ButtonText: string
// onCallAddDeviceModal: function
// onClickButton: function
// display: boolean

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Loader from "../Auth/Loader/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";

const DeviceTypeModal = (props) => {
  const [loader, setLoader] = useState(false);
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
      className={`w-full h-screen shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallAddDeviceModal}
    >
      <motion.div
        variants={scaleUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-between w-[320px] min-h-[200px] sm:w-[450px] sm:min-h-[300px] border rounded-lg bg-backgroundDark border-[#686868] p-5 sm:p-7 shadow-[0px_0px_20px_15px_#8705051f]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading start */}
        <div className="w-full text-center mt-14">
          <p className="font-bold font-raleway  text-textGreyLight text-xl">
            Welcome James
          </p>
          <p className="mt-2">Let's help you get started, choose a device</p>
        </div>
        {/* Heading end */}

        <div className="flex gap-4 w-full">
          <div
            className="border border-white bg-white text-black w-full h-[70px] text-center cursor-pointer flex items-center justify-center rounded-lg font-semibold"
            onClick={() => {
              props.onClickAirsynButton();
            }}
          >
            Airsyn
          </div>
          <div
            className="border border-white bg-white text-black w-full h-[70px] text-center cursor-pointer flex items-center justify-center rounded-lg font-semibold"
            onClick={() => {
              props.onClickProxieButton();
            }}
          >
            Proxie
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DeviceTypeModal;
