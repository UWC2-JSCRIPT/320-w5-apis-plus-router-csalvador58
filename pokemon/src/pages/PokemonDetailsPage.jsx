import React from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetailsPage() {
  const pokemon = useParams();
  return (
    <>
      <div>Poke Details Page</div>
      <div>{pokemon.id}</div>
    </>
  );
}
