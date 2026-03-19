import React from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addsearchMovies } from "../utils/moviesSlice";

const useSelectedGenre = () => {
  const dispatch = useDispatch();

  const handleMovieApi = async (genre) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc&vote_average.gte=7&with_genres=" +
        genre,
      options,
    );
    const json = await data.json();
    dispatch(addsearchMovies(json.results));
  };
  const handleShowApi = async (genre) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7&with_genres="+genre,
      options,
    );
    const json = await data.json();
    dispatch(addsearchMovies(json.results));
  };
  return { handleMovieApi, handleShowApi };
};

export default useSelectedGenre;
