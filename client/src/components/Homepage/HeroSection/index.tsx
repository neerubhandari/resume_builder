import StarIcon from "../../../icons/StarIcon";
import ArrowRightIcon from "../../../icons/ArrowRightIcon";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 text-black overflow-hidden">
      {/* background glow */}
      <div className="absolute top-24 md:top-16 left-1/2 -translate-x-1/2 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px] bg-green-300 blur-[100px] opacity-30 -z-10" />

      {/* avatars + rating */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-16 sm:mt-24 text-center sm:text-left">
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
            "https://randomuser.me/api/portraits/men/75.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`user${i}`}
              className="size-7 sm:size-8 md:size-9 rounded-full border-2 border-white hover:-translate-y-1 transition"
            />
          ))}
        </div>

        <div>
          <div className="flex justify-center sm:justify-start">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-700">
            Used by 10,000+ users
          </p>
        </div>
      </div>

      {/* headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl text-center mt-6 sm:mt-8 leading-tight md:leading-[1.2]">
        Land your dream job with{" "}
        <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
          AI-powered
        </span>{" "}
        resumes.
      </h1>

      {/* description */}
      <p className="max-w-md text-center text-sm sm:text-base text-gray-600 my-5 sm:my-7">
        Create, edit and download professional resumes with AI-powered
        assistance.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <a
          href="/login"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-7 sm:px-9 h-11 sm:h-12 flex items-center gap-2 transition-colors"
        >
          Get Started <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
