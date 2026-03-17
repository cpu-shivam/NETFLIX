import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import React, { useEffect } from "react";
import { options } from "../utils/constants";

const useVideoFetchApi = (id) => {
  const dispatch = useDispatch();
  const isTrailer = useSelector((store) => store.movies.trailer);

  const getVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      options,
    );
    const movieData = await data.json();
    const trailer = movieData.results.filter((each) => each.type === "Trailer");
    dispatch(addTrailer(trailer[0]));
  };
  useEffect(() => {
    !isTrailer && getVideo();
  }, []);
};
export default useVideoFetchApi;
