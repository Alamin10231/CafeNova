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
      className={`navbar shadow-sm text-white fixed top-0 z-50 px-[30px] py-2 ${
        currentpath === "/" ? "bg-transparent" : "bg-[#5c3e3e]"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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

          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#5c3e3e] rounded-box w-52">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourstory"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/moments"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Moments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/askai"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Ask AI
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          CafeNova
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourstory"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/moments"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Moments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/askai"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "text-white"
              }
            >
              Ask AI
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      {/* Navbar End */}
      <div className="navbar-end space-x-2 hidden lg:flex ">
        {user ? (
          <>
            <span className="text-white mr-2">{user.email}</span>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e]"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e]"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-sm bg-transparent border border-white text-white hover:bg-white hover:text-[#5c3e3e]"
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
