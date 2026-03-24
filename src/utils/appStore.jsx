import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from "./gptSearchSlice";
import configReducer from "./configSlice"
import searchMoviesReducer from "./SearchMoviesSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    config: configReducer,
    searchMovies:searchMoviesReducer
  },
});
export default appStore;
