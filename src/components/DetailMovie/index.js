import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/endpoints";
import Button from "../ui/Button";
import StyledDetailMovie from "./StyledDetailMovie";

function DetailMovie() {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    // const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(ENDPOINTS.DETAIL(params.id));

    setMovie(response.data);
  }

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer} target="_blank" type="lg" full>
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
