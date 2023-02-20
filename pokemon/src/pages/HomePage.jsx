import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../css/HomePage.module.css";
import FavoritesContext from "../store/FavoritesContext";

export default function HomePage2() {
  const favoritesContext = useContext(FavoritesContext);
  const [display, setDisplay] = useState(null);

  const saveHandler = () => {
    favoritesContext.saveLoadFav("save");
    setDisplay(
      <p className={classes.display}>
        Your Favorite Pokemons will be saved to memory.
      </p>
    );
    setTimeout(() => {
      setDisplay(null);
    }, 2500);
  };
  const loadHandler = () => {
    favoritesContext.saveLoadFav("load");
  };

  const clearHandler = () => {
    if (
      window.confirm(
        `Are you sure you want to delete your Favorite Pokemons from memory?`
      )
    ) {
      favoritesContext.saveLoadFav("clear");
      setDisplay(
        <p className={classes.display}>
          Your Favorite Pokemons are cleared from memory.
        </p>
      );
      setTimeout(() => {
        setDisplay(null);
      }, 2500);
    }
  };

  return (
    <div className={classes.content}>
      <h1>&#x2B50; Are you ready to Catch'em All? &#x2B50;</h1>
      <p>Click below to randomly generate your Pokemon Cards</p>
      <Link to={"/Pokemon"}>
        <button> Click Me!</button>
      </Link>
      <div className={classes["content-fav"]}>
        <p>Would you like to Save or Load your Favorite Pokemons?</p>
        <button onClick={saveHandler}> Save </button>
        <Link to={"/Favorites"}>
          <button onClick={loadHandler}> Load </button>
        </Link>
        <button onClick={clearHandler}> Clear Local Memory </button>
      </div>
      {display}
    </div>
  );
}
