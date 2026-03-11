import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in or sign up
        const { displayName, email } = user;
        // console.log(email);
        dispatch(addUser({ displayName: displayName, email: email }));
        navigate("/Browse");
        // ...
      } else {
        // User is signed out
        //console.log(user);
        dispatch(removeUser());
        navigate("/");
      }
    });
     return () => unsubscribe();
  }, []);

  return (
    <div>
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
    ],
    errorElement: <Error />,
  },
]);

export default Body;
