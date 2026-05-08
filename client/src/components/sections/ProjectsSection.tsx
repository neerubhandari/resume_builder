import React, { useState, type ChangeEvent } from "react";
import type { ProjectItem, ResumeFormData } from "../../types/resume";
import ProjectForm from "../ProjectForm";

type ProjectSectionProps = {
  formData: ProjectItem[];
  setFormData: React.Dispatch<React.SetStateAction<ResumeFormData>>;
};
const ProjectSection = ({ formData, setFormData }: ProjectSectionProps) => {
  const addproject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: crypto.randomUUID(),
          projectName: "",
          projectType: "",
          projectDescription: "",
        },
      ],
    }));
  };
  const deleteProject = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };

  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = [...prev.projects];
      updated[index] = {
        ...updated[index],
        [name]: value,
      };

      return {
        ...prev,
        projects: updated,
      };
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Projects
            </h3>
            <p className="text-sm text-gray-500">Add your projects</p>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            type="button"
            onClick={addproject}
          >
            Add project
          </button>
        </div>
        {formData?.length !== 0 &&
          formData?.map((item, index) => (
            <ProjectForm
              count={index}
              key={index}
              data={item}
              handleChange={handleChange}
              deleteProject={deleteProject}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectSection;
