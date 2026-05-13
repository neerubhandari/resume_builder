import React from "react";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import LinkedinIcon from "../../icons/LinkedInIcon";
import GlobeIcon from "../../icons/GlobeIcon";

const ClassicTemplate = ({ formData, isCurrentlyWorking }) => {
  return (
    <div>
      <div className="relative w-full no-print">
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
          {/* <button className="flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors">
            preview
          </button> */}
          <button
            className="flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors"
            onClick={handleDownloadPDF}
          >
            Download
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-100" id="pdf-content">
        <div className="border border-gray-200 print:shadow-none print:border-none ">
          <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
            <header
              className={`text-center mb-8 pb-6 border-b-2 text-blue-500`}
            >
              <h1 className="text-3xl font-bold mb-2 text-blue-500">
                {formData?.personalInfo?.name}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  {formData?.personalInfo?.email && <MailIcon />}
                  {formData?.personalInfo?.email}
                </div>
                <div className="flex items-center gap-1">
                  {formData?.personalInfo?.phone && <PhoneIcon />}
                  {formData?.personalInfo?.phone}
                </div>
                <div className="flex items-center gap-1">
                  {formData?.personalInfo?.location && <MapPinIcon />}
                  {formData?.personalInfo?.location}
                </div>
                <div className="flex items-center gap-1">
                  {formData?.personalInfo?.linkedIn && <LinkedinIcon />}
                  {formData?.personalInfo?.linkedIn}
                </div>
                <div className="flex items-center gap-1">
                  {formData?.personalInfo?.website && <GlobeIcon />}
                  {formData?.personalInfo?.website}
                </div>
              </div>
            </header>
            {formData?.summary && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-blue-500">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {formData?.summary}
                </p>
              </section>
            )}
            {formData?.experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-500">
                  PROFESSIONAL EXPERIENCE
                </h2>
                {formData?.experience.map((experienceData) => (
                  <div className="space-y-4 mb-3">
                    <div className="border-l-3 text-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {experienceData?.jobTitle}
                          </h3>
                          <p className="text-gray-700 font-medium">
                            {experienceData?.companyName}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>
                            {experienceData?.startDate} -{" "}
                            {!isCurrentlyWorking
                              ? "Present"
                              : experienceData?.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {experienceData?.description}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {formData?.education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-500">
                  EDUCATION
                </h2>
                {formData?.education.map((educationData) => (
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {educationData?.degreeName} in{" "}
                          {educationData?.fieldOfStudy}
                        </h3>
                        <p className="text-gray-700">
                          {educationData?.institutionName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {educationData?.gpaScore}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>{educationData?.endDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {formData?.projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-500">
                  PROJECTS
                </h2>
                {formData?.projects.map((projectData) => (
                  <ul className="space-y-3 ">
                    <div className="flex justify-between items-start border-l-3 border-gray-300 pl-6 ">
                      <div>
                        <li className="font-semibold text-gray-800 ">
                          {projectData?.projectName}
                        </li>
                        <p className="text-gray-600">
                          {projectData?.projectDescription}
                        </p>
                      </div>
                    </div>
                  </ul>
                ))}
              </section>
            )}
            {formData?.skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-500">
                  CORE SKILLS{" "}
                </h2>
                {formData?.skills.map((data) => (
                  <ul className="flex gap-4 flex-wrap list-disc pl-5">
                    <li className="text-gray-700">{data?.skillSet}</li>
                  </ul>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
