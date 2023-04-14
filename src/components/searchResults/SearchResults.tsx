import React from 'react';
import './SearchResults.css';
import Header from './header/Header';
import Card from './cards/Card';
import SideBar from './sideBar/SideBar';

function SearchResults() {
  return (
    <div className='searchResults'>
      <Header />
      <h1 className='searchResults__heading'>Search Results</h1>
      <div className='searchResults__section'>
        <div className='searchResults__leftSection'>
          <SideBar />
        </div>
        <div className='searchResults__rightSection'>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default SearchResults