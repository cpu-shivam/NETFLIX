import React from "react";
import MovieCard from "./MovieCard";

const MovieBars = ({ title, movies }) => {
  return (
    <div className="pb-8">
        <h1 className="text-2xl py-3 font-semibold text-white">{title}</h1>
      <div className="flex gap-2 overflow-x-scroll">
        {movies?.map((each) => (
          <MovieCard key={each.id} movie={each} />
        ))}
      </div>
    </div>
  );
};

export default MovieBars;
