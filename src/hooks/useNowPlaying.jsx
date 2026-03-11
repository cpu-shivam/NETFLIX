import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlaying = () => {
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
    dispatch(addNowPlayingMovies(json.results));
  };
}

export default useNowPlaying