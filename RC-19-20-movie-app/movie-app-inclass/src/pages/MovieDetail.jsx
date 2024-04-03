import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const {id} = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState('')
  
  //üstteki id, AppRouter'da detailsin yanına :id yazdığımız yerden geliyor
  console.log(id);

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_apiKey}`;
  const movieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_apiKey}`


  


  return <div>MovieDetail</div>;
};

export default MovieDetail;
