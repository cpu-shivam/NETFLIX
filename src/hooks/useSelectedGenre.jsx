
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchMoviesList, addTotalPages } from "../utils/SearchMoviesSlice";

const useSelectedGenre = () => {
  const dispatch = useDispatch();

  const handleMovieApi = async (genre,currentPage) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page="+currentPage+"&primary_release_year=2024&sort_by=popularity.desc&vote_average.gte=7&with_genres=" +
        genre,
      options,
    );
    const json = await data.json();
    dispatch(addSearchMoviesList(json.results));
    dispatch(addTotalPages(json.total_pages));
  };
  const handleShowApi = async (genre,currentPage) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page="+currentPage+"&sort_by=popularity.desc&vote_average.gte=7&with_genres=" +
        genre,
      options,
    );
    const json = await data.json();
    dispatch(addSearchMoviesList(json.results));
    dispatch(addTotalPages(json.total_pages));
  };
  return { handleMovieApi, handleShowApi };
};

export default useSelectedGenre;
