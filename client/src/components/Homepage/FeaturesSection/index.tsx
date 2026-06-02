import EditIcon from "../../../icons/EditIcon";
import EyeIcon from "../../../icons/EyeIcon";
import TemplateIcon from "../../../icons/TemplateIcon";

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12 bg-gradient-to-b from-white via-green-50/30 to-white"
    >
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <span>Simple Process</span>
      </div>
      <div className="text-center mt-6 text-slate-700">
        <h2 className="text-3xl sm:text-4xl font-medium">Build your resume</h2>
        <p className="max-sm max-w-2xl mt-4 text-slate-500">
          Our streamlined process helps you create a professional resume in
          minutes with intelligent AI-powered tools and features.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center xl:-mt-10">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          alt="Feature preview"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
        />
        <div className="px-4 md:px-0">
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer mb-4">
            <div className="p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors  bg-violet-100">
              <EditIcon />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Smart Resume Builder
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Create professional resumes in minutes with an intuitive and
                  guided interface.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer mb-4">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <EyeIcon />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Real-Time Preview
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  See your resume update instantly as you type and make edits
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <TemplateIcon />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Job-Ready Templates
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from modern, ATS-friendly templates designed to impress
                  recruiters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
