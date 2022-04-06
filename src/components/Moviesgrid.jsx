import React, { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard';
import styles from "./Moviesgrid.module.css"
import Spinner from './Spinner';

const Moviesgrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true); 
    get("/discover/movie").then(data => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, []);
 
  if (isLoading) {
    return <Spinner></Spinner>
  }

 return (
  
   <ul className={styles.movieGrid}>
    {movies.map((movie) => 
      <MovieCard key={movie.id} movie={movie}></MovieCard>
    )}
   </ul>

 )
}
export default Moviesgrid;