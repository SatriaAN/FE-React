import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";
import axios from "axios";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  var random = Math.floor(Math.random() * 19 + 1);
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);

  // Mengambil 1 data trending movie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[random];
  }

  // funsi untuk mendapatkan detail movie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    // mengambil id trending movie
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    // fetech detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

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
