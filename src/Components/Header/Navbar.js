import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-circle swap swap-rotate lg:hidden">
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 shadow bg-neutral rounded-lg w-52"
            >
              <li className="p-2 hover:bg-slate-800 hover:rounded-lg">
                <Link>Item 1</Link>
              </li>

              <li className="p-2 hover:bg-slate-800 hover:rounded-lg">
                <Link>Item 1</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex p-0">
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Home"
            >
              <NavLink to="/home">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Blog"
            >
              <NavLink to="/blog">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Blog
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Home"
            >
              <NavLink to="/home">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Home"
            >
              <NavLink to="/home">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Home"
            >
              <NavLink to="/home">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="login" className="btn btn-ghost p-1">
            Login
          </Link>
          <Link to="register" className="btn btn-ghost p-1">
            Sign Up
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              <li>
                <Link to="dashboard" className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
