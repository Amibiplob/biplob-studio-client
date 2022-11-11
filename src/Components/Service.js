import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
  const service = useLoaderData([])
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
        {service.map((data) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={data.picture} alt="" />
            </figure>
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
    );
};

export default Service;