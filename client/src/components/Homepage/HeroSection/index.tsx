import StarIcon from "../../../icons/StarIcon";
import ArrowRightIcon from "../../../icons/ArrowRightIcon";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
      <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>
      <div className="flex items-center mt-24">
        <div className="flex -space-x-3 pr-3">
          <img
            alt="user1"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
          />

          <img
            alt="user2"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80"
          />

          <img
            alt="user3"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
          />

          <img
            alt="user4"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
          />

          <img
            alt="user5"
            className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
            src="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </div>
        <div>
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-sm text-gray-700">Used by 10,000+ users</p>
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-17.5">
        Land your dream job with
        <span className=" bg-linear-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">
          AI-powered{" "}
        </span>
        resumes.
      </h1>
      <p className="max-w-md text-center text-base my-7">
        Create, edit and download professional resumes with AI-powered
        assistance.
      </p>
      <div className="flex items-center gap-4 ">
        <a
          href="/login"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
        >
          Get Started <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
