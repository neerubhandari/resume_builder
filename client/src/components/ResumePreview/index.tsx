import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="border border-gray-200 print:shadow-none print:border-none ">
          <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
            <header className="text-center mb-8 pb-6 border-b-2">
              <h1 className="text-3xl font-bold mb-2"> {formData.fullName}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">{formData.email}</div>
                <div className="flex items-center gap-1">{formData.phone}</div>
                <div className="flex items-center gap-1">
                  {formData.location}
                </div>
                <div className="flex items-center gap-1">
                  {formData.linkedIn || "linkedIn"}
                </div>
                <div className="flex items-center gap-1">
                  {formData.website || "website"}
                </div>
              </div>
            </header>
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {formData.professionalSummary}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
