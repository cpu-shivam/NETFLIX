import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addTrendingShows } from '../utils/moviesSlice';

const useTrendingShows = () => {
   const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day",
      options,
    );
    const json = await movieList.json();
    dispatch(addTrendingShows(json.results));
  };
}

export default useTrendingShows