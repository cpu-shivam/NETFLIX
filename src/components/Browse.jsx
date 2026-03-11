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

const Browse = () => {
  
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
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
