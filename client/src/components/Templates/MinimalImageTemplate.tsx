import type { TemplateProps } from "../ResumePreview";

const MinimalImageTemplate = ({
  formData,
  isCurrentlyWorking,
}: TemplateProps) => {
  const imageUrl =
    formData?.personalInfo?.profilePicture instanceof File
      ? URL.createObjectURL(formData.personalInfo.profilePicture)
      : (formData?.personalInfo?.profilePicture ?? undefined);
  return (
    <div className="w-full bg-gray-100" id="pdf-content">
      <div className="border border-gray-200 print:shadow-none print:border-none ">
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
          {/* HEADER WITH IMAGE */}
          <header className="flex items-center gap-6 mb-10">
            {formData?.personalInfo?.profilePicture && (
              <img
                src={imageUrl}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            )}

            <div>
              <h1 className="text-3xl font-light">
                {formData?.personalInfo?.name}
              </h1>

              <p className="text-sm text-gray-600 mt-1">
                {formData?.personalInfo?.email} ·{" "}
                {formData?.personalInfo?.phone}
              </p>

              <p className="text-sm text-gray-500">
                {formData?.personalInfo?.location}
              </p>
            </div>
          </header>

          {/* SUMMARY */}
          {formData?.summary && (
            <section className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Summary
              </h2>
              <p className="text-gray-700">{formData.summary}</p>
            </section>
          )}

          {/* EXPERIENCE */}
          {formData?.experience?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Experience
              </h2>

              {formData.experience.map((exp, idx) => (
                <div key={idx} className="mb-5">
                  <div className="flex justify-between">
                    <p className="font-medium">{exp.jobTitle}</p>
                    <p className="text-xs text-gray-500">
                      {exp.startDate.split("T")[0]} -{" "}
                      {isCurrentlyWorking
                        ? "Present"
                        : exp?.endDate.split("T")[0]}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm">{exp.companyName}</p>

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
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Education
              </h2>

              {formData.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium">
                    {edu.degreeName} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-sm text-gray-600">{edu.institutionName}</p>
                </div>
              ))}
            </section>
          )}

          {/* PROJECTS */}
          {formData?.projects?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Projects
              </h2>

              {formData.projects.map((p, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium">{p.projectName}</p>
                  <p className="text-sm text-gray-700">
                    {p.projectDescription}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* SKILLS */}
          {formData?.skills?.length > 0 && (
            <section>
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                {formData.skills.map((s, idx) => (
                  <span key={idx}>• {s.skillSet}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
