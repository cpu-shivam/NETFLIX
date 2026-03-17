import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-40">
        <img className="rounded-sm" src={"https://image.tmdb.org/t/p/w500/" + (movie.poster_path || movie.
backdrop_path)}></img>
      </div>
    </div>
  );
};

export default MovieCard;
