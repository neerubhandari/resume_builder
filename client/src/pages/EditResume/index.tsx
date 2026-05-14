import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ResumeForm, { type Template } from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";
import Header from "../../components/Header";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

type PersonalInfoErrors = {
  name?: string;
  email?: string;
};

const EditResume = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState(null);

  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<Template>("classic");
  const [errors, setErrors] = useState<PersonalInfoErrors>({});

  // fetch resume by id
  useEffect(() => {
    fetchResumeData();
  }, [id]);

  const fetchResumeData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:3000/api/resume/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setFormData(data?.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // validation
  const validatePersonalInfo = (personalInfo) => {
    const errors: PersonalInfoErrors = {};

    if (!personalInfo.name?.trim()) {
      errors.name = "Full name is required";
    }

    if (!personalInfo.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) {
      errors.email = "Enter a valid email";
    }

    return errors;
  };

  // input change
  const handleChange = (e) => {
    if (!formData) return;

    const { name, value } = e.target;

    setFormData({
      ...formData,

      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  // update resume
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:3000/api/resume/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("Updated:", data);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // loading
  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <a
            href="/dashboard"
            className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
          >
            <ArrowLeftIcon />
            Back to Dashboard
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
              <ResumeForm
                validatePersonalInfo={validatePersonalInfo}
                setErrors={setErrors}
                errors={errors}
                setFormData={setFormData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                setIsCurrentlyWorking={setIsCurrentlyWorking}
                isCurrentlyWorking={isCurrentlyWorking}
                currentTemplate={currentTemplate}
                setCurrentTemplate={setCurrentTemplate}
              />
            </div>

            <div className="lg:col-span-7 max-lg:mt-6">
              <ResumePreview
                formData={formData}
                currentTemplate={currentTemplate}
                setCurrentTemplate={setCurrentTemplate}
                isCurrentlyWorking={isCurrentlyWorking}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResume;
