import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useParams } from "react-router-dom";

import ResumeForm from "../../components/ResumeForm";
import ResumePreview from "../../components/ResumePreview";
import Header from "../../components/Header";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import { type ResumeFormData, type PersonalInfo } from "../../types/resume";
import { initialResumeFormData } from "../../constants/initialResumeFormData";
import toast from "react-hot-toast";
import { getResumeById, updateResume } from "../../api/resume.api";

type PersonalInfoErrors = {
  name?: string;
  email?: string;
};

const EditResume = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState<ResumeFormData>(
    initialResumeFormData,
  );
  const [isFormUpdating, setIsFormUpdating] = useState(false);

  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [errors, setErrors] = useState<PersonalInfoErrors>({});

  // fetch resume by id
  useEffect(() => {
    fetchResumeData();
  }, [id]);

  const fetchResumeData = async () => {
    try {
      if (!id) {
        toast.error("Resume ID is missing");
        return;
      }
      const data = await getResumeById(id);
      setFormData(data?.data || data);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // validation
  const validatePersonalInfo = (personalInfo: PersonalInfo) => {
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const updateResumeFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormUpdating(true);
    try {
      if (!id) {
        toast.error("Resume ID is missing");
        return;
      }
      await updateResume(id, formData);
      toast.success("Resume updated successfully");
      setIsFormUpdating(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

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
                handleSubmit={updateResumeFunction}
                formData={formData}
                isFormSubmitting={isFormUpdating}
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

export default EditResume;
