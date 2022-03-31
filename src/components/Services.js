import React, { useState } from "react";
import Service from "./Service";

function Services() {
  const [services] = useState([
    {
      name: "Building",
      id: 1,
      img: "/imgs/service1.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
    {
      name: "Tradmills",
      id: 2,
      img: "/imgs/service2.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
    {
      name: "Weight loss",
      id: 3,
      img: "/imgs/service3.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
    {
      name: "General health",
      id: 4,
      img: "/imgs/service4.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
    {
      name: "Running",
      id: 5,
      img: "/imgs/service5.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
    {
      name: "Diet plan",
      id: 6,
      img: "/imgs/service6.png",
      info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet ",
    },
  ]);
  return (
    <div className="services-section">
      <div className="services-container">
        <div className="advices">
          <h1>SERVICES/ADVICES</h1>
          <div className="line"></div>
        </div>
        {services.map((service) => (
          <Service
            image={service.img}
            name={service.name}
            info={service.info}
            key={service.id}
          />
        ))}
      </div>
      <div className="blank-div"></div>
    </div>
  );
}

export default Services;
