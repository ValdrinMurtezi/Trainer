import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <div className="main-text">
          <h1>Go hard,</h1>
          <h1>Or Go Home!</h1>
          <div className="start-now">
            <button>Start now</button>
          </div>
        </div>
        <div className="second-text">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              enim voluptatem provident repellat !
            </p>
          </div>
        </div>
      </div>
      <div className="home-img">
        <img src={"/imgs/homelogo.png"} alt="Logo" />
      </div>
    </div>
  );
}

export default Home;
