import React from "react";
import { useAuthContext } from "../context/AuthContext";

const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"; //* resim yoksa default resmi göster diyecez

const MovieCard = ({ id, poster_path, overview, vote_average, title }) => {
  const { currentUser } = useAuthContext();
  return (
    <div className="movie" id="container">
      <img
        loading="lazy"
        src={
          poster_path
            ? "https://image.tmdb.org/t/p/w1280" + poster_path
            : defaultImage
        }
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && <span>{vote_average.toFixed(1)}</span>}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;