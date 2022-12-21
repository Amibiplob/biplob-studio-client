import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import img from "../img/112454-form-registration.json";
import { AuthContext } from "../Context/UserContext";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../FireBase/firebase.init";
import { toast } from "react-toastify";
const auth = getAuth(app);
const Register = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const { createUser} = useContext(AuthContext);


  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data.Name;
    const email = data.Email;
    const password = data.Password;

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;


        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
  toast.success("Hi " + user.displayName, { autoClose: 5000 });
  navigate(from, { replace: true });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setError("");
      })
      .catch((error) => {

        const errorMessage = error.message;

        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Register now</h1>
            <Lottie className="w-3/4" animationData={img} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Name"
                  {...register("Name", {
                    required: true,
                    maxLength: 80,
                  })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("Password", {
                    required: true,
                  })}
                  className="input input-bordered"
                />
              </div>
              {error && (
                <div className="flex text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="pl-1">{error}</p>
                </div>
              )}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-slate-500 hover:bg-slate-700"
                >
                  Register
                </button>
              </div>
              <p className="text-center">
                Don't have an account?
                <Link to="../login" className="link link-neutral ml-1">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
