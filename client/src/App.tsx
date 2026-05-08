import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/Dashboard";
import HomePage from "./components/Homepage";
import EditResume from "./pages/EditResume";
import CreateResume from "./components/CreateResume";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard/create-resume" element={<CreateResume />} />
          <Route path="/dashboard/edit-resume/:id" element={<EditResume />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
