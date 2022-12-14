import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://biplob-studio.vercel.app/")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
        {service.map((data) => (
          <div key={data.id} className="card w-96 bg-base-100 shadow-xl">
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
        <Link
          to="../service"
          className="btn mx-auto md:col-span-2 lg:col-span-3"
        >
          View All
        </Link>
      </div>
    );
};

export default Card;