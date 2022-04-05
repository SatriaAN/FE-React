// import CSS module AddMovieForm
import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  // Membuat state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  // Mengisi default genre menjadi Horror
  const [type, setType] = useState("Horror");

  // Membuat state error untuk title dan date
  const [isTitleEror, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  // destructing props
  const { movies, setMovies } = props;
  // membuat fungsi handleTitle
  function handleTitle(e) {
    // set title dengan nilai baru : nilai yang diinput
    setTitle(e.target.value);
  }
  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleUrl(e) {
    setUrl(e.target.value);
  }
  function handleChange(e) {
    setType(e.target.value);
  }
  function handleSubmit(e) {
    // mencegah auto refresh
    e.preventDefault();

    // Jika title kosong, set error title jadi true
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else if (type === "") {
      setIsTypeError(true);
    }
    // Jika tidak, tambah datanya
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: url,
      };

      // Menjalankan fungsi setMovies
      // Menambahkan movie ke dalam movies
      // spread operator : copy data array
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
    }
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
              value={title}
              // menambahkan on change //
              onChange={handleTitle}
            />
            {/* Jika title error ? munculkan pesan : jika tidak kosongkan */}
            {isTitleEror && <Alert>Title Wajib Diisi</Alert>}
            <br />
            <label className={styles.hero__label}>year</label>
            <br />
            <input
              id="title"
              type="text"
              className={styles.hero__input}
              // Menambahkan value dan onChange //
              value={date}
              onChange={handleDate}
            />
            {/* Jika Date error: munculkan pesan : jika tidak kosongkan */}
            {isDateError && <Alert>Date Wajib Diisi</Alert>}
            <div>
              <label className={styles.hero__label}>Image URL</label>
              <br />
              <input
                className={styles.hero__input}
                type="text"
                value={url}
                onChange={handleUrl}
              />
              <br />
              {isTypeError && <Alert>Link Image Harus di Isi</Alert>}
              <select
                className={styles.hero__select}
                id=""
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
              <button className={styles.hero__button}>Add Movie</button>
              <br />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
