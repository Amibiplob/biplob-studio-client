import React from 'react';

const Service = () => {
    return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10'>
       
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline p-3">See More</div>              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;