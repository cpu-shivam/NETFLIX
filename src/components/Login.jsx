import { useRef, useState } from "react";
import Header from "./Header";
import validateLogin from "../utils/validateLogin";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { DEFAULT_BACKGROUND, GOOGLE_LOGO } from "../utils/constants";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [IsToggleLogin, setIsToggleLogin] = useState(false);
  const [errMessage, seterrMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    const message = validateLogin(email.current.value, password.current.value);

    seterrMessage(message);
    if (message) return;

    if (!IsToggleLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              dispatch(
                addUser({ displayName: user.displayName, email: user.email }),
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
            });
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/Browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorMessage);
        });
    }
  };

  const googleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/80 w-6/12 md:w-3/12 mt-60 md:mt-35 mx-auto right-0 left-0 text-white p-2 md:p-10 rounded-sm absolute z-10 pb-3 md:pb-7 text-[10px] md:text-[16px]"
      >
        <h1 className="text-xs md:text-3xl font-bold pb-2 md:pb-5">
          {IsToggleLogin ? "Sign in" : "Sign up"}
        </h1>
        {!IsToggleLogin && (
          <input
            ref={name}
            className="w-full bg-gray-700 my-2 p-1 md:my-4 md:p-3 rounded-xs "
            type="name"
            placeholder="full name"
          ></input>
        )}
        <input
          ref={email}
          className="w-full bg-gray-700 my-2 p-1 md:my-4 md:p-3 rounded-xs "
          type="email"
          placeholder="email address"
        ></input>
        <input
          ref={password}
          className="w-full bg-gray-700 my-2 p-1 md:my-4 md:p-3 rounded-xs "
          type="password"
          placeholder="password"
        ></input>
        <div>{errMessage}</div>
        <button
          className="w-full bg-red-700 mt-3 p-1 md:p-4 rounded-xs hover:bg-red-700/90"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          onClick={googleSignUp}
          className="mt-1  w-full bg-white text-zinc-600 flex font-semibold p-1 md:p-3 rounded-xs  hover:bg-white/90"
        >
          <img
            className="mr-1 w-4 md:w-7"
            src={GOOGLE_LOGO}
          ></img>
          Continue with Google
        </button>
        <div
          className="pt-2 md:pt-6 text-center cursor-pointer hover:underline"
          onClick={() => setIsToggleLogin(!IsToggleLogin)}
        >
          {IsToggleLogin
            ? "new to netflix? signup here"
            : "already registered? sign in"}
        </div>
      </form>
      <img className="fixed h-full w-full object-cover " alt="wallpaper" src={DEFAULT_BACKGROUND}></img>
    </div>
  );
};

export default Login;
