import React, { type ChangeEvent } from "react";
import EducationForm from "../EducationForm";
import type { ResumeFormData } from "../../types/resume";

type EducationSectionProps = {
  formData: ResumeFormData["education"];
  setFormData: React.Dispatch<React.SetStateAction<ResumeFormData>>;
};

const EducationSection = ({ formData, setFormData }: EducationSectionProps) => {
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          degreeName: "",
          institutionName: "",
          fieldOfStudy: "",
          endDate: "",
          gpaScore: "",
        },
      ],
    }));
  };

  const deleteEducation = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = [...prev.education];
      updated[index] = {
        ...updated[index],
        [name]: value,
      };

      return {
        ...prev,
        education: updated,
      };
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Education
            </h3>
            <p className="text-sm text-gray-500">Add your education</p>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            type="button"
            onClick={addEducation}
          >
            Add education
          </button>
        </div>
        {formData?.length !== 0 ? (
          formData?.map((item, index) => (
            <EducationForm
              count={index}
              key={index}
              data={item}
              handleChange={handleChange}
              deleteEducation={deleteEducation}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase w-12 h-12 mx-auto mb-3 text-gray-300"
              aria-hidden="true"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect x="2" y="6" width="20" height="14" rx="2" />
            </svg>
            <p>No work education added yet.</p>
            <p className="text-sm">Click "Add education" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
