import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp/SignUp";
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import Reports from "./pages/Reports";

function App() {
  return (
    <div>
      <Routes>
        {/* start routes excluding the default layout */}
        {/* ROUTES GOES IN HERE */}
        {/* Auth routes starts */}
        <Route path="/auth" element={<Auth />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        {/* Auth routes ends */}
        {/* end routes excluding the default layout */}

        {/* start routes using the default layout */}
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
