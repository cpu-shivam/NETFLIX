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
  const isMovieGenre = useSelector(
    (store) => store.searchMovies.selectedMovieGenre,
  );
  const isShowGenre = useSelector(
    (store) => store.searchMovies.selectedShowGenre,
  );
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
    if (isShowGenre) dispatch(removeselectedShowGenre());
    dispatch(addselectedMovieGenre(e.target.value));
    navigate("/search");
    await handleMovieApi(e.target.value, currentPage);
  };
  const handleShowGenre = async (e) => {
    if (SearchPageData?.length) dispatch(removeSearchMoviesList());
    if (showSearchText) dispatch(resetSearchText());
    if (isMovieGenre) dispatch(removeselectedMovieGenre());
    dispatch(addselectedShowGenre(e.target.value));
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
          ? "absolute bg-linear-to-b from-black flex justify-between z-10"
          : "flex z-40 bg-black fixed"
      }
    >
      <div className={!user ? "w-3/12 md:w-2/12 md:ml-3 px-3 md:px-5" : "w-[11%] ml-1 mt-2 mr-2   md:w-1/12 md:ml-3 md:mt-3 md:mr-4"}>
        <img className="" alt="logo" src={NETFLIX_LOGO}></img>
      </div>
      {user && (
        <>
          <div className=" flex justify-between w-full  items-center text-[8px] md:text-[14px]">
            <div className="text-white flex gap-x-2 md:gap-x-10 items-center">
              <Link to="/browse">
                <span className="hover:underline ">Home</span>
              </Link>

              <div className=" pl-1 outline-1 rounded-sm">
                <span>Movies  </span>
                <select
                  className="mx-1 md:mx-2 bg-black hover:cursor-pointer rounded-sm w-3"
                  onChange={(e) => handleMovieGenre(e)}
                >
                  <option className=""></option>
                  {movieGenre.map((each) => (
                    <option key={each.id} value={each.id}>
                      {each.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" pl-1 outline-1 rounded-sm">
                <span>Shows  </span>
                <select
                  className="mx-1 md:mx-2 bg-black hover:cursor-pointer rounded-sm w-3"
                  onChange={(e) => handleShowGenre(e)}
                >
                  <option className=""></option>
                  {tvGenre.map((each) => (
                    <option key={each.id} value={each.id}>
                      {each.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-1 md:p-4 md:mx-4">
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
                className="p-1 pl-2 w-10 md:w-75 text-white bg-zinc-900 rounded-sm"
              ></input>
              <Link to="/search">
                <button
                  className="bg-zinc-800 p-1 md:p-2 px-2 md:px-4 rounded-sm text-white ml-1 mr-1 "
                  onClick={handleButtonClick}
                >
                  Search
                </button>
              </Link>
              
              <button
                onClick={handleSignOut}
                className="bg-red-800 p-1 px-2  md:p-2 rounded-sm text-white hover:bg-red-800/80 "
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
