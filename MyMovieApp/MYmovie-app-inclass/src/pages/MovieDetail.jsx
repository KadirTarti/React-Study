import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import VideoSection from "../components/VideoSection";

const bgImg = 'https://www.shutterstock.com/image-vector/empty-podium-curtain-on-background-600nw-2241544551.jpg';
const mainImg = 'https://insertface.com/fb/1494/black-space-wallpaper-face-1493571-05a3k-fb.jpg';


const MovieDetail = () => {
  const {id} = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState('');
  const [error, setError] = useState(false); //! id olmadığı durumlar için error yönetimi

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;
  
  //üstteki id, AppRouter'da detailsin yanına :id yazdığımız yerden geliyor
  console.log(id);

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const movieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`

  useEffect(() => {
    axios(movieDetailUrl).then((res) => {
        setMovieDetail(res.data);
        setError(false);
      })
      .catch((err) => setError(true));
    axios(movieVideo)
      .then((res) => setVideoKey(res.data.results[0]?.key))
      .catch((err) => console.log(err));
  }, [movieDetailUrl, movieVideo]);



  return (
    <div className="md:container px-10 mx-auto py-5 pt-[100px]">
      <h1 className="text-center dark:text-white text-black text-3xl mb-10">
        {title}
      </h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="md:container flex justify-center px-10">
        {error ? (
          <ErrorPage />
        ) : (
          <div className="flex flex-col lg:flex-row max-w-6xl  rounded-lg bg-gray-100 shadow-lg dark:bg-gray-600">
            <img
              className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={poster_path ? bgImg + poster_path : mainImg}
              alt="poster"
            />
            <div className="p-6 flex flex-col justify-between  ">
              <div>
                <h5 className="text-orange-600 dark:text-white text-xl font-medium mb-2">
                  Overview
                </h5>
                <p className="text-gray-700 dark:text-slate-300 text-base mb-4">
                  {overview}
                </p>
              </div>
              <ul className="bg-gray-100 shadow-lg dark:bg-gray-500 rounded-lg border border-gray-400 text-orange-600 dark:text-white">
                <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                  <span className=" text-black dark:text-orange-200">
                    Release Date :{" "}
                  </span>
                  {release_date}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  <span className="text-black dark:text-orange-200">
                    Rate :{" "}
                  </span>
                  {vote_average}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  <span className="text-black dark:text-orange-200">
                    Total Vote :{" "}
                  </span>
                  {vote_count}
                </li>
                <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                  <Link
                    to={-1}
                    className="text-black hover:text-blue-900 hover:underline bg-orange-300 dark:text-white dark:bg-gray-400 py-1 px-2  transition duration-300 ease-in-out mb-4"
                  >
                    Go Back
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
