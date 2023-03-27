import React from "react";
import classes from "../css/Card.module.css";
import PropTypes from "prop-types";

export default function Card({ name, id, image, imageAlt }) {
  return (
    <>
      <div className={classes.content}>
        <div className={classes["image-container"]}>
          <img className={classes.pokemon} src={image} alt={imageAlt} />
        </div>
        <div className={classes.details}>
          <p className="el card">{name}</p>
          <p className="el card">Pokedex ID: {id}</p>
        </div>
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
