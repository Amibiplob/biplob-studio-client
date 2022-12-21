import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const AddItem = () => {
  const service = useLoaderData([]);


  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const id= data.id;
    const serviceName= data.serviceName;
    const photo= data.photo;
    const about= data.about;

    const addService = {
      id:id,
      name:serviceName,
      picture:photo,
      about:about
    };

    fetch("https://biplob-studio.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          toast.success("Service added ", { autoClose: 5000 });
        }
      });
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mx-auto my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="card-title">Add Service</h2>
          <hr />
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service ID</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("id", { required: true })}
                defaultValue={service.length++}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Service Name"
                {...register("serviceName", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Photo URL"
                {...register("photo", { required: true })}
              />
            </div>

            <div className="form-control lg:col-span-3">
              <label className="label">
                <span className="label-text">Service Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                type="text"
                placeholder="Service About   /  Details"
                {...register("about", {
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
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
