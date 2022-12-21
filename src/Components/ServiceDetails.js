import React, { useEffect, useState } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import ServiceReview from "./ServiceReview";


const ServiceDetails = () => {

  const service = useLoaderData([]);


  
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://biplob-studio.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);





  return (
    <PhotoProvider>
      <div className="card md:flex-row bg-base-100 shadow-xl mx-auto">
        <figure>
          <PhotoView key={service.id} src={service.picture} alt="">
            <img className="md:w-4/5 h-96" src={service.picture} alt="" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {service.name}</h2>
          <p>{service.about}</p>
        
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center my-10">
      {review.map((data) => (
          <div key={data._id} className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body p-5">
              <div className="flex gap-6 items-center">
                <img className="w-10 h-10 rounded-full" src={data.photoURL} alt="" />

                <div>
                  <h2 className="card-title">Name :<span className=" text-sm">{data.displayName}</span></h2>
                  <h2 className="card-title">Email :<span className=" text-sm">{data.email}</span></h2>
                  <p><span className="font-bold">Rating : </span>{data.rating} </p>
                </div>
              </div>
              <hr />
              <p>{data.reviewText}</p>
            </div>
          </div>
      ))}
      </div>

      <ServiceReview service={service}></ServiceReview>
    </PhotoProvider>
  );
};

export default ServiceDetails;
