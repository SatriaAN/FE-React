// Import Navbar, Footer
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/data";

// Membuat fungsi main untuk menampung Hero dan Movies
function Main() {
  // lifting state from movies.js
  const [movies, setMovies] = useState(data);

  // mengirim props ke movies dan addMovieForm
  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

// Membuat fungsi Home
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

// Export Home
export default Home;
