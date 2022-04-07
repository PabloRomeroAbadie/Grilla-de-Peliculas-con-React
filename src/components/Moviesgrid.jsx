import React, { useEffect, useState } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard';
import styles from "./Moviesgrid.module.css"
import Spinner from './Spinner';



const Moviesgrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


const query = useQuery();
const search = query.get("search");
console.log(search);


  useEffect(() => {
    setIsLoading(true); 
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
    get(searchUrl).then(data => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
 
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