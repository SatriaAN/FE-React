// Import Hello
import Hello from "./Hello";

/**
 * Membuat fungsi Main
 * Menggunakan fungsi Hello yang telah di import
 */
function Main() {
  return (
    <main>
      <Hello name="Satria" />
      <Hello name="Kizzy" />
      <Hello name="Juki" />
      <Hello name="Diki" />
      <Hello name="Danang" />
      <Hello name="Rafli" />
    </main>
  );
}

// Export main
export default Main;
