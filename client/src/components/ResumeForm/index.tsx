import { useState } from "react";
import PersonalInfoSection from "../sections/PersonalInfoSection";
import SummarySection from "../sections/SummarySection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ProjectSection from "../sections/ProjectsSection";
import SkillSection from "../sections/SkillsSection";
import type { PersonalInfoErrors, ResumeFormData } from "../../types/resume";

type ResumeFormProps = {
  formData: ResumeFormData;
  setFormData: React.Dispatch<React.SetStateAction<ResumeFormData>>;
  validatePersonalInfo: (
    data: ResumeFormData["personalInfo"],
  ) => PersonalInfoErrors;
  setErrors: React.Dispatch<React.SetStateAction<PersonalInfoErrors>>;
  errors: PersonalInfoErrors;
  isCurrentlyWorking: boolean;
  setIsCurrentlyWorking: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ResumeForm = ({
  formData,
  setFormData,
  validatePersonalInfo,
  setErrors,
  errors,
  isCurrentlyWorking,
  setIsCurrentlyWorking,
  handleSubmit,
}: ResumeFormProps) => {
  const [step, setStep] = useState<number>(0);
  const isLastStep = step === 5;

  const handleNext = (): void => {
    const newErrors = validatePersonalInfo(formData.personalInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1"
    >
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false ${
              isLastStep ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={isLastStep}
          >
            Next
          </button>
          <button
            type="button"
            className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false ${
              step === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            Back
          </button>
        </div>
      </div>
      {step === 0 && (
        <PersonalInfoSection
          setErrors={setErrors}
          errors={errors}
          personalInfo={formData.personalInfo}
          setFormData={setFormData}
        />
      )}
      {step === 1 && (
        <SummarySection
          summaryInfo={formData.summary}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <ExperienceSection
          formData={formData.experience}
          setFormData={setFormData}
          isCurrentlyWorking={isCurrentlyWorking}
          setIsCurrentlyWorking={setIsCurrentlyWorking}
        />
      )}
      {step === 3 && (
        <EducationSection
          formData={formData.education}
          setFormData={setFormData}
        />
      )}
      {step === 4 && (
        <ProjectSection
          formData={formData.projects}
          setFormData={setFormData}
        />
      )}
      {isLastStep && (
        <SkillSection formData={formData.skills} setFormData={setFormData} />
      )}

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
