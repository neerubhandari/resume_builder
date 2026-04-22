import { useState } from "react";
import Input from "../../components/Input";
import PersonalInfoSection from "../sections/PersonalInfoSection";
import SummarySection from "../sections/SummarySection";
import ExperienceSection from "../sections/ExperienceSection";

const ResumeForm = ({ handleChange, handleSubmit, formData }) => {
  const steps = [
    "PersonalInfo",
    "Summary",
    "Experience",
    "Education",
    "Projects",
    "Skills",
  ];
  const [step, setStep] = useState(0);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1"
    >
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
          <button
            className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        </div>
      </div>
      {step === 0 && (
        <PersonalInfoSection formData={formData} handleChange={handleChange} />
      )}
      {step === 1 && <SummarySection />}
      {step === 2 && <ExperienceSection />}

      <button
        type="submit"
        className="bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ResumeForm;
