import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setsuccess] = useState(false);
  const { signup ,signinwithgoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    alert("Signup submitted!");
    signup(email, password).then((result) => {
      console.log(result.user);
      setsuccess(true);
      navigate("/");
    })
    .catch((error) => {
  console.error("Google Sign-In Error:", error);
  toast.error(error.message);
});
  };
  const handleGoogle = () => {
    signinwithgoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully login");

        navigate("/");
      })

      .catch((error) => {
        console.log(error.message);
        toast.error("Please Try again");
      });
  };

  return (
    <div className="min-h-screen bg-[url('/images/cafe-bg.jpg')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-[#fff7f2] bg-opacity-95 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#5c3e3e] mb-6">
          Create Cafenova Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-[#5c3e3e] font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-[#d5bfb5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              required
            />
          </div>
          <div>
            <label className="block text-[#5c3e3e] font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-[#d5bfb5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              required
            />
          </div>
          <div>
            <label className="block text-[#5c3e3e] font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-[#d5bfb5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#8b5e3c] cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-[#5c3e3e] font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-[#d5bfb5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-[#8b5e3c] cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#5c3e3e] hover:bg-[#3f2a2a] text-white py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-[#5c3e3e] mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#8b5e3c] hover:underline">
            Login here
          </a>
        </p>
        <div className="mt-6 flex items-center justify-center">
                  <button
                    onClick={handleGoogle}
                    className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-200"
                  >
                    <FcGoogle size={24} />
                    <span>Sign in with Google</span>
                  </button>
                </div>
      </div>
    </div>
  );
};

export default SignUpPage;
