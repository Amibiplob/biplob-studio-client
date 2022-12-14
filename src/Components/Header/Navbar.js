import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const handleLogOut = () => {
    Logout()
      .then(() => {
        <Navigate to="/"></Navigate>;
      })
      .catch((error) => {
        // An error happened.

      });
  };

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
                <Link to='/blog'>Blog</Link>
              </li>

              <li className="p-2 hover:bg-slate-800 hover:rounded-lg">
                <Link to='/service'>Service</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl p-0 xl:p-2">
            <img
              className="w-5 h-5 mr-1"
              src="https://cdn-icons-png.flaticon.com/512/1009/1009293.png"
              alt=""
            />
            Biplob Studio
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
              data-tip="Service"
            >
              <NavLink to="/service">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Service
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {!user?.email && !user?.uid ? (
            <>
              <Link to="login" className="btn btn-ghost p-1">
                Login
              </Link>
              <Link to="register" className="btn btn-ghost p-1">
                Sign Up
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-hover dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-xl">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://cdn.vectorstock.com/i/1000x1000/25/72/picture-coming-soon-icon-vector-31612572.webp"
                    }
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-0 p-0 shadow bg-neutral rounded-box w-52"
              >
                <li className="items-center bg-slate-500 py-1">
                  Hi , {user.displayName}
                </li>
                <li>
                  <Link
                    to="profile"
                    className="justify-between hover:bg-gray-600"
                  >
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="reviewitem"
                    className="justify-between hover:bg-gray-600"
                  >
                    My Reviews
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="addservice"
                    className="justify-between hover:bg-gray-600"
                  >
                    Add Service
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogOut} className=" hover:bg-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
