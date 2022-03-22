// Import Navbar, Footer
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

// Membuat fungsi main untuk menampung Hero dan Movies
function Main() {
  return (
    <main>
      <Hero />
      <Movies />
    </main>
  );
}

// Membuat fungsi Home
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <AddMovieForm />
      <Footer />
    </div>
  );
}

// Export Home
export default Home;
