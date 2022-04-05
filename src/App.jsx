import styles from "./App.module.css"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; 
import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
   <BrowserRouter>
      <header>
       <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
          <Routes>
              <Route exact path="/" element={<LandingPage></LandingPage>}></Route>
              <Route exact path="/movie/:movieId" element={<MovieDetails></MovieDetails>}></Route>
           </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
