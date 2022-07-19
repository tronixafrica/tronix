import React, { useState, useRef } from "react";
import EmailImage from "../../src/components/Auth/EmailImage/EmailImage";
import Loader from "../components/Auth/Loader/Loader";
import Button from "../components/Button/Button";
import Button from "../components/Button/Button";

const VerifyEmail = () => {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const [loader, setLoader] = useState(false);

  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="flex flex-col items-center space-y-7 w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway">
            Verify Your Email Address
          </h2>
          {/* End of header */}
          {/* Email image starts */}
          <div>
            <EmailImage />
          </div>
          {/* Email image ends */}

          <div>
            <p className="text-center text-[#DBDBDBB5]">
              We have sent a six digit code to tronic123@gmail.com Enter the
              code below to verify your email adress.
            </p>
          </div>
          {/* Verify inputt  block starts */}
          <div>
            <form className="space-x-3">
              <input
                ref={firstInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
              <input
                ref={secondInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
              <input
                ref={thirdInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
              <input
                ref={fourthInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
              <input
                ref={fifthInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
              <input
                ref={sixthInput}
                type="tel"
                name="email"
                className=" w-[40px] text-center h-[40px] font-normal bg-backgroundGrey bg-clip-padding border border-solid border-[#dadadac2] rounded-md transition ease-in-out  placeholder:text-textGrey  focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
            </form>
          </div>
          {/* Verify inputt  block ends */}
          {/* Start of countdown timer */}
          <div>
            <h2 className="text-2xl font-bold text-center font-raleway">
              {/* Countdown timer */}
              1:00
            </h2>
          </div>
          {/* End of countdown timer */}

          {/* Start of didn't get a code? */}
          <div className="flex transition-[border] duration-300 w-full  justify-center">
            <p className="">Didn't get a code?</p>
            <p className="pl-2 transition-[border] text-backgroundRed duration-300 cursor-pointer hover:underline hover:underline-offset-1">
              Resend code{" "}
            </p>
          </div>
          {/* End of didn't get a code? */}

          {/* Start of button block */}
          <Button disabled={false} type="button">
            {loader ? <Loader /> : "click to Verify"}
          </Button>

          {/* End of button block */}
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;
