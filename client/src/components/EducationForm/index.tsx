import React from "react";
import Input from "../Input";

const EducationForm = ({ data, count, deleteEducation, handleChange }) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Education #{count + 1}</h4>
            <button
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => deleteEducation(data.id)}
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
              placeholder={"Institution Name"}
              name="institutionName"
            />
            <Input
              type="text"
              placeholder={"Degree (e.g., Bachelor's, Master's)"}
              name="degreeName"
              value={data.degreeName}
              onChange={(e) => handleChange(count, e)}
            />
            <Input
              type="text"
              placeholder={"Field of Study"}
              name="fieldOfStudy"
              value={data.fieldOfStudy}
              onChange={(e) => handleChange(count, e)}
            />
            <Input
              type="month"
              name="endDate"
              value={data.endDate}
              onChange={(e) => handleChange(count, e)}
            />
            <Input
              type="text"
              name="gpaScore"
              value={data.gpaScore}
              onChange={(e) => handleChange(count, e)}
              placeholder={"GPA(optional)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
