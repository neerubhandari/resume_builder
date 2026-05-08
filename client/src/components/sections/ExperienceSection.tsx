import type { ChangeEvent } from "react";
import type { ExperienceItem, ResumeFormData } from "../../types/resume";
import WorkExperienceForm from "../WorkExperienceForm";

type ExperienceSectionProps = {
  formData: ExperienceItem[];
  setFormData: React.Dispatch<React.SetStateAction<ResumeFormData>>;
  isCurrentlyWorking: boolean;
  setIsCurrentlyWorking: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExperienceSection = ({
  formData,
  setFormData,
  isCurrentlyWorking,
  setIsCurrentlyWorking,
}: ExperienceSectionProps) => {
  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };
  const deleteExperience = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };

  const handleChange = (
    count: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    const { name, value } = target;

    setFormData((prev) => {
      const updated = [...prev.experience];
      updated[count] = {
        ...updated[count],
        [name]: value,
      };

      return {
        ...prev,
        experience: updated,
      };
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Professional Experience
            </h3>
            <p className="text-sm text-gray-500">Add your job experience</p>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            type="button"
            onClick={addExperience}
          >
            Add Experience
          </button>
        </div>
        {formData?.length !== 0 ? (
          formData?.map((item, index) => (
            <WorkExperienceForm
              count={index}
              key={index}
              data={item}
              handleChange={handleChange}
              deleteExperience={deleteExperience}
              isCurrentlyWorking={isCurrentlyWorking}
              setIsCurrentlyWorking={setIsCurrentlyWorking}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase w-12 h-12 mx-auto mb-3 text-gray-300"
              aria-hidden="true"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect x="2" y="6" width="20" height="14" rx="2" />
            </svg>
            <p>No work experience added yet.</p>
            <p className="text-sm">Click "Add Experience" to get started.</p>
          </div>
        )}
      </div>
      {/* <button
        className="bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm"
        type="button"
      >
        Save Changes
      </button> */}
    </div>
  );
};

export default ExperienceSection;
