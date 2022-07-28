import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import BottomNav from "../components/Navbar/BottomNav";
import SideNav from "../components/Navbar/SideNav";
import "../App.css";
import FloatingIcon from "../components/AddDevicesFloatingIcon/FloatingIcon";
import MobileSideNav from "../components/Navbar/MobileSideNav";
import { AuthContext } from "../state/contexts/AuthContext";
import { useContext, useEffect, useReducer, useState } from "react";
import LaunchLoader from "../components/Modals/LaunchLoader";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { ACTIONS as PROFILE_ACTIONS } from "../state/actions/userProfileActions";
import { db } from "../firebase/firebase";
import UserAccountProfileReducer, {
  initialProfileState,
} from "../state/reducers/UserAccountProfileReducer";

const Main = () => {
  // launch loader state
  const [launchLoaderState, setLaunchLoaderState] = useState(true);
  const { userProfile, authState, fetchProfileAndUpdateState } =
    useContext(AuthContext);
  const [_, dipsatchUserProfile] = useReducer(
    UserAccountProfileReducer,
    initialProfileState
  );
  console.log(userProfile, authState, "userProfile");
  const navigate = useNavigate();

  // Set launch loader state time out
  useEffect(() => {
    setTimeout(() => {
      userProfile && setLaunchLoaderState(false);
    }, 2000);
  }, [launchLoaderState]);

  // Check if user is authenticated
  useEffect(() => {
    if (authState) {
      fetchProfileAndUpdateState(authState.displayName);
    } else {
      setLaunchLoaderState(true);
    }
  }, [authState]);

  // Check for update on airsyn and proxie in db
  const airsynStateRef = ref(
    db,
    "/users/" + authState?.displayName + "/device/airsyn"
  );
  const proxieStateRef = ref(
    db,
    "/users/" + authState?.displayName + "/device/proxie"
  );
  useEffect(() => {
    return () => {
      onValue(airsynStateRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data, "airsyn");
          // Dispatch to userAccountProfileReducer
          dipsatchUserProfile({
            type: PROFILE_ACTIONS.UPDATE_AIRSYN,
            userProfile: data,
          });
          console.log("data", authState?.displayName);
        } else {
          console.log("no data", authState?.displayName);
          return null;
        }
      });
    };
  }, []);
  useEffect(() => {
    return () => {
      onValue(proxieStateRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data, "proxie");
          // Dispatch to userAccountProfileReducer
          dipsatchUserProfile({
            type: PROFILE_ACTIONS.UPDATE_PROXIE,
            userProfile: data,
          });
          console.log("data", authState?.displayName);
        } else {
          console.log("no data", authState?.displayName);
          return null;
        }
      });
    };
  }, []);

  return (
    <>
      {!launchLoaderState ? (
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
        <LaunchLoader display={launchLoaderState} />
      )}
    </>
  );
};

export default Main;
