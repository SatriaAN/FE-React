import Container from "../Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
