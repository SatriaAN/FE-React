import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.POPULAR);
    // Simpan data ke state movie
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title={"Popular"} />
    </>
  );
}

export default PopularMovie;
