import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") as string);
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user
    navigate("/login"); // redirect
  };
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        <a href="/">RESUME</a>
        <div className="flex items-center gap-4 text-sm">
          {user?.name && <p className="max-sm:hidden">Hi, {user?.name}</p>}
          <button
            className="bg-white hover:sbg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
