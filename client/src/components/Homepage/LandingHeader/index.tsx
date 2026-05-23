import { useState } from "react";

const LandingHeader = () => {
  const storedUser = JSON.parse(localStorage.getItem("user") as string);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        logo
        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="\">Home</a>
          <a href="#features">Features</a>
        </div>
        <div className="flex gap-2">
          {!storedUser ? (
            <>
              <a
                href="/sign-up"
                className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
              >
                Get Started
              </a>
              <a
                href="/login"
                className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
              >
                login
              </a>
            </>
          ) : (
            <a
              href="/dashboard"
              className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
            >
              Dashboard
            </a>
          )}
        </div>
        <div
          className={`fixed inset-0 z-50 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#features" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="aspect-square size-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md"
          >
            X
          </button>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center justify-center size-10 border rounded-md"
        >
          ☰
        </button>
      </nav>
    </>
  );
};

export default LandingHeader;
