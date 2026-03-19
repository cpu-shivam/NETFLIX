import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import OnlineStatusBanner from "./OnlineStatusBanner";
import SearchMovies from "./searchMovies";
import Shimmer from "./Shimmer";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in or sign up
        const { displayName, email } = user;
        dispatch(addUser({ displayName: displayName, email: email }));
        navigate("/Browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <OnlineStatusBanner />
      <Outlet />
    </div>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Browse",
        element: <Browse />,
      },
      {
        path: "/search",
        element: (
          <Suspense>
            <SearchMovies />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default Body;
