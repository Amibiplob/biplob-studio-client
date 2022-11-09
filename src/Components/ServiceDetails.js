import React from 'react';

const ServiceDetails = () => {
    return (
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
    );
};

export default ServiceDetails;