import { useEffect, useState, type FormEvent } from "react";
import Input from "../Input";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
  title?: string;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, onCreate, title, children }: ModalProps) => {
  const [resumeTitle, setResumeTitle] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resumeTitle.trim()) return;

    onCreate(resumeTitle);

    setResumeTitle("");
    onClose();
  };

  return (
    <form
      className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
      onSubmit={handleSubmit}
      onClick={onClose}
    >
      <div
        className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title || "Create a Resume"}</h2>

        <Input
          placeholder="Enter resume title"
          type="text"
          value={resumeTitle}
          onChange={(e) => setResumeTitle(e.target.value)}
        />

        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors mt-5">
          Create Resume
        </button>

        <button type="button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div>{children}</div>
      </div>
    </form>
  );
};

export default Modal;
