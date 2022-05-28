import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    // Fetch data dari axios
    const response = await axios(URL);

    // Simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies title={"Now Playing"} movies={movies} />
    </div>
  );
}

export default NowPlayingMovie;
