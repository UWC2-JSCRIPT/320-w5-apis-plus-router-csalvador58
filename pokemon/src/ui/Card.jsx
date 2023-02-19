import React from "react";
import classes from "../css/Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ name, id, image, imageAlt }) {
  return (
    <>
      <div className={classes.content}>
        <Link to={`Pokemon-${id}`}>
          <div className={classes["image-container"]}>
            <img className={classes.pokemon} src={image} alt={imageAlt} />
          </div>
          <div className={classes.details}>
            <p>{name}</p>
            <p>Pokedex ID: {id}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};
