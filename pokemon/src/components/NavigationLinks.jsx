import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/NavigationLinks.module.css";

export default function NavigationLinks() {
  return (
    <div className={classes.navbar}>
      <Link to='' className={classes.link}>Home</Link>
      <Link to='characters' className={classes.link}>Characters</Link>
    </div>
  );
}
