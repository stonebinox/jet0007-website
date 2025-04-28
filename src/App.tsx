import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
