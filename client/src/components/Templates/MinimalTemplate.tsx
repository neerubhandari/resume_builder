import React from "react";
import type { TemplateProps } from "../ResumePreview";

const MinimalTemplate = ({ formData, isCurrentlyWorking }: TemplateProps) => {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="max-w-3xl mx-auto p-10 leading-relaxed">
        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl font-light">
            {formData?.personalInfo?.name}
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            {formData?.personalInfo?.email} · {formData?.personalInfo?.phone} ·{" "}
            {formData?.personalInfo?.location}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {formData?.personalInfo?.linkedIn} ·{" "}
            {formData?.personalInfo?.website}
          </p>
        </header>

        {/* SUMMARY */}
        {formData?.summary && (
          <section className="mb-8">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              Summary
            </h2>
            <p className="text-gray-700">{formData.summary}</p>
          </section>
        )}

        {/* EXPERIENCE */}
        {formData?.experience?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Experience
            </h2>

            {formData.experience.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex justify-between">
                  <p className="font-medium">{exp.jobTitle}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate.split("T")[0]} -{" "}
                    {isCurrentlyWorking ? "Present" : exp.endDate.split("T")[0]}
                  </p>
                </div>
                <p className="text-gray-600">{exp.companyName}</p>
                <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {formData?.education?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Education
            </h2>

            {formData.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-medium">
                  {edu.degreeName} in {edu.fieldOfStudy}
                </p>
                <p className="text-gray-600 text-sm">{edu.institutionName}</p>
              </div>
            ))}
          </section>
        )}

        {/* PROJECTS */}
        {formData?.projects?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Projects
            </h2>

            {formData.projects.map((p, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-medium">{p.projectName}</p>
                <p className="text-gray-700 text-sm">{p.projectDescription}</p>
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        {formData?.skills?.length > 0 && (
          <section>
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              {formData.skills.map((s, idx) => (
                <span key={idx}>{s.skillSet}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
