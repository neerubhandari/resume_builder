import React, { useState } from "react";
import ProjectnForm from "../ProjectForm";

const ProjectSection = ({ formData, setFormData }) => {
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
  const deleteProject = (deleteIndex) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== deleteIndex),
    }));
  };

  const handleChange = (index, e) => {
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
            <ProjectnForm
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
