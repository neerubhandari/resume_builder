const LandingFooter = () => {
  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-linear-to-r from-white via-green-200/60 to-white mt-10">
      <div className="flex flex-wrap items-start gap-10 md:gap-15 xl:gap-35">
        <div className="text-2xl font-bold text-green-600 tracking-tight">
          Resume<span className="text-green-800">AI</span>
        </div>
        <div>
          <p className="text-slate-800 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-slate-800 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
        <p className="max-w-60">
          Helping you deliver better experiences at any scale.
        </p>
        <div className="flex items-center gap-4 mt-3">
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
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
              className="w-5 h-5 hover:text-pink-500 transition-colors"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 2c4 4 6 8 6 12 0 2-1 4-2 6" />
              <path d="M2.5 9.5c5 1 10 1 15-2" />
              <path d="M22 12c-5 1-10 1-15 6" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
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
              className="w-5 h-5 hover:text-blue-500 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-12h4v2" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <p className="mt-3 text-center">© 2026 Resume Builder</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
