import React from "react";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import styles from "./MovieCard.module.css"
 
const MovieCard = ({ movie }) => {
  const imageUrl = getMovieImg(movie.poster_path, 300);
 
  return (
    <li className={styles.movieCard}>
      <Link exact to={"/movie/" + movie.id}>
     <img width={230} height={345} img className={styles.movieImage} src={imageUrl} alt={movie.title} />
      <div>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
