import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTVSeries } from "../utils/moviesSlice";

const useTVSeries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      options,
    );
    const json = await movieList.json();
    dispatch(addTVSeries(json.results));
  };
};
export default useTVSeries;
