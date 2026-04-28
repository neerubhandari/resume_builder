import { useState } from "react";
import Input from "../Input";

const WorkExperienceForm = ({
  data,
  count,
  deleteExperience,
  handleChange,
  isCurrentlyWorking,
  setIsCurrentlyWorking,
}) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Experience #{count + 1}</h4>
            <button
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => deleteExperience(data.id)}
            >
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
                className="lucide lucide-trash-2 size-4"
                aria-hidden="true"
              >
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M6 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Input
              value={data.companyName}
              onChange={(e) => handleChange(count, e)}
              type="text"
              placeholder={"Company Name"}
              name="companyName"
            />
            <Input
              type="text"
              placeholder={"Job Title"}
              name="jobTitle"
              value={data.jobTitle}
              onChange={(e) => handleChange(count, e)}
            />
            <Input
              type="month"
              name="startDate"
              value={data.startDate}
              onChange={(e) => handleChange(count, e)}
            />
            <Input
              className={`${!!isCurrentlyWorking && "bg-gray-100"}`}
              type="month"
              name="endDate"
              value={data.endDate}
              onChange={(e) => handleChange(count, e)}
              disabled={!!isCurrentlyWorking}
            />
          </div>
          <label className="flex items-center gap-2">
            <Input
              type="checkbox"
              name="isCurrentlyWorking"
              checked={isCurrentlyWorking}
              onChange={(e) => setIsCurrentlyWorking(e.target.checked)}
            />
            <span className="text-sm text-gray-700">
              Currently working here
            </span>
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Job Description
              </label>

              <button
                disabled
                className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
              >
                Enhance with AI
              </button>
            </div>
            <textarea
              rows={4}
              className="w-full text-sm px-3 py-2 rounded-lg resize-none border-gray-300 border"
              name="description"
              placeholder="Describe your key responsibilities and achievements..."
              value={data.description}
              onChange={(e) => handleChange(count, e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
