import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "../css/Characters.module.css";
import PropTypes from "prop-types";

export default function Characters({ pokemonList }) {
  // console.log(pokemonList)
  const renderCards = pokemonList.map((pokemon, index) => {
    return (
      <Link
        key={`Pokemon-${index}`}
        to={`/Pokemon/${pokemon.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          imageAlt={pokemon.imageAlt}
        />
      </Link>
    );
  });

  return <div className={classes.container}>{renderCards}</div>;
}

Characters.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};
