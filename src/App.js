// Import Css,Main,Header dan footer
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Membuat fungsi App
 * @returns Header,Main,Footer
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// Export fungsi App
export default App;
