import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../css/PokemonDetailsPage.module.css";
// import pokemonDefaultData from "../pokeObjEx.json";

export default function PokemonDetailsPage() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonStats, setPokemonStats] = useState([]);

  const pokemon = useParams();

  useEffect(() => {
    setPokemonDetails({});
    setPokemonStats([]);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const pokeData = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          imageAlt: `Front view of ${data.name}`,
          moves: data.moves,
          height: data.height,
          weight: data.weight,
          stats: data.stats,
          type: data.types[0].type.name,
        };
        setPokemonDetails(pokeData);
      })
      .catch((error) => console.log(error));

    //   const data = pokemonDefaultData.filter((el) => el.id == pokemon.id);
    //   const { id, name, height, weight, stats } = pokemonDetails;
   
    //   const image = data[0].sprites.other["official-artwork"].front_default;
    //   const image = pokemonDetails.sprites.other["official-artwork"].front_default;
    //   const imageAlt = `Front view of ${name}`;
    //   const type = data[0].types[0].type.name;
    //   const type = pokemonDetails.types[0].type.name;
    //   console.log(stats);
  }, []);

  useEffect(() => {
    console.log(pokemonDetails.stats);

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

  return (
    <>
      <div className={classes["details-container"]}>
        <div>
          <img
            className={classes["details-image"]}
            src={pokemonDetails.image}
            alt={pokemonDetails.imageAlt}
          ></img>
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
