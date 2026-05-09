import React from "react";
import Input from "../Input";
import type { ProjectItem } from "../../types/resume";
type ProjectFormProps = {
  data: ProjectItem;
  count: number;
  deleteProject: (id: string) => void;
  handleChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};
const ProjectForm = ({
  data,
  count,
  deleteProject,
  handleChange,
}: ProjectFormProps) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Project #{count + 1}</h4>
            <button
              className="text-red-500 hover:text-red-700 transition-colors"
              onClick={() => deleteProject(data.id)}
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
          <div className="grid gap-3">
            <Input
              value={data.projectName}
              onChange={(e) => handleChange(count, e)}
              type="text"
              placeholder={"Project Name"}
              name="projectName"
            />
            <Input
              type="text"
              placeholder={"Project Type"}
              name="projectType"
              value={data.projectType}
              onChange={(e) => handleChange(count, e)}
            />
            <textarea
              placeholder={"Describe your project..."}
              name="projectDescription"
              value={data.projectDescription}
              onChange={(e) => handleChange(count, e)}
              rows={4}
              className="w-full text-sm px-3 py-2 rounded-lg resize-none border-gray-300 border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
