import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import classes from "../css/FavoritesPage.module.css";
import FavoritesContext from "../store/FavoritesContext";

export default function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  const renderCards = favoritesContext.favorites.map((pokemon, index) => {
    return (
      <Link
        key={`Pokemon-${index}`}
        to={`/Pokemon/${pokemon.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          imageAlt={pokemon.imageAlt}
        />
      </Link>
    );
  });

  if (favoritesContext.favorites.length > 0) {
    return <div className={classes.container}>{renderCards}</div>;
  } else {
    return (
      <div className={classes["align-center"]}>
        <h2>You have not selected any favorite Pokemons!</h2>
        <Link to={"/Pokemon"}>
          <button> Click here to select one now! </button>
        </Link>
      </div>
    );
  }
}
