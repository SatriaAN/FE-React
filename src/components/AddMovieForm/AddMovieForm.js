// import CSS module AddMovieForm
import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
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
          <form className={styles.hero__form}>
            <label className={styles.hero__label}>Title</label>
            <br />
            <input type="text" className={styles.hero__input}></input>
            <br />
            <label className={styles.hero__label}>year</label>
            <br />
            <input type="text" className={styles.hero__input}></input> <br />
            <button className={styles.hero__button}>Submit</button>
            <br />
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
