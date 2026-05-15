import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TemplateProvider } from "./context/TemplateContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </BrowserRouter>
  </StrictMode>,
);
