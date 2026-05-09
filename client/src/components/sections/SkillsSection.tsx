import React, { useState, type ChangeEvent } from "react";
import Input from "../Input";
import type { ResumeFormData, SkillItem } from "../../types/resume";

type SkillSectionProps = {
  formData: SkillItem[];
  setFormData: React.Dispatch<React.SetStateAction<ResumeFormData>>;
};
const SkillSection = ({ formData, setFormData }: SkillSectionProps) => {
  const [inputValue, setInputValue] = useState("");
  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: crypto.randomUUID(),
          skillSet: inputValue,
        },
      ],
    }));
    setInputValue("");
  };

  const deleteSkill = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item.id !== id),
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Skills
          </h3>
          <p className="text-sm text-gray-500">
            Add your technical and soft skills
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder={
                "Enter a skill (e.g., JavaScript, Project Management)"
              }
              value={inputValue}
              type={"text"}
              name="skillSet"
              onChange={handleChange}
            />
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={addSkill}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-white"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add
          </button>
        </div>
        {formData.length !== 0 ? (
          <div className="flex flex-wrap gap-2">
            {formData.map((data) => (
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {data.skillSet}
                <button
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  onClick={() => deleteSkill(data.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 mx-auto mb-2 text-gray-300"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            <div className="mb-8 mt-3">
              <p className="">No skills added yet.</p>
              <p className="text-sm">
                Add your technical and soft skills above.
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong>
                Add 8-12 relevant skills. Include both technical skills
                (programming languages, tools) and soft skills (leadership,
                communication).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillSection;
