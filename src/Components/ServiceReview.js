import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";
const ServiceReview = ({ service }) => {
    const { id, name, _id } = service;
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const rating = data.Rating;
    const text = data.text;
    const makereview = {
      reviewText: text,
      rating,
      id,
      name,
      _id,
      email,
      displayName,
      photoURL,
    };

    fetch("https://biplob-studio.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makereview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks For Your Review. ", { autoClose: 5000 });
        }
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="card-title">Provide a Review</h2>
        <hr />
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              defaultValue={displayName}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              defaultValue={email ? email : "No Email Found"}
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Rating</span>
            </label>
            <select
              className="input input-bordered"
              {...register("Rating", { required: true })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-control lg:col-span-3">
            <label className="label">
              <span className="label-text">Your Text</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              type="text"
              placeholder="Your Text"
              {...register("text", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            type="submit"
            className="btn bg-slate-500 hover:bg-slate-700 mt-5"
          >
            Rating
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceReview;
