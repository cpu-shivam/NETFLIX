import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const usePopularAPI = () => {
  const dispatch = useDispatch();
  const isPopular = useSelector((store) => store.movies.Popular);

  useEffect(() => {
    !isPopular && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options,
    );
    const json = await movieList.json();
    dispatch(addPopular(json.results));
  };
};
export default usePopularAPI;
