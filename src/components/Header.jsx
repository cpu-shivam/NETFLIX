import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { NETFLIX_LOGO, options, SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { useRef } from "react";
import { addsearchMovies } from "../utils/moviesSlice";
import { Link } from "react-router-dom";
import useGenreList from "../hooks/useGenreList";
import Select from "react-select/base";

const Header = () => {
  const user = useSelector((store) => store.user);
  useGenreList();
  const movieGenre = useSelector((store) => store.movies.movieGenre);
  const tvGenre = useSelector((store) => store.movies.tvGenre);
  console.log(movieGenre);
  const movieSearch = useRef(null);
  const showGptPage = useSelector((store) => store.gptSearch.showGptSearch);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleMovieSearch = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movieSearch.current.value +
        "&include_adult=false&page=1",
      options,
    );
    const json = await data.json();
    console.log(json);
    dispatch(addsearchMovies(json.results));
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
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
              <select className="bg-black hover:cursor-pointer">
                <option disabled>Movie Genres</option>
                {movieGenre.map((each) => (
                  <option key={each.id}>{each.name}</option>
                ))}
              </select>
              <select className="bg-black hover:cursor-pointer">
                <option disabled>Shows Genres</option>
                {tvGenre.map((each) => (
                  <option key={each.id}>{each.name}</option>
                ))}
              </select>
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
                  onClick={handleMovieSearch}
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
