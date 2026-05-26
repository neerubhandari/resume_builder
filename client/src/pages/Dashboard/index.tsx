import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from "../../icons/EditIcon";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import TrashIcon from "../../icons/TrashIcon";
import PencilIcon from "../../icons/PencilIcon";
import toast from "react-hot-toast";
import {
  createResumeTitle,
  deleteResume,
  getResume,
  uploadResumeData,
} from "../../api/resume.api";
import { resumeThemes } from "../../constants/resumeThemes";
import ConfirmModal from "../../components/Modal/DeleteConfirmModal";

type ResumeEntity = {
  _id: string;
  title: string;
};
const Dashboard = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<ResumeEntity[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedResumeID, setUploadedResumeID] = useState();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);

  const showError = (error: unknown) => {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Something went wrong");
    }
  };

  const fetchResumes = async () => {
    try {
      const data = await getResume();
      setResumes(data.resumes);
    } catch (error) {
      showError(error);
    }
  };

  const handleCreateResumeTitle = async (title: string) => {
    try {
      const data = await createResumeTitle(title);
      setResumes((prev) => [...prev, data.resume]);
      setIsModalOpen(false);
      navigate(`/dashboard/edit-resume/${data.resume._id}`);
    } catch (error) {
      showError(error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleUploadResume = async (file: File) => {
    try {
      const data = await uploadResumeData(file);
      setUploadedResumeID(data.resumeId);
      navigate(`/dashboard/edit-resume/${data.resumeId}`);
    } catch (error) {
      showError(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    handleUploadResume(file);
  };

  const handleDeleteClick = (id: string) => {
    setSelectedResumeId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedResumeId) return;

    try {
      await deleteResume(selectedResumeId);

      setResumes((prev) =>
        prev.filter((resume) => resume._id !== selectedResumeId),
      );

      toast.success("Resume deleted");
    } catch (error) {
      toast.error("Failed to delete resume");
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedResumeId(null);
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
              onChange={handleFileChange}
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
              Upload Existing
            </p>
          </button>
        </div>
        <hr className="border-slate-300 my-6 sm:w-76.25" />

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {resumes.map((resume, index) => {
            const theme = resumeThemes[index % resumeThemes.length];

            return (
              <div
                key={resume._id}
                className={`${theme.text} relative w-36 h-48 border rounded-lg flex flex-col items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300 cursor-pointer ${theme.bg} ${theme.border} ${theme.text}`}
                onClick={() =>
                  navigate(`/dashboard/edit-resume/${resume._id}`, {
                    state: {
                      uploadedResumeData: uploadedResumeID,
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
                    }}
                    className={`p-1 rounded-md ${theme.actionBg} ${theme.text}`}
                  >
                    <PencilIcon />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(resume._id);
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
        onCreate={handleCreateResumeTitle}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedResumeId(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Dashboard;
