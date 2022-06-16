import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

// Membuat fungsi Home
function Home() {
  return (
    <>
      <Hero />
      <Movies title={"Latest"} />
    </>
  );
}

// Export Home
export default Home;
