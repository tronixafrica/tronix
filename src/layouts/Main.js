import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import BottomNav from "../components/Navbar/BottomNav";
import SideNav from "../components/Navbar/SideNav";
import "../App.css";
import FloatingIcon from "../components/AddDevicesFloatingIcon/FloatingIcon";
import MobileSideNav from "../components/Navbar/MobileSideNav";
import { AuthContext } from "../state/contexts/AuthContext";
import { useContext } from "react";
import LaunchLoader from "../components/Modals/LaunchLoader";

const Main = () => {
  const { userProfile } = useContext(AuthContext);
  console.log(userProfile, "userProfile");

  return (
    <>
      {userProfile.account ? (
        <div className="flex min-h-[100vh] relative">
          {/* start desktop sidenav */}
          <SideNav />
          {/* end desktop sidenav */}

          <MobileSideNav />

          {/* start header and page route content */}
          <div className="sm:ml-[15rem] w-full relative bg-backgroundGrey">
            {/* start header */}
            <Header />
            {/* end header */}

            {/* start page route content */}
            <div className="h-full bg-backgroundGrey px-6">
              <Outlet />
            </div>
            {/* end page route content */}

            {/* start bottom nav */}
            <BottomNav />
            {/* end bottom nav */}

            {/* start float icon */}
            <FloatingIcon />
            {/* end float icon */}
          </div>
          {/* end header and page route content */}
        </div>
      ) : (
        <LaunchLoader display={true} />
      )}
      <LaunchLoader display={true} />
    </>
  );
};

export default Main;
