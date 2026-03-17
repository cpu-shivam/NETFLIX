import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorror = () => {
  const dispatch = useDispatch();
  const isHorror=useSelector(store=>store.movies.HorrorMovies)
  useEffect(() => {
    !isHorror && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=conjuring&include_adult=false&page=1",
      options,
    );
    const json = await movieList.json();
    dispatch(addHorrorMovies(json.results));
  };
};

export default useHorror;
