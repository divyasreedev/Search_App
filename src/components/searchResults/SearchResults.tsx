import React from 'react';
import './SearchResults.css';
import Header from './header/Header';
import Card from './cards/Card';
import SideBar from './sideBar/SideBar';

function SearchResults() {
  return (
    <div>
      <Header />
      <SideBar />
      {/* <Card/> */}
    </div>
  )
}

export default SearchResults