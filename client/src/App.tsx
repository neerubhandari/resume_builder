import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumeBuilderApp from "./pages/App";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-resume" element={<ResumeBuilder />} />
        <Route path="/app" element={<ResumeBuilderApp />} />
      </Routes>
    </div>
  );
};

export default App;
