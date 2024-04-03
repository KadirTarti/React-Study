import React from "react";
import { useMovieContext } from "../context/MovieContext";

const Main = () => {
  const {movies} = useMovieContext()
  console.log("Main", movies);
  return <div>Main</div>;
};

export default Main;