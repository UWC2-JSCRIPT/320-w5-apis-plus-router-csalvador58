import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonDefaultData from "../pokeObjEx.json";
import classes from "../css/PokemonDetailsPage.module.css";

export default function PokemonDetailsPage() {
  const [pokemonList, setPokemonList] = useState({});

  const pokemon = useParams();
  //   console.log(pokemon);

  //   const data = pokemonDefaultData.filter((pokeId) => pokeId.id === pokemon.id);
  //   console.log(data);

  //   {
  //     id: data.id,
  //     name: data.name,
  //     image: data.sprites.other["official-artwork"].front_default,
  //     imageAlt: `Front view of ${data.name}`,
  //     moves: data.moves,
  //     height: data.height,
  //     weight: data.weight,
  //   }

  //   useEffect(() => {

  const data = pokemonDefaultData.filter((el) => el.id == pokemon.id);
  const [{ id, name, height, weight, stats }] = data;
  const image = data[0].sprites.other["official-artwork"].front_default;
  const imageAlt = `Front view of ${name}`;
  const type = data[0].types[0].type.name;
  console.log(stats);
  const pokeStats = stats.map((element) => {
    return (
      <>
        <li>{`${element.stat.name}: ${element.base_stat}`}</li>
      </>
    );
  });
  console.log(pokeStats);

  // const pokemonIndex = pokemonDefaultData.filter((element) => {
  //   console.log(`El ID: ${element.id}`);
  //   console.log(`ID: ${pokemon.id}`);
  //   if (element.id === pokemon.id) {
  //     return element;
  //   }
  // });
  // console.log(`PokeIndex: ${pokemonIndex}`);
  //   }, []);

  return (
    <>
      <div className={classes["details-container"]}>
        <div>
          <img className={classes["details-image"]} src={image} alt={imageAlt}></img>
        </div>
        <div className={classes["details-content"]}>
          <h1>{name}</h1>
          <div>
            <b>Pokemon Details:</b>
            <ul>
              <li>{`PokeDex ID: ${id}`}</li>
              <li>{`Height: ${height}`}</li>
              <li>{`Weight: ${weight}`}</li>
              <li>{`Type: ${type}`}</li>
            </ul>
          </div>

          <div className={classes.stats}>
            <b>Stats:</b>
            <ul>{pokeStats}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
