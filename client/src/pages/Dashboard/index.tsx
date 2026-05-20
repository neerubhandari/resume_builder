import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from "../../icons/EditIcon";
import { useEffect, useRef, useState } from "react";
import type { ResumeEntity, ResumeFormData } from "../../types/resume";
import Modal from "../../components/Modal/Modal";
import TrashIcon from "../../icons/TrashIcon";
import PencilIcon from "../../icons/PencilIcon";

export const themes = [
  {
    bg: "bg-gradient-to-br from-indigo-50 to-purple-100",
    text: "text-purple-700",
    border: "border-purple-200",
    actionBg: "bg-purple-100",
    actionHover: "hover:bg-purple-200",
  },
  {
    bg: "bg-gradient-to-br from-sky-50 to-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
    actionBg: "bg-blue-100",
    actionHover: "hover:bg-blue-200",
  },
  {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
    actionBg: "bg-orange-100",
    actionHover: "hover:bg-orange-200",
  },
  {
    bg: "bg-gradient-to-br from-purple-50 to-pink-100",
    text: "text-pink-700",
    border: "border-pink-200",
    actionBg: "bg-pink-100",
    actionHover: "hover:bg-pink-200",
  },
  {
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
    text: "text-indigo-700",
    border: "border-indigo-200",
    actionBg: "bg-indigo-100",
    actionHover: "hover:bg-indigo-200",
  },
  {
    bg: "bg-gradient-to-br from-slate-50 to-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
    actionBg: "bg-gray-100",
    actionHover: "hover:bg-gray-200",
  },

  // 🌈 NEW THEMES BELOW

  {
    bg: "bg-gradient-to-br from-emerald-50 to-green-100",
    text: "text-emerald-700",
    border: "border-emerald-200",
    actionBg: "bg-emerald-100",
    actionHover: "hover:bg-emerald-200",
  },
  {
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100",
    text: "text-teal-700",
    border: "border-teal-200",
    actionBg: "bg-teal-100",
    actionHover: "hover:bg-teal-200",
  },
  {
    bg: "bg-gradient-to-br from-rose-50 to-red-100",
    text: "text-rose-700",
    border: "border-rose-200",
    actionBg: "bg-rose-100",
    actionHover: "hover:bg-rose-200",
  },
  {
    bg: "bg-gradient-to-br from-amber-50 to-yellow-100",
    text: "text-amber-700",
    border: "border-amber-200",
    actionBg: "bg-amber-100",
    actionHover: "hover:bg-amber-200",
  },
  {
    bg: "bg-gradient-to-br from-violet-50 to-fuchsia-100",
    text: "text-violet-700",
    border: "border-violet-200",
    actionBg: "bg-violet-100",
    actionHover: "hover:bg-violet-200",
  },
  {
    bg: "bg-gradient-to-br from-zinc-50 to-neutral-100",
    text: "text-zinc-700",
    border: "border-zinc-200",
    actionBg: "bg-zinc-100",
    actionHover: "hover:bg-zinc-200",
  },
];
type ResumeEntity = {
  _id: string;
  title: string;
};
const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<ResumeEntity[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedResumeData, setUploadedResumeData] = useState<
    ResumeFormData[]
  >([]);
  const handleCreateResume = async (title: string) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/resume/create-title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();

      console.log(data, "after creating");

      const resumeId = data.resume._id;

      // optional: update UI instantly
      setResumes((prev) => [...prev, data.resume]);

      setIsModalOpen(false);

      // IMPORTANT: navigate to the created resume
      navigate(`/dashboard/edit-resume/${resumeId}`);
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  useEffect(() => {
    const fetchResume = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:3000/api/resume/get-resume`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setResumes(data.resumes);
    };

    fetchResume();
  }, []);

  const handleDeleteResume = async (id: string) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`http://localhost:3000/api/resume/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResumes((prev) => prev.filter((resume) => resume._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };
  const uploadResume = async (file: File) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("resume", file);

      const res = await fetch(
        "http://localhost:3000/api/resume/upload-resume",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const data = await res.json();
      setUploadedResumeData(data.data);
      console.log(data, "data");
      // navigate(`/dashboard/edit-resume/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 ">
          <button
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
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
              className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
          <button
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) uploadResume(file);
              }}
            />
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
              className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full"
            >
              <path d="M12 13v8" />
              <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
              <path d="m8 17 4-4 4 4" />
            </svg>
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
        </div>
        <hr className="border-slate-300 my-6 sm:w-76.25" />

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {resumes.map((resume, index) => {
            const theme = themes[index % themes.length];

            return (
              <div
                key={resume._id}
                className={`${theme.text} relative w-36 h-48 border rounded-lg flex flex-col items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300 cursor-pointer ${theme.bg} ${theme.border} ${theme.text}`}
                onClick={() =>
                  navigate(`/dashboard/edit-resume/${resume._id}`, {
                    state: {
                      uploadedResumeData: uploadedResumeData,
                    },
                  })
                }
              >
                <EditIcon />

                <p
                  className={`text-sm group-hover:scale-105 transition-all px-2 text-center ${theme.text}`}
                >
                  {resume.title}
                </p>

                <div className="absolute top-1 right-1 hidden group-hover:flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("edit clicked");
                    }}
                    className={`p-1 rounded-md ${theme.actionBg} ${theme.text}`}
                  >
                    <PencilIcon />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteResume(resume._id);
                    }}
                    className={`p-1 rounded-md transition-all ${theme.actionBg} ${theme.actionHover}`}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateResume}
      />
    </div>
  );
};

export default Dashboard;
