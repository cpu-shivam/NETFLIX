import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { NETFLIX_LOGO, SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
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
          : " absolute flex justify-between z-20"
      }
    >
      <div className="w-2/12">
        <img className=" px-4  ml-10" alt="logo" src={NETFLIX_LOGO}></img>
      </div>
      {user && (
        <div className="p-4 m-4">
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
      )}
    </div>
  );
};

export default Header;
