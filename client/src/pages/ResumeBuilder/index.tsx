import { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      profession: "",
      linkedIn: "",
      website: "",
      profilePicture: null,
    },
    summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">header</div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <ResumeForm
              setFormData={setFormData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
            />
          </div>
          <div className="lg:col-span-7 max-lg:mt-6">
            <ResumePreview formData={formData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
