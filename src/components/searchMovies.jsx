import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Header from "./Header";

const SearchMovies = () => {
  const movies = useSelector((store) => store.movies.searchMovies);
  return (
    <>
      <Header />
      <div className="py-30 pl-10 bg-zinc-900 h-full">
        <h1 className="text-white py-10 text-3xl">SEARCH RESULTS </h1>
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          {movies.map((each) => (
            <MovieCard key={each.id} movie={each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchMovies;
