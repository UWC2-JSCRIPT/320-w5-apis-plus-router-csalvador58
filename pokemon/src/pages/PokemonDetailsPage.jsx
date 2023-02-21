import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoritesContext from "../store/FavoritesContext";
import classes from "../css/PokemonDetailsPage.module.css";
// import pokemonDefaultData from "../pokeObjEx.json";

export default function PokemonDetailsPage() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonStats, setPokemonStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const favoritesContext = useContext(FavoritesContext);
  const pokemon = useParams();

  useEffect(() => {
    setPokemonDetails({});
    setPokemonStats([]);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Shape data and save to state
        const pokeData = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          imageAlt: `Front view of ${data.name}`,
          height: data.height,
          weight: data.weight,
          stats: data.stats,
          type: data.types[0].type.name,
        };
        setPokemonDetails(pokeData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });

    //   Commented code for debugging only with fixed data instead of using fetch
    //   const data = pokemonDefaultData.filter((el) => el.id == pokemon.id);
    //   const { id, name, height, weight, stats } = pokemonDetails;

    //   const image = data[0].sprites.other["official-artwork"].front_default;
    //   const image = pokemonDetails.sprites.other["official-artwork"].front_default;
    //   const imageAlt = `Front view of ${name}`;
    //   const type = data[0].types[0].type.name;
    //   const type = pokemonDetails.types[0].type.name;
    //   console.log(stats);
  }, [pokemon.id]);

  // useEffect used to ensure pokemon stats data is available before processing map method to prevent errors
  useEffect(() => {
    if (pokemonDetails.stats) {
      const pokeStats = pokemonDetails.stats.map((element) => {
        return (
          <li
            key={element.stat.name}
          >{`${element.stat.name}: ${element.base_stat}`}</li>
        );
      });
      setPokemonStats(pokeStats);
    } else {
      setPokemonStats(<li key="Stat not Available">Stats not available</li>);
    }
  }, [pokemonDetails]);

  const isFavorite = favoritesContext.favorites.find(
    (pokemon) => pokemon.id === pokemonDetails.id
  );

  const addFavoriteHandler = () => {
    favoritesContext.addFavorite({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      image: pokemonDetails.image,
      imageAlt: pokemonDetails.imageAlt,
    });
  };

  const removeFavoriteHandler = () => {
    favoritesContext.removeFavorite(pokemonDetails.id);
  };

  return (
    <>
      {isLoading && <h2 style={{ textAlign: "center" }}>Page is Loading...</h2>}
      <div className={classes["details-container"]}>
        <div>
          <img
            className={classes["details-image"]}
            src={pokemonDetails.image}
            alt={pokemonDetails.imageAlt}
          ></img>
          {isFavorite ? (
            <div
              className={classes.RemoveFavorites}
              onClick={removeFavoriteHandler}
            >
              Remove From Favorites
            </div>
          ) : (
            <div className={classes.AddFavorites} onClick={addFavoriteHandler}>
              &#x2B50; Add To Favorites &#x2B50;
            </div>
          )}
        </div>
        <div className={classes["details-content"]}>
          <h1>{pokemonDetails.name}</h1>
          <div>
            <b>Pokemon Details:</b>
            <ul>
              <li key="Pokedex ID">{`PokeDex ID: ${pokemonDetails.id}`}</li>
              <li key="Height">{`Height: ${pokemonDetails.height}`}</li>
              <li key="Weight">{`Weight: ${pokemonDetails.weight}`}</li>
              <li key="Type">{`Type: ${pokemonDetails.type}`}</li>
            </ul>
          </div>

          <div className={classes.stats}>
            <b>Stats:</b>
            <ul>{pokemonStats}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
