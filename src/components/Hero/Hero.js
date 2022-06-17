import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/endpoints";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  // Mengambil 1 data trending movie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[0];
  }

  // funsi untuk mendapatkan detail movie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    // mengambil id trending movie
    const trendingMovie = await getTrendingMovie();
    // fetech detail movie by id
    const response = await axios(ENDPOINTS.DETAIL(trendingMovie.id));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button
              as="a"
              href={trailer}
              target="_blank"
              variant="secondary"
              type="lg"
            >
              Watch
            </Button>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
              alt={movie.Title}
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
