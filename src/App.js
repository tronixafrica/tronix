import { Routes, Route } from "react-router-dom";
import SingleDevice from "./components/Devices/SingleDevice";
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import Reports from "./pages/Reports";
import SignUp from "./pages/SignUp";
import Users from "./pages/users";

function App() {
  return (
    <div>
      <Routes>
        {/* start routes excluding the default layout */}
        {/* ROUTES GOES IN HERE */}
        <Route path="/signup" element={<SignUp />} />
        {/* end routes excluding the default layout */}

        {/* start routes using the default layout */}
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/devices" element={<Device />} />
          <Route path="/singledevice" element={<SingleDevice />} />
          <Route path="/users" element={<Users />} />
        </Route>
        {/* end routes using the default layout */}
      </Routes>
    </div>
  );
}

export default App;
