import React from "react";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import LinkedinIcon from "../../icons/LinkedInIcon";
import GlobeIcon from "../../icons/GlobeIcon";
import type { TemplateProps } from "../ResumePreview";

const ModernTemplate = ({ formData, isCurrentlyWorking }: TemplateProps) => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-lg print:shadow-none print:border-none">
        <div className="grid grid-cols-3">
          {/* LEFT SIDEBAR */}
          <div className="col-span-1 bg-blue-600 text-white p-6 space-y-6">
            {/* NAME */}
            <div>
              <h1 className="text-2xl font-bold leading-tight">
                {formData?.personalInfo?.name}
              </h1>
              <p className="text-blue-100 text-sm mt-1">
                {formData?.personalInfo?.profession}
              </p>
            </div>

            {/* CONTACT */}
            <div className="space-y-3 text-sm">
              {formData?.personalInfo?.email && (
                <div className="flex items-center gap-2">
                  <MailIcon />
                  <span>{formData.personalInfo.email}</span>
                </div>
              )}

              {formData?.personalInfo?.phone && (
                <div className="flex items-center gap-2">
                  <PhoneIcon />
                  <span>{formData.personalInfo.phone}</span>
                </div>
              )}

              {formData?.personalInfo?.location && (
                <div className="flex items-center gap-2">
                  <MapPinIcon />
                  <span>{formData.personalInfo.location}</span>
                </div>
              )}

              {formData?.personalInfo?.linkedIn && (
                <div className="flex items-center gap-2">
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </div>
              )}

              {formData?.personalInfo?.website && (
                <div className="flex items-center gap-2">
                  <GlobeIcon />
                  <span>Website</span>
                </div>
              )}
            </div>

            {/* SKILLS */}
            {formData?.skills?.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/30 px-2 py-1 rounded"
                    >
                      {skill.skillSet}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2 p-8 space-y-8">
            {/* SUMMARY */}
            {formData?.summary && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Profile
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {formData.summary}
                </p>
              </section>
            )}

            {/* EXPERIENCE */}
            {formData?.experience?.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Experience
                </h2>

                <div className="space-y-5">
                  {formData.experience.map((exp, i) => (
                    <div key={i} className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold">{exp.jobTitle}</h3>
                          <p className="text-sm text-gray-600">
                            {exp.companyName}
                          </p>
                        </div>

                        <p className="text-xs text-gray-500">
                          {exp.startDate} -{" "}
                          {isCurrentlyWorking ? "Present" : exp.endDate}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EDUCATION */}
            {formData?.education?.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Education
                </h2>

                <div className="space-y-4">
                  {formData.education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="font-semibold">
                        {edu.degreeName} in {edu.fieldOfStudy}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {edu.institutionName}
                      </p>
                      <p className="text-xs text-gray-500">{edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROJECTS */}
            {formData?.projects?.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Projects
                </h2>

                <div className="space-y-4">
                  {formData.projects.map((project, i) => (
                    <div key={i}>
                      <h3 className="font-semibold">{project.projectName}</h3>
                      <p className="text-sm text-gray-600">
                        {project.projectDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
