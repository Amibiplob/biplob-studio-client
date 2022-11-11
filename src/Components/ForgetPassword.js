import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";

const ForgetPassword = () => {
  const { ResetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
     const email = data.Email;
     ResetPassword(email)
       .then(() => {
         // Password reset email sent!
         toast.error("Password reset email sent!", { autoClose: 500 });
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
          toast.error(errorMessage, { autoClose: 500 });
          toast.error(errorCode, { autoClose: 500 });
       setError(errorMessage)
       });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="card-title ">Reset Password!</h2>
        <hr/>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            className="input input-bordered"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
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
        <div className="card-actions justify-end">
          <button
            type="submit"
            className="btn bg-slate-500 hover:bg-slate-700 mt-5"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
