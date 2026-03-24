import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Shimmer from "./Shimmer";
import PagesCount from "./PagesCount";

const SearchMovies = () => {
  const movies = useSelector((store) => store.searchMovies.searchMoviesList);
  console.log("called Search")
  if (movies == null) return(<Shimmer/>);
  return (
    <>
      <Header />
      <div className="py-30 pl-10 bg-zinc-900 h-full">
        <h1 className="text-white py-10 text-3xl">SEARCH RESULTS </h1>
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          {movies.map(
            (each) =>
              (each.backdrop_path || each.poster_path) && (
                <MovieCard key={each.id} movie={each} />
              ),
          )}
        </div>
        <PagesCount/>
      </div>
    </>
  );
};

export default SearchMovies;
