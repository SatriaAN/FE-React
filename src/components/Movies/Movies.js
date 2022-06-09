import Movie from "../Movie/Movie.js";
import styles from "./Movies.module.css";
import { useSelector } from "react-redux";

function Movies(props) {
  const { title } = props;

  // mengirim movie ke movies di store
  const movies = useSelector((store) => store.movies.movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title} Movies</h2>
        <div className={styles.movie__container}>
          {/*
           * looping map
           * Render Component Movie
           * Mengirim Props Movie
           * Menggunakan arrowFunction
           */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
