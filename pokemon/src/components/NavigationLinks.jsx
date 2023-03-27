import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/NavigationLinks.module.css";

export default function NavigationLinks() {
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Pokemon" className={classes.link}>
            Pokemon
          </Link>
        </li>
        <li>
          <Link to="Favorites" className={classes.link}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
