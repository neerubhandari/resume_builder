import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/Dashboard";
import HomePage from "./components/Homepage";
import EditResume from "./pages/EditResume";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import CreateResume from "./pages/CreateResume";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="/sign-up" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Route>

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
