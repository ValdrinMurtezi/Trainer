import React, { useState } from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(true);

  const changeActive = () => {
    setActive(!active);
  };
  const changeMenuIcon = () => {
    setMenu(!menu);
  };

  const liStyle = {
    textDecoration: "none",
  };
  return (
    <div className="navbar">
      <nav>
        <h1>ATHLETIC.</h1>
        <ul className={active ? "links active" : "links"}>
          <Link onClick={changeActive} style={liStyle} to={"/home"}>
            <li onClick={changeMenuIcon}>Home</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/services"}>
            <li onClick={changeMenuIcon}>Services</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/about"}>
            <li onClick={changeMenuIcon}>About</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/contact"}>
            <li onClick={changeMenuIcon}>Contact</li>
          </Link>
        </ul>
        <div onClick={changeMenuIcon} className="menu">
          <i
            onClick={changeActive}
            className={!menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
