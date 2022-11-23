import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../components/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.ul}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="pokelist">PokeList</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
