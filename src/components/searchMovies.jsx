
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Header from "./Header";
import Shimmer from "./Shimmer";
import PagesCount from "./PagesCount";
import Footer from "./Footer";

const SearchMovies = () => {
  const movies = useSelector((store) => store.searchMovies.searchMoviesList);
  if (movies == null) return(<Shimmer/>);
  return (
    <div className="">
      <Header />
      <div className="pt-13 md:pt-30 pl-10 bg-zinc-900 h-full">
        <h1 className=" text-white py-4 text-xs md:py-10 md:text-3xl">SEARCH RESULTS </h1>
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          {movies.map(
            (each) =>
              (each.backdrop_path || each.poster_path) && (
                <MovieCard key={each.id} movie={each} />
              ),
          )}
        </div>
        <PagesCount/>
        <Footer/>
      </div>
    </div>
  );
};

export default SearchMovies;
