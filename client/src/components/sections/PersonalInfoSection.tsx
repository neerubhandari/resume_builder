import React from "react";
import Input from "../Input";

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
        <Input
          name="fullName"
          type="text"
          placeholder={"Enter your Fullname"}
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder={"Enter your Email Address"}
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          type="tel"
          placeholder={"Enter your Phone Number"}
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          name="location"
          type="text"
          placeholder={"Enter your Location"}
          value={formData.location}
          onChange={handleChange}
        />
        <Input
          name="profession"
          type="text"
          placeholder={"Enter your Profession"}
          value={formData.profession}
          onChange={handleChange}
        />
        <Input
          name="linkedIn"
          type="text"
          placeholder={"Enter your linkedin profile"}
          value={formData.profession}
          onChange={handleChange}
        />
        <Input
          name="website"
          type="text"
          placeholder={"Enter your personal website"}
          value={formData.profession}
          onChange={handleChange}
        />
        <Input
          name="professionalSummary"
          type="text"
          placeholder={"Enter your Professional Summary"}
          value={formData.professionalSummary}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
