import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options,
    );
    const json = await movieList.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRated;
