import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import LogIn from "./pages/LogIn";
import Reports from "./pages/Reports";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        {/* start routes excluding the default layout */}
        {/* ROUTES GOES IN HERE */}
        {/* end routes excluding the default layout */}

        {/* This route does not use the default layout */}
        {/* Auth routes starts */}
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* Auth routes ends */}

        {/* start routes using the default layout */}
        <Route index element={<Main />} />
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/devices" element={<Device />} />
        </Route>
        {/* end routes using the default layout */}
      </Routes>
    </div>
  );
}

export default App;
