// import CSS Module dan di simpan di variable styles
import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";

// Membuat Component Navbar: Menampilkan Navigasi
function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/create">Add Movie</Link>s
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
