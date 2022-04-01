import React from "react";
import "../styles/about.css";
import Trainer from "./Trainer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-title">
          <div className="about">
            <h1>About</h1>
            <div className="home-link">
              <Link to={"/home"}>
                <p>Home / </p>
              </Link>
              &nbsp;
              <p> About</p>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="main-text">
            <h2>Laboriosam conseq uuntur animi enim !</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              itaque porro iste laboriosam autem.
            </p>
          </div>
          <div className="second-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              itaque porro iste laboriosam autem. Laboriosam consequuntur animi
              enim cumque aliquam! dipisicing elit. Labore itaque porro aliquam!
              Laboriosam consequuntur animi enim cumque aliquam!
            </p>
            <ul>
              <li> &#10003; Laboriosam consequuntur animi enim cumque </li>
              <li>&#10003; Lorem ipsum dolor sit amet consectetur </li>
              <li>&#10003; Labore itaque animi enim iste cumque </li>
              <li>&#10003; Laboriosam consequuntur animi enim cumque </li>
            </ul>
            <p>
              <i>
                <q>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                  ex aut corrupti dolores soluta laudantium.
                </q>
              </i>
            </p>
          </div>
        </div>
        <div className="about-team">
          <div className="team-title">
            <h4>TEAM</h4>
            <h1>OUR EXPERIENCED TRAINERS</h1>
          </div>
          <div className="team-container">
            <Trainer
              name={"John Doe"}
              role={"Sit amet consectetur"}
              img={"/imgs/trainer.png"}
              info={"Aut corrupti dolores animienim soluta laudantium."}
            />
            <Trainer
              name={"John Doe"}
              role={"Corrupti dolores"}
              img={"/imgs/trainer2.png"}
              info={"Consequuntur animienim cumque aliquam!"}
            />{" "}
            <Trainer
              name={"John Doe"}
              role={"Fi soluta laudantium"}
              img={"/imgs/trainer3.png"}
              info={"Aut corrupti dolores soluta laudantium animi enim."}
            />{" "}
            <Trainer
              name={"John Doe"}
              role={"Aut adipisicing "}
              img={"/imgs/trainer4.png"}
              info={"Aut corrupti dolores soluta laudantium sit amet."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
