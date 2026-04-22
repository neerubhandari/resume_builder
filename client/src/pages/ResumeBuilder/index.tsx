import { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    professionalSummary: "",
    linkedIn: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "data");
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">header</div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <ResumeForm
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
