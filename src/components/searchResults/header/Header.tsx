import React, {useState}from 'react';
import SearchBar from '../../searchBar/SearchBar';
import './Header.css';

const Header = () => {

  const [searchText, setSearchText] = useState<string> ('');
  const [isVisible, setIsVisible] = useState<boolean> (false);

  return (
    <div className='header'>
      <div></div>
      <div className='header__searchBar'>
        <SearchBar setText={setSearchText}
        setIsVisible = {setIsVisible} />
      </div>
      <img src="zevi_ai.webp" alt="oops" className='header__logo' />
    </div>
  )
}

export default Header