import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);

    // simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies title={"Top Rated"} movies={movies} />
    </div>
  );
}

export default TopRatedMovie;
