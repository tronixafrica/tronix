import React from "react";

const VerifyEmail = () => {
  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full bg-backgroundDark text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold mb-7 text-center">
            Verify Your Email Address
          </h2>
          {/* End of header */}
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;
