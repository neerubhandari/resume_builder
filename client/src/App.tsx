import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumeBuilderApp from "./pages/App";
import RegisterUser from "./pages/RegisterUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-resume" element={<ResumeBuilder />} />
        <Route path="/app" element={<ResumeBuilderApp />} />
        <Route path="sign-up" element={<RegisterUser />} />
      </Routes>
    </div>
  );
};

export default App;
