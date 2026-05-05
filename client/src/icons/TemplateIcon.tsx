const TemplateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className="w-6 h-6 text-orange-700"
    >
      {/* folded corner */}
      <path d="M65 3 L65 22 L84 22 Z" fill="currentColor" opacity="0.15" />

      {/* document body */}
      <path
        d="M65 3 L65 22 L84 22 L84 96 L12 96 L12 3 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="currentColor"
        fillOpacity="0.05"
        strokeLinejoin="round"
      />

      {/* subtle inner fold line */}
      <path
        d="M65 3 L84 22"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
};

export default TemplateIcon;
