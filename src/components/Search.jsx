import React, { useEffect, useState } from 'react';
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';


const Search = () => {
 const query = useQuery();
 const search = query.get("search");



 const [searchText, setSearchText] = useState("");
 const navigate = useNavigate();

 useEffect(() => {
   setSearchText(search || "");
 }, [search]);

 const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/?search=" + searchText)
 }

 return (
  <form className={styles.searchContainer} onSubmit={handleSubmit}>
   <div className={styles.searchBox} >
    <input className={styles.searchInput} type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
    <button className={styles.searchButton} type='submit'>
    <FaSearch size={20}></FaSearch>
    </button>
   </div>
  </form>
 );
};

export default Search;