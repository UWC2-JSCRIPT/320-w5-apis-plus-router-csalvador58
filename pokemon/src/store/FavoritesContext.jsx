import React from "react";
import PropTypes from "prop-types";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default FavoritesContext;

FavoritesContext.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};
