import { useSelector } from "react-redux";
import MovieBars from "./movieBars";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="pl-10 bg-gray-950">
      <div className="-mt-55">
        <MovieBars title={"Popular"} movies={movies.Popular} />
        <MovieBars title={"Trending Movies"} movies={movies.TrendingMovies} />
        <MovieBars title={"Trending Shows"} movies={movies.TrendingShows} />
        <MovieBars title={"Top Horror"} movies={movies.HorrorMovies} />
        <MovieBars title={"Netflix Best"} movies={movies.TVSeries} />
        <MovieBars title={"Top Rated"} movies={movies.TopRatedMovies} />
        <MovieBars title={"Now Playing"} movies={movies.NowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
