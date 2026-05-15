import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from "../../icons/EditIcon";
import { useEffect, useState } from "react";
import type { ResumeEntity } from "../../types/resume";
import Modal from "../../components/Modal/Modal";
import TrashIcon from "../../icons/TrashIcon";
import PencilIcon from "../../icons/PencilIcon";
type ResumeEntity = {
  _id: string;
  title: string;
};
const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<ResumeEntity[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        </div>
        <hr className="border-slate-300 my-6 sm:w-76.25" />

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="relative w-36 h-48 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-lg flex flex-col items-center justify-center gap-2 group hover:bg-indigo-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/dashboard/edit-resume/${resume._id}`)}
            >
              <EditIcon />

              <p className="text-sm group-hover:scale-105 transition-all px-2 text-center">
                {resume.title}
              </p>

              <div className="absolute top-1 right-1 hidden group-hover:flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteResume(resume._id);
                  }}
                >
                  <TrashIcon />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("edit clicked");
                  }}
                >
                  <PencilIcon />
                </button>
              </div>
            </div>
          ))}
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
