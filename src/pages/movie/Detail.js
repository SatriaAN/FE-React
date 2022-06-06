import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function Detail() {
  /**
   * - ambil id movie
   * - fetch film berdasarkan rekomendasi
   */
  const params = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecomendationMovie();
  }, []);

  async function getRecomendationMovie() {
    const response = await axios(ENDPOINTS.RECOMENDATIONx(params.id));

    setMovies(response.data.results);
  }

  return (
    <div>
      <DetailMovie />
      <Movies title="Recomendation" movies={movies} />
    </div>
  );
}

export default Detail;
