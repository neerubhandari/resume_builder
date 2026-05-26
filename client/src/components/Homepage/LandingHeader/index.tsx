import { useEffect, useState } from "react";

const LandingHeader = () => {
  const [storedUser, setStoredUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setStoredUser(user ? JSON.parse(user) : null);
  }, []);

  return (
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
      {/* logo */}
      <div className="font-semibold">logo</div>

      {/* desktop links */}
      <div className="hidden md:flex items-center gap-8 text-slate-800">
        <a href="/">Home</a>
        <a href="#features">Features</a>
      </div>

      {/* auth buttons */}
      <div className="hidden md:flex gap-2">
        {!storedUser ? (
          <>
            <a
              href="/sign-up"
              className="px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition rounded-full text-white"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-2 border hover:bg-slate-50 active:scale-95 transition rounded-full text-slate-700"
            >
              Login
            </a>
          </>
        ) : (
          <a
            href="/dashboard"
            className="px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition rounded-full text-white"
          >
            Dashboard
          </a>
        )}
      </div>

      {/* mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center size-10 border rounded-md"
      >
        ☰
      </button>

      {/* mobile menu */}
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

        {!storedUser ? (
          <>
            <a href="/sign-up" onClick={() => setIsOpen(false)}>
              Sign Up
            </a>
            <a href="/login" onClick={() => setIsOpen(false)}>
              Login
            </a>
          </>
        ) : (
          <a href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </a>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="size-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          ✕
        </button>
      </div>
    </nav>
  );
};

export default LandingHeader;
