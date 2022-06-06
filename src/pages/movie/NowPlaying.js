import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.NOWPLAYING);

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
