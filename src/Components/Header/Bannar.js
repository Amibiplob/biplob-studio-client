import React, { useEffect, useState } from "react";

const Bannar = () => {
  
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  
  return (
    <div>
      <div className="carousel w-full">
        {service.map((data) => (
          <div
            key={data.id}
            id={`item${data.id}`}
            className="carousel-item h-96"
          >
            <img src={data.picture} className="w-full" alt="" />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        {service.map((data) => (
          <a key={data.id} href={`#item${data.id}`} className="btn btn-xs">
            {data.id}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bannar;
