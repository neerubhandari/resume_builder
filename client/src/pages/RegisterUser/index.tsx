import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "../../components/Input";
import LockIcon from "../../icons/LockIcon";
import MailIcon from "../../icons/MailIcon";
import UserIcon from "../../icons/UserIcon";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";

const RegisterUser = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(() => ({
      ...registerData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();
      localStorage.setItem("token", data.token);
      toast.success("Account created successfully");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="sm:w-87.5 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
        >
          <h1 className="text-gray-900 text-3xl mt-10 font-medium">Sign up</h1>
          <p className="text-gray-500 text-sm mt-2">
            Please register to continue
          </p>
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <UserIcon />
            <Input
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:outline-none focus:ring-0"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <MailIcon />
            <Input
              name="email"
              type="email"
              value={registerData.email}
              onChange={handleChange}
              className="border-none outline-none ring-0 focus:outline-none focus:ring-0"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <LockIcon />
            <Input
              name="password"
              type="password"
              value={registerData.password}
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
            disabled={loading}
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Spinner />
              </>
            ) : (
              "Sign up"
            )}
          </button>
          <p className="text-gray-500 text-sm mt-3 mb-11">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              click here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
