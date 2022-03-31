import React from "react";
import "../styles/about.css";

function Trainer(props) {
  return (
    <div className="trainer">
      <img src={props.img} alt="trainer1" />
      <div className="info">
        <h3>{props.name}</h3>
        <h5>{props.role}</h5>
        <p>{props.info}</p>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
    </div>
  );
}

export default Trainer;
