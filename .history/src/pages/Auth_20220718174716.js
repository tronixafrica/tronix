import React from "react";
import "../components/Auth/auth.css";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      {/* Start of Auth page */}
      <div className="flex h-full w-full bg-backgroundDark text-textAuthGrey">
        {/* start of Left hand side background image */}
        <div className="h-screen hidden md:flex w-1/3 pt-7 justify-center auth relative">
          <div>
            <img src="/logo/TronixLogo.png" alt="" className="" />
          </div>
        </div>
        {/* end of Left hand side background image */}
        {/* start of right hand side form*/}
        <div className="h-screen w-full md:w-2/3 bg-backgroundDark">
          {/* start auth page route content */}
          <Outlet />
          {/* end auth page route content */}
        </div>
        {/* end of right hand side form*/}
      </div>
      {/* End of Auth page */}
    </>
  );
};

export default Auth;
