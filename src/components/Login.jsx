import { useRef, useState } from "react";
import Header from "./Header";
import validateLogin from "../utils/validateLogin";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { DEFAULT_BACKGROUND } from "../utils/constants";
const Login = () => {
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
            dispatch(addUser({ displayName: user.displayName, email: user.email }));
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
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/80 w-3/12 mt-40 mx-auto right-0 left-0 text-white p-10 rounded-sm absolute "
      >
        <h1 className="text-3xl font-bold pb-5">
          {IsToggleLogin ? "Sign in" : "Sign up"}
        </h1>
        {!IsToggleLogin && (
          <input
            ref={name}
            className="w-full bg-gray-700 my-5 p-3 rounded-xs "
            type="name"
            placeholder="full name"
          ></input>
        )}
        <input
          ref={email}
          className="w-full bg-gray-700 my-4 p-3 rounded-xs "
          type="email"
          placeholder="email address"
        ></input>
        <input
          ref={password}
          className="w-full bg-gray-700  my-4 p-3 rounded-xs "
          type="password"
          placeholder="password"
        ></input>
        <div>{errMessage}</div>
        <button
          className="w-full bg-red-700 mt-10 p-4 rounded-xs"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div
          className="pt-6 text-center cursor-pointer"
          onClick={() => setIsToggleLogin(!IsToggleLogin)}
        >
          {IsToggleLogin
            ? "new to netflix? signup here"
            : "already registered? sign in"}
        </div>
      </form>
      <img
        alt="wallpaper"
        src={DEFAULT_BACKGROUND}
      ></img>
    </div>
  );
};

export default Login;
