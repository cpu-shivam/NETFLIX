import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-linear-to-b from-black flex justify-between">
      <div className="w-2/12">
        <img
          className=" px-4  ml-10"
          alt="logo"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>
      {user && (
        <div className="p-4 m-4">
          <button
            onClick={handleSignOut}
            className="bg-red-700 p-1 rounded-md text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
