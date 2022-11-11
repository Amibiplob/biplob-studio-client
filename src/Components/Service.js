import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const service = useLoaderData([]);
  return (
    <PhotoProvider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
        {service.map((data) => (
          <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
            <PhotoView key={data.id} src={data.picture} alt="">
              <img src={data.picture} alt="" />
            </PhotoView>
            <div className="card-body p-3">
              <h2 className="card-title">
                {data.name}
                <div className="badge">New</div>
              </h2>
              <p>{data.about.slice(0, 100) + "....."}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`../servicedetails/${data.id}`}
                  className="badge btn-outline p-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Service;
