import Input from "../Input";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import BriefcaseIcon from "../../icons/BriefCaseIcon";
import LinkedinIcon from "../../icons/LinkedInIcon";
import GlobeIcon from "../../icons/GlobeIcon";

const PersonalInfoSection = ({
  personalInfo,
  setFormData,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (value.trim()) {
        delete newErrors[name as keyof typeof newErrors];
      }
      console.log("look", value);
      return newErrors;
    });
  };
  console.log(errors, "errors");
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Personal Information
        </h3>
        <p className="text-sm text-gray-600">
          Get Started with the personal information
        </p>
        <div className="flex items-center gap-2">
          <label>
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
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
                className="lucide lucide-user size-10 p-2.5 border rounded-full"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              upload user image
            </div>
            <Input type="file" className="hidden" name="profilePicture" />
          </label>
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
              className="lucide lucide-user size-4"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="fullName"
            type="text"
            placeholder={"Enter your Fullname"}
            value={personalInfo.fullName}
            onChange={handleChange}
          />
          <span className="text-red-500 mt-4">{errors?.fullName}</span>
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <MailIcon />
            Email Address
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="email"
            type="text"
            placeholder={"Enter your email address"}
            value={personalInfo.email}
            onChange={handleChange}
          />
          <span className="text-red-500">{errors?.email}</span>
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <PhoneIcon />
            Phone Number
          </label>
          <Input
            name="phone"
            type="text"
            placeholder={"Enter your phone number"}
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <MapPinIcon />
            Location
          </label>
          <Input
            name="location"
            type="text"
            placeholder={"Enter your Location"}
            value={personalInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <BriefcaseIcon />
            Profession
          </label>
          <Input
            name="profession"
            type="text"
            placeholder={"Enter your Profession"}
            value={personalInfo.profession}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <LinkedinIcon />
            LinkedIn Profile
          </label>
          <Input
            name="linkedIn"
            type="text"
            placeholder={"Enter your linkedin profile"}
            value={personalInfo.LinkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <GlobeIcon />
            Personal Website
          </label>
          <Input
            name="website"
            type="text"
            placeholder={"Enter your personal website"}
            value={personalInfo.website}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
