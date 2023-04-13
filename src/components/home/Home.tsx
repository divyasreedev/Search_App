import React, { useEffect, useState } from 'react';
import './Home.css';
import SearchBar from '../searchBar/SearchBar';
import DropDown from '../dropDown/DropDown';

const Home:React.FC = () => {
  const [searchText, setSearchText] = useState<string> ('');
  const [isVisible, setIsVisible] = useState<boolean> (false);

  useEffect(()=>{
    console.log(searchText);
  },[searchText]);

  return (
    <div className="home">
        <img src="zevi_ai.webp" alt="oops"  className='home__logo'/>
        <section className="home__section">
            <div className='home__searchBar'>
              <SearchBar setText={setSearchText}  
              setIsVisible = {setIsVisible} />
            </div>
            <span className='home__dropDown'>
              <DropDown isVisible={isVisible} toClose={setIsVisible} />
            </span>
            <img src="background.png" alt="oops" className="home__img"/>
        </section>
    </div>
  )
}

export default Home;