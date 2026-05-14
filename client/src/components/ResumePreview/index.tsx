import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "../Templates/ModernTemplate";
import MinimalTemplate from "../Templates/MinimalTemplate";
import MinimalImageTemplate from "../Templates/MinimalImageTemplate";

const ResumePreview = ({
  formData,
  isCurrentlyWorking,
  currentTemplate,
  setCurrentTemplate,
}) => {
  const handleDownloadPDF = () => {
    window.print();
  };
  console.log(currentTemplate, "current template");
  let selectedTemplate;

  if (currentTemplate == "classic") {
    selectedTemplate = (
      <ClassicTemplate
        formData={formData}
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
      />
    );
  }

  if (currentTemplate === "modern") {
    selectedTemplate = (
      <ModernTemplate
        formData={formData}
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
      />
    );
  }

  if (currentTemplate === "minimal") {
    selectedTemplate = (
      <MinimalTemplate
        formData={formData}
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
      />
    );
  }

  if (currentTemplate === "minimal_image") {
    selectedTemplate = (
      <MinimalImageTemplate
        formData={formData}
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
      />
    );
  }

  return (
    <>
      <div className="relative w-full no-print">
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
          <button
            className="flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors"
            onClick={handleDownloadPDF}
          >
            Download
          </button>
        </div>
      </div>

      {selectedTemplate}
    </>
  );
};

export default ResumePreview;
