import React from "react";
import "../styles/services.css";

function Service(props) {
  return (
    <div className="service">
      <img src={props.image} alt="Service1" />
      <h1>{props.name}</h1>
      <p>{props.info}</p>
    </div>
  );
}

export default Service;
