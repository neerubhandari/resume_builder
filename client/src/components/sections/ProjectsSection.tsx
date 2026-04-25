import React, { useState } from "react";
import ProjectnForm from "../ProjectForm";

const ProjectSection = () => {
  const [project, setproject] = useState([]);
  const addproject = () => {
    setproject([
      ...project,
      {
        id: crypto.randomUUID(),
        projectName: "",
        projectType: "",
        projectDescription: "",
      },
    ]);
  };
  const deleteProject = (deleteIndex) => {
    const filtered = project.filter((item) => item.id !== deleteIndex);
    console.log(filtered, "filtered");
    setproject(filtered);
  };

  const handleFormSubmit = (e) => {
    console.log("Final project Data:", project);
    e.preventDefault();
  };

  const handleChange = (index, e) => {
    const updated = [...project];
    console.log("CHANGE FIRED", index, e.target.name, e.target.value);
    console.log("this data", e.target.value);
    updated[index][e.target.name] = e.target.value;

    setproject(updated);
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
        {project.map((item, index) => (
          <ProjectnForm
            count={index}
            key={index}
            data={item}
            handleChange={handleChange}
            deleteProject={deleteProject}
          />
        ))}
      </div>
      {/* <button
        className="bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm"
        type="button"
      >
        Save Changes
      </button> */}
    </div>
  );
};

export default ProjectSection;
