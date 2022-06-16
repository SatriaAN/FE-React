// import createSlice: untuk membuat slice

const { createSlice } = require("@reduxjs/toolkit");
const { default: data } = require("../../utils/data");

/**
 * Buat slice : untuk generate action dan reducers
 * Menerima param object: name, initialState, reducers
 */

const moviesSlice = createSlice({
  name: "Movies Slice", // nama slice
  initialState: {
    // nilai awalstate movies
    movies: data,
  },
  reducers: {
    // membuat reducer untuk update state
    addMovie(state, action) {
      // data movie ada di payload
      state.movies.push(action.payload);
    },
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// generate action dan reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies } = moviesSlice.actions;

// Export Reducer dan actions
export default moviesReducer;
export { addMovie, updateMovies };
