import React, { useState } from "react";
import FavoritesContext from "./FavoritesContext";
import PropTypes from "prop-types";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  const addToFavorites = (pokemon) => {
    setFavorite((currentFavorites) => {
      const index = currentFavorites.findIndex(
        (favorite) => favorite.id == pokemon.id
      );
      if (index < 0) {
        return [...currentFavorites, pokemon];
      } else {
        return [...currentFavorites];
      }
    });
  };

  const removeFromFavorites = (pokemonId) => {
    setFavorite((currentFavorites) => {
      const index = currentFavorites.findIndex(
        (favorite) => favorite.id == pokemonId
      );
      const updateState = [...currentFavorites];
      updateState.splice(index, 1);
      return updateState;
    });
  };

  const storedFavoritesContext = {
    favorites: favorite,
    addFavorite: addToFavorites,
    removeFavorite: removeFromFavorites,
  };

  return (
    <FavoritesContext.Provider value={storedFavoritesContext}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
