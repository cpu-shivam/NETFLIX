import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addmovieGenre, addtvGenre } from "../utils/moviesSlice";

const useGenreList = () => {
  const dispatch = useDispatch();
  const isGenre = useSelector(store=>store.movies.movieGenre);

  const handleGenreList = async () => {
    const movieGenre = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      options,
    );
    const TvGenre = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list",
      options,
    );
    const movieGenreList = await movieGenre.json();
    const TvGenreList = await TvGenre.json();
    dispatch(addmovieGenre(movieGenreList.genres));
    dispatch(addtvGenre(TvGenreList.genres));
  };
  useEffect(() => {
    !isGenre && handleGenreList();
  }, []);

};

export default useGenreList;
