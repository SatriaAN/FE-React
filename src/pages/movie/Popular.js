import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function PopularMovie() {
  // Membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.POPULAR);
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
