import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import ServiceReview from "./ServiceReview";


const ServiceDetails = () => {

  const service = useLoaderData([]);
  // console.log(service);

  return (
    <PhotoProvider>
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto">
        <figure>
          <PhotoView key={service.id} src={service.picture} alt="">
            <img className="w-full lg:h-96" src={service.picture} alt="" />
          </PhotoView>
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

      <ServiceReview service={service}></ServiceReview>
    </PhotoProvider>
  );
};

export default ServiceDetails;
