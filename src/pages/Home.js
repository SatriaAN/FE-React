import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/data";

// Membuat fungsi Home
function Home() {
  // lifting state from movies.js
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

// Export Home
export default Home;
