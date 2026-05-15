import { createContext, useContext, useState, type ReactNode } from "react";
import type { Template } from "../components/ResumeForm";

type TemplateContextType = {
  currentTemplate: Template;
  setCurrentTemplate: (template: Template) => void;
};

export const TemplateContext = createContext<TemplateContextType | null>(null);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [currentTemplate, setCurrentTemplate] = useState<Template>("classic");

  return (
    <TemplateContext.Provider value={{ currentTemplate, setCurrentTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
