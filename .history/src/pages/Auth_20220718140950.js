import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      {/* Start of Auth page */}
      <div className="flex h-screen w-full bg-backgroundDark">
        {/* start of Left hand side background image */}
        <div className="h-screen w-1/3 bg-red-500 pt-7 flex">
          <div>
            <img src="/logo/TronixLogo.png" alt="" className="bg-blue-500" />
          </div>
        </div>
        {/* end of Left hand side background image */}
        {/* start of right hand side form*/}
        <div className="h-screen w-2/3 bg-blue-500">
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
