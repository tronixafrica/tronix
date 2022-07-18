import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      {/* Start of Auth page */}
      <div className="flex h-screen justify-between w-full bg-backgroundDark">
        {/* start of Left hand side background image */}
        <div className="h-full w-1/3 bg-red-500"></div>
        {/* end of Left hand side background image */}
        {/* start of right hand side form*/}
        <div className="h-full w-2/3 bg-blue-500"></div>
        {/* end of right hand side form*/}
        <Outlet />
      </div>
      {/* End of Auth page */}
    </>
  );
};

export default Auth;
