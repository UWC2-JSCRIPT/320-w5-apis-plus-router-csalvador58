import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import pokemonDefaultData from "../pokeObjEx.json";

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Generate random poke IDs
    const pokemonIds = [];
    for (let i = 0; i < 10; i++) {
      // Generate an ID from 1 to 1008 of total possible pokemons
      const randomId = Math.floor(Math.random() * 1009);
      if (!pokemonIds.includes(randomId)) {
        pokemonIds.push(randomId);
      } else {
        // Decrease count to repeat random generator
        i--;
      }
    }

    // console.log(pokemonIds);

    // Create random pokemon list

    pokemonIds.forEach((id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      //   console.log(id);

      fetch()
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          // pokemonDefaultData.forEach((data) => {
          //   const lookupIds = pokemonList.map((item) => {
          //     return item.id;
          //   });
          //   console.log(lookupIds);
          //   const isDuplicate = lookupIds.includes(data.id);
          //   console.log(isDuplicate)

          // if (!isDuplicate) {
          const pokeData = {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            imageAlt: `Front view of ${data.name}`,
            moves: data.moves,
            height: data.height,
            weight: data.weight,
          };
          // console.log(pokeData);

          setPokemonList((currentState) => [...currentState, pokeData]);
          // }
        })
        .catch((error) => console.log(error));
    });
    // });
  }, []);

  return (
    <>
      <div>HomePage</div>
      <Characters pokemonList={pokemonList} />
    </>
  );
}
