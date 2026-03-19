import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    Popular: null,
    trailer: null,
    searchMovies: null,
    TrendingMovies: null,
    TrendingShows: null,
    TopRatedMovies: null,
    NowPlayingMovies: null,
    TVSeries: null,
    HorrorMovies: null,
    trailer: null,
    movieGenre: null,
    tvGenre: null,
    dhurandhar: [
      {
        adult: false,
        backdrop_path: "/owQeDouUZ6wI6f1aTOYEFd511zn.jpg",
        genre_ids: [28, 80, 53],
        id: 1582770,
        original_language: "hi",
        original_title: "धुरंधर: द रिवेंज",
        overview:
          "As rival gangs, corrupt officials and a ruthless Major Iqbal close in, Hamza's mission for his country spirals into a bloody personal war where the line between patriot and monster disappears in the streets of Lyari.",
        popularity: 21.9987,
        poster_path: "/ptTwQES14pr5c3aZvJg56YlYgb1.jpg",
        release_date: "2026-03-18",
        title: "Dhurandhar: The Revenge",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
  },

  reducers: {
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    addTrendingShows: (state, action) => {
      state.TrendingShows = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addTVSeries: (state, action) => {
      state.TVSeries = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.HorrorMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addsearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },

    removesearchMovies: (state) => {
      state.searchMovies = null;
    },

    addtvGenre: (state, action) => {
      state.tvGenre = action.payload;
    },
    addmovieGenre: (state, action) => {
      state.movieGenre = action.payload;
    },
  },
});
export const {
  addPopular,
  addNowPlayingMovies,
  addTrendingMovies,
  addTrendingShows,
  addHorrorMovies,
  addTVSeries,
  addTopRatedMovies,
  addTrailer,
  addsearchMovies,
  addtvGenre,
  addmovieGenre,
  removesearchMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
