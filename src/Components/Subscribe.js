import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Subscribe = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   const email = data.Email;
const subscribe ={
    Email : email,
}
    fetch("https://biplob-studio.vercel.app/subscribe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscribe),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Email Subscribe", { autoClose: 500 }));
  };


  




  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="card-title ">Subscribe</h2>
        <hr />
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

        <div className="card-actions justify-end">
          <button
            type="submit"
            className="btn bg-slate-500 hover:bg-slate-700 mt-5"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
