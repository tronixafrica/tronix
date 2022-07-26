import { Routes, Route } from "react-router-dom";
import SingleDevice from "./components/Devices/SingleDevice";
import Main from "./layouts/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import LogIn from "./pages/LogIn";
import Reports from "./pages/Reports";
import SignUp from "./pages/SignUp";
import Users from "./pages/users";
import SuccessPage from "./pages/SuccessPage";
import VerifyEmail from "./pages/VerifyEmail";
import TestSignUp from "./pages/testSignup";
//NOTE: remove this later
import ParentIframe from "./pages/ParentIframe";
import ChildIframe from "./pages/ChildIframe";
import NotificationsPage from "./pages/NotificationsPage";
import Profile from "./pages/Profile";
import AddDeviceModal from "./components/Modals/AddDeviceModal";

function App() {
  return (
    <div>

    
      <Routes>
        {/* start routes excluding the default layout */}
        {/* ROUTES GOES IN HERE */}
        <Route path="/sig" element={<TestSignUp />} />
        <Route path="/add_device" element={<AddDeviceModal />} />


        {/* end routes excluding the default layout */}

        {/* start routes using the default layout */}
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/devices" element={<Device />} />
          <Route path="/singledevice" element={<SingleDevice />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/iframe" element={<ParentIframe />} /> */}
          {/* <Route path="http://127.0.0.1:5500/index.html" element= {<ChildIframe />} /> */}
          {/* <Route path="http://192.168.4.1/" element={<ChildIframe />} /> */}
          <Route path="/notifications" element={<NotificationsPage />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* end routes using the default layout */}

        {/* This route does not use the default layout */}
        {/* Auth routes starts */}
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/auth/verify_email/:id" element={<VerifyEmail />} />
        <Route path="/auth/success/:id" element={<SuccessPage />} />

        {/* Auth routes ends */}
      </Routes>
    </div>
  );
}

export default App;
