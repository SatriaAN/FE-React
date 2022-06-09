import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Membuat store: untuk state global.
 * Menerima param object: reducer
 * Menyimpan slice yang sudah dibuat
 */

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Export default sotre
export default store;
