import React from 'react';
import Moviesgrid from '../components/Moviesgrid';
import Search from '../components/Search';

const LandingPage = () => {
 return (
  <div>
   <Search></Search>
   <Moviesgrid></Moviesgrid>
  </div>
 );
};

export default LandingPage;