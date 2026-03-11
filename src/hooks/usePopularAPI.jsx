import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const usePopularAPI =()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options,
    );
    const json = await movieList.json();
    dispatch(addPopular(json.results));
  };
}
  export default usePopularAPI;