import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/HomePage.module.css";

export default function HomePage2() {
  return (
    <div className={classes.content}>
      <h1>Are you ready to Catch'em All?</h1>
      <p>Click below to randomly generate your Pokemon Cards</p>
      <Link to={"/Pokemon"}>
        <button> Click Me!</button>
      </Link>
    </div>
  );
}
