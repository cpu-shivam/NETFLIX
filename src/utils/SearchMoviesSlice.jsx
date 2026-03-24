import { createSlice } from "@reduxjs/toolkit";

const SearchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchText: null,
    currentPage: 1,
    searchMoviesList: null,
    totalPages: null,
    selectedMovieGenre: null,
    selectedShowGenre: null,
  },
  reducers: {
    addTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    resetSearchText: (state) => {
      state.searchText = null;
    },
    addSearchMoviesList: (state, action) => {
      state.searchMoviesList = action.payload;
    },
    removeSearchMoviesList: (state) => {
      state.searchMoviesList = null;
    },
    addselectedMovieGenre: (state, action) => {
      state.selectedMovieGenre = action.payload;
    },
    removeselectedMovieGenre: (state, action) => {
      state.selectedMovieGenre = null;
    },
    addselectedShowGenre: (state, action) => {
      state.selectedShowGenre = action.payload;
    },
    removeselectedShowGenre: (state, action) => {
      state.selectedShowGenre = null;
    },
  },
});

export const {
  addTotalPages,
  addSearchText,
  resetSearchText,
  addSearchMoviesList,
  removeSearchMoviesList,
  addselectedMovieGenre,
  removeselectedMovieGenre,
  addselectedShowGenre,
  removeselectedShowGenre,
} = SearchMoviesSlice.actions;

export default SearchMoviesSlice.reducer;
