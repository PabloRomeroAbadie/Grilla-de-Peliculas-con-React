import React from 'react';
import Moviesgrid from '../components/Moviesgrid';
import Search from '../components/Search';
import { useDebounce } from '../hooks/useDebounse';
import { useQuery } from '../hooks/useQuery';

const LandingPage = () => {
 const query = useQuery();
const search = query.get("search");

const debounsedSearch = useDebounce(search, 300)
 return (
  <div>
   <Search></Search>
   <Moviesgrid key={search} search={search}></Moviesgrid>
  </div>
 );
};

export default LandingPage;