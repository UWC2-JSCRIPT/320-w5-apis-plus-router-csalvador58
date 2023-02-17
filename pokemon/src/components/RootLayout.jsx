import React from "react";
import { Outlet } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

export default function RootLayout() {
  const pokemonHeaderUrl =
    "https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png";
  return (
    <>
      <header>
        <img src={pokemonHeaderUrl} alt="Pokemon graphic title"></img>
        <NavigationLinks />
      </header>
      <main>{Outlet}</main>
    </>
  );
}
