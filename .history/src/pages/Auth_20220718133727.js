import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      {/* Start of Auth page */}
      <div className="flex h-screen w-full bg-backgroundDark">
        {/* start of Left hand side background image */}
        <div></div>
        {/* end of Left hand side background image */}
        <Outlet />
      </div>
      {/* End of Auth page */}
    </>
  );
};

export default Auth;
