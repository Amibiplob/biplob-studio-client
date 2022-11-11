import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData([]);
  console.log(service);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.Email;
    console.log(data);
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto">
        <figure>
          <img className="w-full lg:h-96" src={service.picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {service.name}</h2>
          <p>{service.about}</p>
          <div className="card-actions justify-end">
            <button className="btn ">Rating</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center my-10">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <div className="card-body p-5">
            <div className="flex gap-6 items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placeimg.com/192/192/people"
                alt=""
              />

              <div>
                <h2 className="card-title">email</h2>
                <p>rating : 5 </p>
              </div>
            </div>
            <hr />
            <p>
              If a dog chews shoes whose shoes does he choose?If a dog chews
              shoes whose shoes does he choose? If a dog chews shoes whose shoes
              does he choose? If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="card-title ">Rating</h2>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              className="input input-bordered"
              type="text"
              placeholder={service.name}
          readOnly
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
              {...register("text", {
                required: true,
              })}
            />
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
    </div>
  );
};

export default ServiceDetails;
