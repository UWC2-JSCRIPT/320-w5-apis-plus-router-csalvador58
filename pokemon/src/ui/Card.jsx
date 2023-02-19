import React from "react";
import classes from "../css/Card.module.css";

export default function Card({ name, id, image, imageAlt }) {
  return (
    <>
      <div className={classes.content}>
        <div className={classes["image-container"]}>
          <img className={classes.pokemon} src={image} alt={imageAlt} />
        </div>
        <div className={classes.details}>
          <div>Name: {name}</div>
          <div>ID: {id}</div>
        </div>
      </div>
    </>
  );
}
