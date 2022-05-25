import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchMovie() {
    // Melakukan side effect: fetch data movie (api);
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );
    const data = await response.json();

    // Set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.Title}</h2>
            <h3>Genre : {movie.Genre}</h3>
            <p>{movie.Plot}</p>
            <Button variant="secondary" type="md" full>
              Watch
            </Button>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
