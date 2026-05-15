import { useState } from "react";
import PersonalInfoSection from "../sections/PersonalInfoSection";
import SummarySection from "../sections/SummarySection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ProjectSection from "../sections/ProjectsSection";
import SkillSection from "../sections/SkillsSection";
import type { PersonalInfoErrors, ResumeFormData } from "../../types/resume";
import PanelsTopLeftIcon from "../../icons/PanelsTopLeftIcon";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";

type TemplateItem = {
  id: number;
  value: Template;
  title: string;
  description: string;
};
const templates: TemplateItem[] = [
  {
    id: 1,
    value: "classic",
    title: "Classic",
    description:
      "A clean, traditional resume format with clear sections and professional typography",
  },
  {
    id: 2,
    value: "modern",
    title: "Modern",
    description:
      "Sleek design with strategic use of color and modern font choices",
  },
  {
    id: 3,
    value: "minimal_image",
    title: "Minimal Image",
    description: "Minimal design with a single image and clean typography",
  },
  {
    id: 4,
    value: "minimal",
    title: "Minimal",
    description: "Ultra-clean design that puts your content front and center",
  },
];
export type Template = "classic" | "modern" | "minimal_image" | "minimal";

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
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  const handleNext = (): void => {
    const newErrors = validatePersonalInfo(formData.personalInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep((prev) => prev + 1);
    }
  };

  const handleTemplateChange = (template: Template) => {
    setFormData((prev) => ({
      ...prev,
      template,
    }));
    setShowTemplateModal(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1"
      >
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTemplateModal(!showTemplateModal)}
                className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg"
              >
                <PanelsTopLeftIcon />
                <span className="max-sm:hidden">Template</span>
              </button>
              {showTemplateModal && (
                <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm ">
                  <div className="bg-white w-full max-w-3xl rounded-2xl p-2">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        onClick={() => handleTemplateChange(template.value)}
                        className={`relative p-3 border rounded-md cursor-pointer transition-all mb-3 ${
                          formData.template === template.value
                            ? "border-blue-400 bg-blue-100"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {formData.template === template.value && (
                          <div className="absolute top-2 right-2">
                            <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">
                              ✓
                            </div>
                          </div>
                        )}

                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-800 capitalize">
                            {template.title}
                          </h4>

                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                            {template.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {step !== 0 && (
              <button
                type="button"
                className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false ${
                  step === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
              >
                <ChevronLeftIcon /> Previous
              </button>
            )}
            <button
              type="button"
              className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false ${
                isLastStep ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={isLastStep}
            >
              Next
              <ChevronRightIcon />
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
    </>
  );
};

export default ResumeForm;
