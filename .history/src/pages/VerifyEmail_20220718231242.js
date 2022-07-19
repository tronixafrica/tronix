import React from "react";
import EmailImage from "../../src/components/Auth/EmailImage/EmailImage";

const VerifyEmail = () => {
  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="flex flex-col items-center space-y-7 w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center">
            Verify Your Email Address
          </h2>
          {/* End of header */}
          <div>
            <EmailImage />
          </div>
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
