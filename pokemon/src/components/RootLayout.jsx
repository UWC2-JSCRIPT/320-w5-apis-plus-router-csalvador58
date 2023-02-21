import React from "react";
import { Outlet } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import classes from "../css/RootLayout.module.css";

export default function RootLayout() {
  const pokemonHeaderUrl =
    "https://i0.wp.com/www.vooks.net/img/2016/02/pokemonlogo.jpg?w=1424&ssl=1";
  return (
    <>
      <div className="hero">
        <img
          className={classes.heroImage}
          src={pokemonHeaderUrl}
          alt="Pokemon title with a large cast of pokemons in the background"
        ></img>
      </div>
      <NavigationLinks />

      <main>
        {/* Outlet hook allows for children routes of RootLayout component to render here */}
        <Outlet />
      </main>
    </>
  );
}
