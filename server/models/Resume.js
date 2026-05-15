import mongoose from "mongoose";
const { Schema } = mongoose;

// ---------------- SUB SCHEMAS ----------------

const experienceSchema = new Schema({
  jobTitle: String,
  companyName: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const educationSchema = new Schema({
  degreeName: String,
  institutionName: String,
  fieldOfStudy: String,
  endDate: Date,
  gpaScore: String,
});

const projectSchema = new Schema({
  projectName: String,
  projectType: String,
  projectDescription: String,
});

const skillSchema = new Schema({
  skillSet: String,
});

// ---------------- MAIN SCHEMA ----------------

const resumeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  name: String,
  email: String,
  number: String,
  location: String,
  profession: String,
  linkedInProfile: String,
  website: String,
  template: {
    type: String,
    enum: ["classic", "modern", "minimal_image", "minimal"],
    default: "classic",
  },
  professionalSummary: String,

  // ✅ FIXED → arrays
  experience: [experienceSchema],
  education: [educationSchema],
  projects: [projectSchema],
  skills: [skillSchema],
});

export default mongoose.model("Resume", resumeSchema);
