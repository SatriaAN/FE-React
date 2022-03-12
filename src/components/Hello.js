import "../App.css";

// Membuat fungsi Hello
function Hello(props) {
  const { name } = props;
  return (
    <div className="hello">
      <h2>Hallo React</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;
