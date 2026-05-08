import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "../../components/Input";
import LockIcon from "../../icons/LockIcon";
import MailIcon from "../../icons/MailIcon";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(() => ({
      ...loginData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      if (res.ok) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="sm:w-87.5 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
        >
          <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
          <p className="text-gray-500 text-sm mt-2">Please login to continue</p>

          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <MailIcon />
            <Input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:outline-none focus:ring-0"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <LockIcon />
            <Input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:outline-none focus:ring-0"
              placeholder="Password"
            />
          </div>
          <div className="mt-4 text-left text-green-500">
            {/* <button className="text-sm" type="button">
              Forget password?
            </button> */}
          </div>
          <button
            className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
            type="submit"
          >
            Login
          </button>
          <p className="text-gray-500 text-sm mt-3 mb-11">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-green-500 hover:underline">
              click here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
