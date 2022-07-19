import React, { useRef } from "react";
import EmailImage from "../../src/components/Auth/EmailImage/EmailImage";

const VerifyEmail = () => {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="flex flex-col items-center space-y-7 w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center">
            Verify Your Email Address
          </h2>
          {/* End of header */}
          {/* Email image starts */}
          <div>
            <EmailImage />
          </div>
          {/* Email image ends */}
          {/* Verify inputt  block starts */}
          <div>
            <form>
              <input
                type="email"
                name="email"
                className=" w-[40px] px-4 py-2 h-[40px] font-normal bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                placeholder="0"
              />
            </form>
          </div>
          {/* Verify inputt  block ends */}

          <div>
            <p className="text-center text-[#DBDBDBB5]">
              We have sent a six digit code to tronic123@gmail.com Enter the
              code below to verify your email adress.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;
