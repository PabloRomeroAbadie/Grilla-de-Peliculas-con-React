import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; 
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
   <BrowserRouter>
      <header>
       <Link to="/">Home</Link>
       <Link to="/movie">Movie</Link>
      </header>
      <main>
          <Routes>
              <Route exact path="/"></Route>
              <Route exact path="/movie" element={<MovieDetails></MovieDetails>}></Route>
           </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
