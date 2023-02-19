import React, { useEffect, useState } from "react";
// import pokemonDefaultData from "../pokeObjEx.json";

const defaultValues = {
  id: "",
  name: "",
  image: "",
  imageAlt: "",
  moves: [],
  height: 0,
  weight: 0,
};

export default function Characters() {
  const [pokemonList, setPokemonList] = useState([defaultValues]);

  useEffect(() => {
    // Generate random poke IDs
    const pokemonIds = [];
    for (let i = 0; i < 2; i++) {
      // Generate an ID from 1 to 1008 of total possible pokemons
      const randomId = Math.floor(Math.random() * 1009);
      pokemonIds.push(randomId);
    }

    console.log(pokemonIds);

    // Create random pokemon list
    pokemonIds.forEach((id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      console.log(id);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let pokeData = {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            imageAlt: `Front view of ${data.name}`,
            moves: data.moves,
            height: data.height,
            weight: data.weight,
          };
          console.log(pokeData);

          setPokemonList((currentState) => [...currentState, pokeData]);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/35/")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //   });

  const display = pokemonList.map((pokemon) => {
    return (
      <>
        <div>Name: {pokemon.name}</div>
        <div>ID: {pokemon.id}</div>
        <img src={pokemon.image} alt={pokemon.imageAlt}/>
      </>
    );
  });

  return (
    <>
      <div>Characters</div>
      {display}
    </>
  );
}
