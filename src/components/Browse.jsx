import Header from "./Header";
import usePopularAPI from "../hooks/usePopularAPI";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMoviesAPI from "../hooks/useTrendingMoviesAPI";
import useTrendingShows from "../hooks/useTrendingShows";
import useNowPlaying from "../hooks/useNowPlaying";
import useHorror from "../hooks/useHorror";
import useTVSeries from "../hooks/useTVSeries";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import MovieBars from "./movieBars";
import SearchMovies from "./searchMovies";

const Browse = () => {
  const showGptPage = useSelector((store) => store.gptSearch.showGptSearch);
  const searchMoviesList = useSelector((store) => store.movies.searchMovies);
  usePopularAPI();
  useTrendingMoviesAPI();
  useTrendingShows();
  useNowPlaying();
  useHorror();
  useTVSeries();
  useTopRated();

  return (
    <div>
      <Header />
      {/* {showGptPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )} */}
   
          <MainContainer />
          <SecondaryContainer />
   

    </div>
  );
};

export default Browse;
