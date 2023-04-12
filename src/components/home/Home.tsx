import React, { useEffect } from 'react';
import './Home.css';
import SearchBar from '../searchBar/SearchBar';
import DialogBox from '../dialogBox/DialogBox';

const Home:React.FC = () => {
  const [searchText, setSearchText] = React.useState<string> ('');
  const [openDialog, setOpenDialog] = React.useState<boolean> (false);

  useEffect(()=>{
    console.log(searchText);
  },[searchText]);

  return (
    <div className="home">
        <img src="zevi_ai.webp" alt="oops"  className='home__logo'/>
        <section className="home__section">
          <div className='home__searchBar'>
            <SearchBar setText={setSearchText}  setClick = {setOpenDialog}/>
          </div>
          {openDialog ? <DialogBox isOpen={openDialog} toClose = {setOpenDialog}/> : ''}
          <img src="background.png" alt="oops" className="home__img"/>
        </section>
    </div>
  )
}

export default Home;