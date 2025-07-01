import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setopen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentpath = location.pathname;

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("login");
      })
      .catch((err) => {
        toast.error("Logout failed");
        console.error(err);
      });
  };

  return (
    <div
      className={`navbar shadow-sm text-white fixed top-0 z-50 px-[30px] py-2 transition-colors duration-500 ease-in-out ${
        currentpath === "/" ? "bg-transparent" : "bg-[#5c3e3e]"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
            onClick={() => setopen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {open && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#5c3e3e] rounded-box w-52 animate-slideDown">
              {[
                { to: "/", label: "Home" },
                { to: "/ourstory", label: "Our Story" },
                { to: "/menu", label: "Menu" },
                { to: "/moments", label: "Moments" },
                { to: "/contact", label: "Contact" },
                { to: "/addcards", label: "Add Cards" },
                { to: "/askai", label: "Ask AI" },
                { to: "/login", label: "Login" },
                { to: "/signup", label: "Signup" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400 transition-colors duration-300" : "hover:text-yellow-300 transition-colors duration-300"
                    }
                    onClick={() => setopen(false)} // close menu on click
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          CafeNova
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/ourstory", label: "Our Story" },
            { to: "/menu", label: "Menu" },
            { to: "/moments", label: "Moments" },
            { to: "/contact", label: "Contact" },
            { to: "/addcards", label: "Add Card" },
            { to: "/askai", label: "Ask AI" },
          ].map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white transition-all duration-300"
                    : "text-white hover:text-yellow-300 transition-colors duration-300"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2 hidden lg:flex ">
        {user ? (
          <>
            <span className="text-white mr-2 transition-opacity duration-500 hover:opacity-80">
              {user.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e] transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e] transition-colors duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e] transition-colors duration-300"
            >
              Signup
            </NavLink>
          </>
        )}
      </div>

      {/* Additional styles for animation */}
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
