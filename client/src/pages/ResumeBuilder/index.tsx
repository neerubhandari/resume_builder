import { useState } from "react";
import Input from "../../components/Input";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    professionalSummary: "",
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
    <form onSubmit={handleSubmit}>
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
        name="professionalSummary"
        type="text"
        placeholder={"Enter your Professional Summary"}
        value={formData.professionalSummary}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeBuilder;
