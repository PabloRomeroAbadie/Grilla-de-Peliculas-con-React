import React, { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard';
import styles from "./Moviesgrid.module.css"

const Moviesgrid = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    get("/discover/movie").then(data => {
      setMovies(data.results);
    }, []);

  });
 console.log(movies);
 return (
  
   <ul className={styles.movieGrid}>
    {movies.map((movie) => 
      <MovieCard key={movie.id} movie={movie}></MovieCard>
    )}
   </ul>

 )
}
export default Moviesgrid;