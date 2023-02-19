import React from "react";
import Card from "../ui/Card";
import classes from "../css/Container.module.css";

export default function Characters({ pokemonList }) {
    // console.log(pokemonList)
  const renderCards = pokemonList.map((pokemon, index) => {
    return (
      <Card
        key={index}
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.image}
        imageAlt={pokemon.imageAlt}
      />
    );
  });

  return (
    <>
      <div>Characters</div>
      <div className={classes.container}>{renderCards}</div>
    </>
  );
}
