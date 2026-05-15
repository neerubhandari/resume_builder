import { useState, type ChangeEvent, type FormEvent } from "react";
import ResumeForm from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";
import type { Template } from "../../components/ResumeForm";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import Header from "../../components/Header";
import type { PersonalInfo, ResumeFormData } from "../../types/resume";

type PersonalInfoErrors = {
  name?: string;
  email?: string;
};

const ResumeBuilder = () => {
  const [formData, setFormData] = useState<ResumeFormData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      profession: "",
      linkedIn: "",
      website: "",
      profilePicture: null,
    },
    template: "classic",
    summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
  });
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [errors, setErrors] = useState<PersonalInfoErrors>({});

  const validatePersonalInfo = (
    personalInfo: PersonalInfo,
  ): PersonalInfoErrors => {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/resume/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

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
              />
            </div>
            <div className="lg:col-span-7 max-lg:mt-6">
              <ResumePreview
                formData={formData}
                isCurrentlyWorking={isCurrentlyWorking}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
