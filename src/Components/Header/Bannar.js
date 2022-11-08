import React from "react";

const Bannar = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-96 my-5">
        <img
          src="https://images.unsplash.com/photo-1667716011862-630916a74d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-full object-cover brightness-100"
          alt=""
        />
        <div className="absolute flex flex-col transform -translate-y-1/2 left-5 top-1/2 text-white">
          <h1 className="text-3xl">Text1</h1>
          <p>Text</p>
        </div>
        <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5  bottom-1">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1667716011862-630916a74d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-full object-cover brightness-100"
          alt=""
        />
        <div className="absolute flex flex-col transform -translate-y-1/2 left-5 top-1/2 text-white">
          <h1 className="text-3xl">Text2</h1>
          <p>Text</p>
        </div>
        <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5  bottom-1">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1667716011862-630916a74d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-full object-cover brightness-100"
          alt=""
        />
        <div className="absolute flex flex-col transform -translate-y-1/2 left-5 top-1/2 text-white">
          <h1 className="text-3xl">Text3</h1>
          <p>Text</p>
        </div>
        <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5  bottom-1">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1667716011862-630916a74d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-full object-cover brightness-100"
          alt=""
        />
        <div className="absolute flex flex-col transform -translate-y-1/2 left-5 top-1/2 text-white">
          <h1 className="text-3xl">Text4</h1>
          <p>Text</p>
        </div>
        <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5  bottom-1">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
