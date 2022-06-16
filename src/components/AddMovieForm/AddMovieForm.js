// import CSS module AddMovieForm
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // Membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  // Destructing state object
  const { title, date, poster, type } = formData;

  // Membuat state error untuk title dan date
  const [err, setErr] = useState({
    title: false,
    date: false,
    poster: false,
  });

  const { setIsTitleError, setIsDateError, setIsPosterError } = err;

  // Membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    // destructing event
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function Validate() {
    if (title === "") {
      setErr({
        ...err,
        setIsTitleError: true,
      });
      return false;
    } else if (date === "") {
      setErr({
        ...err,
        setIsDateError: true,
      });
      return false;
    } else if (poster === "") {
      setErr({
        ...err,
        setIsPosterError: true,
      });
      return false;
    } else {
      setErr({
        ...err,
        setIsTitleError: false,
        setIsDateError: false,
        setIsPosterError: false,
      });
      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    dispatch(addMovie(movie));
    console.log(movie);
    navigation("/");
  }
  function handleSubmit(e) {
    // mencegah auto refresh
    e.preventDefault();

    Validate() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <img
            className={styles.hero__img}
            src="https://picsum.photos/350/250"
            alt=""
          />
        </div>
        <div className={styles.hero__right}>
          <h1 className={styles.hero__h1}>Add Movie</h1>
          {/* Memberi event onSubmit */}
          <form className={styles.hero__form} onSubmit={handleSubmit}>
            <label className={styles.hero__label}>Title</label>
            <br />
            <input
              type="text"
              className={styles.hero__input}
              name="title"
              // menambahkan on change //
              value={title}
              onChange={handleChange}
            />
            {/* Jika title error ? munculkan pesan : jika tidak kosongkan */}
            {setIsTitleError && <Alert>Title Wajib Diisi</Alert>}
            <br />
            <label className={styles.hero__label}>year</label>
            <br />
            <input
              id="title"
              type="text"
              className={styles.hero__input}
              name="date"
              // Menambahkan value dan onChange //
              value={date}
              onChange={handleChange}
            />
            {/* Jika Date error: munculkan pesan : jika tidak kosongkan */}
            {setIsDateError && <Alert>Date Wajib Diisi</Alert>}
            <div>
              <label className={styles.hero__label}>Image URL</label>
              <br />

              <input
                className={styles.hero__input}
                type="text"
                name="poster"
                value={poster}
                onChange={handleChange}
              />
              <br />
              {setIsPosterError && <Alert>Link Image Harus di Isi</Alert>}
              <select
                className={styles.hero__select}
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
              </select>
              <br />
              <Button variant="secondary" type="lg" full>
                Submit
              </Button>
              <br />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
