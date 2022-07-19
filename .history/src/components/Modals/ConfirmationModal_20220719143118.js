//For confirmation before proceeding with an action, e.g deleting a user, device etc.

import React, { useState } from "react";
import { authLeft } from "../../animations/animations";
import { scaleUp } from "../../animations/animations";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Loader from "../Auth/Loader/Loader";

const ConfirmationModal = (props) => {
  const [loader, setLoader] = useState(false);

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
      className={`w-full h-screen bg-[#000000cb] shadow-sm fixed inset-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallConfirmModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <motion.section
          variants={scaleUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-[450px] max-w-[450px] min-h-[300px] border rounded-lg bg-black border-[#686868] px-10 py-10 "
          onClick={(e) => e.stopPropagation()}
        >
          <article className="w-full flex justify-center mb-4 stroke-primary-light ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="t"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-bold">Confirm Device Removal</p>
          </article>
          <div className="flex space-x-3">
            {/* Login button starts */}
            <article className="flex items-center justify-between w-full mt-7">
              <button
                type="submit"
                className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-wider font-poppins`}
              >
                {loader ? <Loader /> : "Cancel"}
              </button>
            </article>
            {/* Login button ends */}
            {/* Login button starts */}
            <Button
              disabled={false}
              type="button"
              backgroundColor="backgroundRed"
              textColor="white"
              fontFamily="poppins"
            >
              {loader ? <Loader /> : "Confirm"}
            </Button>
            {/* Login button ends */}
          </div>
        </motion.section>
      </form>
    </motion.section>
  );
};

export default ConfirmationModal;
