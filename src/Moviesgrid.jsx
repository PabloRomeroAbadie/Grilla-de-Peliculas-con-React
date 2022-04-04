import React from 'react';
import MovieCard from './MovieCard';
import movies from "./movies.json"
import styles from "./Moviesgrid.module.css"

const Moviesgrid = () => {
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