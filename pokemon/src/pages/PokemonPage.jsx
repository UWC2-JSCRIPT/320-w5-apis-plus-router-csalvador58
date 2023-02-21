import React, { useEffect, useState } from "react";
import Characters from "../components/Characters";
// import pokemonDefaultData from "../pokeObjEx.json";

export default function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate a specified amount of random pokemon IDs
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

    // Fetch pokemon data from random pokemon IDs
    pokemonIds.forEach((id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Commented code for debugging only with fixed data instead of using fetch
          // pokemonDefaultData.forEach((data) => {
          // console.log(data.id);
          // console.log(pokemonList)
          // let lookupIds = pokemonList.map((item) => {
          //   return item.id;
          // });
          // console.log(lookupIds);
          // const isDuplicate = lookupIds.includes(data.id);
          // console.log(isDuplicate)
          // if (!isDuplicate) {

          // Create shape of data to store in state
          const pokeData = {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            imageAlt: `Front view of ${data.name}`,
          };

          setPokemonList((currentState) => {
            const isDuplicate = currentState.findIndex(
              (pokemon) => pokemon.id === pokeData.id
            );
            if (isDuplicate < 0) {
              return [...currentState, pokeData];
            } else {
              return currentState;
            }
          });
          setIsLoading(false);
          // }
        })

        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    });
    // });
  }, []);

  return (
    <>
      {isLoading && <h2 style={{ textAlign: "center" }}>Page is Loading...</h2>}
      <Characters pokemonList={pokemonList} />
    </>
  );
}
