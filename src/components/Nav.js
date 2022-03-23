import React, { useState } from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(true);

  const changeActive = () => {
    setActive(!active);
  };
  const showMenu = () => {
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
            <li>Home</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/services"}>
            <li>Services</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/about"}>
            <li>About</li>
          </Link>
          <Link onClick={changeActive} style={liStyle} to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div onClick={showMenu} className="menu">
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
