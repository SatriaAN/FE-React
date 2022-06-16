import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
  /**
   * - ambil id movie
   * - fetch film berdasarkan rekomendasi
   */
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecomendationMovie();
  }, []);

  async function getRecomendationMovie() {
    const response = await axios(ENDPOINTS.RECOMENDATION(params.id));

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <DetailMovie />
      <Movies title="Recomendation" />
    </div>
  );
}

export default Detail;
