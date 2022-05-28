import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
  // Simpan API_KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // Fetch data dari Axios
    const response = await axios(URL);

    // Simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title={"Popular"} movies={movies} />
    </>
  );
}

export default PopularMovie;
