import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMoviesAPI = () => {
  const dispatch = useDispatch();
  const isTrending = useSelector((store) => store.movies.TrendingMovies);

  useEffect(() => {
    !isTrending && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      options,
    );
    const json = await movieList.json();
    dispatch(addTrendingMovies(json.results));
  };
};

export default useTrendingMoviesAPI;
