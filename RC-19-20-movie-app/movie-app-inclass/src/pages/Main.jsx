import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../context/MovieCard";

const Main = () => {
  const {movies, loading} = useMovieContext()
  console.log("Main", movies);

  return <>
  <div className='flex justify-center flex-wrap'>
  {
    loading ? <h2 className='text-2xl text-red-800'>Loading...</h2> : movies?.map((movie) => <MovieCard/>)


  }
  </div>

  
  
  </>;
};

export default Main;