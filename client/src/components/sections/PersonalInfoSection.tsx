import React from "react";
import Input from "../Input";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import MapPinIcon from "../../icons/MapPinIcon";
import BriefcaseIcon from "../../icons/BriefCaseIcon";
import LinkedinIcon from "../../icons/LinkedInIcon";
import GlobeIcon from "../../icons/GlobeIcon";

const PersonalInfoSection = ({ formData, handleChange }) => {
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
            <Input type="file" />
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
            value={formData.fullName}
            onChange={handleChange}
          />
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <PhoneIcon />
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="phone"
            type="text"
            placeholder={"Enter your phone number"}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <MapPinIcon />
            Location
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="location"
            type="text"
            placeholder={"Enter your Location"}
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <BriefcaseIcon />
            Profession
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="profession"
            type="text"
            placeholder={"Enter your Profession"}
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <LinkedinIcon />
            LinkedIn Profile
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="linkedIn"
            type="text"
            placeholder={"Enter your linkedin profile"}
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1 mt-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <GlobeIcon />
            Personal Website
            <span className="text-red-500">*</span>
          </label>
          <Input
            name="website"
            type="text"
            placeholder={"Enter your personal website"}
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
