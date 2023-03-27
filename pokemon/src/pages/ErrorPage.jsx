import React from "react";
import { Link } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import classes from "../css/ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <>
      <RootLayout />
      <div className={classes.headerInfo}>
        <h1>
          Unfortunately an error occurred or the Pokemon does not want to be
          bothered at this time.
        </h1>
        <h2>
          Click on <Link to={"/"}>Home</Link> or go back on your browser.
        </h2>
      </div>
    </>
  );
}
