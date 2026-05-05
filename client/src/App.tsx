import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import CreateResume from "./components/dashboard";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/create-resume" element={<CreateResume />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>
    </div>
  );
};

export default App;
