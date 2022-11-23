import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../components/Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.cardStyle}>
      <div id={classes.image}>
        <img src={props.image} alt="pokemon" />
      </div>
      <div className={classes.cardInfo}>
        <h2>{`${props.name[0].toUpperCase()}${props.name.slice(1)}`}</h2>
        <p>
          <NavLink to={`${props.name}`}>see more</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Card;
