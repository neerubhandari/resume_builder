import Input from "../Input";

type SkillSetFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addSkill: () => void;
};
const SkillSetForm = ({ handleChange, addSkill }: SkillSetFormProps) => {
  return (
    <>
      <div className="flex-1">
        <Input
          placeholder={"Enter a skill (e.g., JavaScript, Project Management)"}
          value={""}
          type={"text"}
          name="skillSet"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={addSkill}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Add
      </button>
    </>
  );
};

export default SkillSetForm;
