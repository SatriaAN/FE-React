// Import Css
import "../App.css";

/**
 * Membuat fungsi Hello
 * Membuat className hello
 */
function Hello(props) {
  const { name } = props;
  return (
    <div className="hello">
      <h2>Hallo React</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

// Export Hello
export default Hello;
