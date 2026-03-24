import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMoviesList, addTotalPages } from "../utils/SearchMoviesSlice";

const useMovieSearch = () => {
  const searchText = useSelector((store) => store.searchMovies.searchText);
  const dispatch = useDispatch();
  console.log(searchText)
  const handleMovieSearch = async (SearchedMovie,page) => {
      const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        SearchedMovie +
        "&include_adult=false&page=" +
        page,
      options,
    );
    const json = await data.json();
    console.log(json)
    dispatch(addSearchMoviesList(json.results));
    dispatch(addTotalPages(json.total_pages));
  };

  return { handleMovieSearch };
};

export default useMovieSearch;
