import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { NETFLIX_LOGO, SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSelectedGenre from "../hooks/useSelectedGenre";
import useMovieSearch from "../hooks/useMovieSearch";


import {
  addSearchText,
  addselectedMovieGenre,
  addselectedShowGenre,
  removeSearchMoviesList,
  removeselectedMovieGenre,
  removeselectedShowGenre,
  resetSearchText,
} from "../utils/SearchMoviesSlice";

const Header = () => {

  const isMovieGenre=useSelector(store=>store.searchMovies.selectedMovieGenre)
  const isShowGenre=useSelector(store=>store.searchMovies.selectedShowGenre)
  const { handleMovieSearch } = useMovieSearch();
  const user = useSelector((store) => store.user);
  const SearchPageData = useSelector(
    (store) => store.searchMovies.searchMoviesList,
  );
  const navigate = useNavigate();
  const { handleMovieApi, handleShowApi } = useSelectedGenre();
  const movieGenre = useSelector((store) => store.movies.movieGenre);
  const tvGenre = useSelector((store) => store.movies.tvGenre);
  const movieSearch = useRef(null);
  const showGptPage = useSelector((store) => store.gptSearch.showGptSearch);
  const showSearchText = useSelector((store) => store.searchMovies.searchText);
  const dispatch = useDispatch();
  const currentPage = 1;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  if (!movieGenre) return;
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleMovieGenre = async (e) => {
    if (SearchPageData) dispatch(removeSearchMoviesList());
    if (showSearchText) dispatch(resetSearchText());
    if(isShowGenre)dispatch(removeselectedShowGenre())
    dispatch(addselectedMovieGenre(e.target.value))
    navigate("/search");
    await handleMovieApi(e.target.value, currentPage);
  };
  const handleShowGenre = async (e) => {
    if (SearchPageData?.length) dispatch(removeSearchMoviesList());
    if (showSearchText) dispatch(resetSearchText());
    if(isMovieGenre)dispatch(removeselectedMovieGenre())
    dispatch(addselectedShowGenre(e.target.value))
    navigate("/search");
    await handleShowApi(e.target.value, currentPage);
  };
  const handleButtonClick = async () => {
    dispatch(addSearchText(movieSearch.current.value));
    if (SearchPageData?.length) dispatch(removeSearchMoviesList());
    await handleMovieSearch(movieSearch.current.value, currentPage);
  };

  const handleDefaultLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div
      className={
        !user
          ? "absolute bg-linear-to-b from-black flex justify-between"
          : "  flex  z-20 bg-black fixed"
      }
    >
      <div className="w-2/12 ml-10 ">
        <img className="px-4  " alt="logo" src={NETFLIX_LOGO}></img>
      </div>
      {user && (
        <>
          <div className=" flex justify-between w-full  items-center">
            <div className="text-white flex gap-x-10">
              <Link to="/browse">
                <span>Home</span>
              </Link>

              <div>
                <span>Movies By: </span>
                <select
                  className="bg-black hover:cursor-pointer border rounded-sm"
                  onChange={(e) => handleMovieGenre(e)}
                >
                  <option disabled>Movie Genres</option>
                  {movieGenre.map((each) => (
                    <option key={each.id} value={each.id}>
                      {each.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <span>Shows by: </span>
                <select
                  className="bg-black hover:cursor-pointer border rounded-sm"
                  onChange={(e) => handleShowGenre(e)}
                >
                  <option disabled>Shows Genres</option>
                  {tvGenre.map((each) => (
                    <option key={each.id} value={each.id}>
                      {each.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-4 mx-4">
              {showGptPage && (
                <select
                  className="bg-black text-white px-3 py-2 rounded-lg"
                  onChange={(e) => handleDefaultLang(e)}
                >
                  {SUPPORTED_LANG.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <input
                ref={movieSearch}
                placeholder="search for movies and shows"
                className="p-1 pl-2 w-75 text-white bg-zinc-900   rounded-sm"
              ></input>
              <Link to="/search">
                <button
                  className="bg-zinc-800 p-2 rounded-sm text-white text-sm ml-1 px-4"
                  onClick={handleButtonClick}
                >
                  Search
                </button>
              </Link>
              <button
                className="text-white bg-purple-800 mx-4 p-2 rounded-lg hover:bg-purple-800/80"
                onClick={handleGptSearch}
              >
                {showGptPage ? "Home Page" : "Gpt Search"}
              </button>
              <button
                onClick={handleSignOut}
                className="bg-red-800 p-2 rounded-md text-white hover:bg-red-800/80 "
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
