import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const isNowPlaying = useSelector((store) => store.movies.NowPlayingMovies);
  useEffect(() => {
    !isNowPlaying && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options,
    );
    const json = await movieList.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlaying;
