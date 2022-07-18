import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import Reports from "./pages/Reports";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        {/* start routes excluding the default layout */}
        <Route path="/auth">
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* ROUTES GOES IN HERE */}
        {/* Auth routes starts */}

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
