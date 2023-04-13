import React, {useState}from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

interface props_type{
  setText:(val:string) => void; //function
  // setClick:(val:boolean) => void;
  setIsVisible:(val:boolean) => void;
}

const SearchBar = (props:props_type) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>(''); 
  
  const handleChange = (e:any):void=>{
    setSearchText(e.target.value)
    props.setText(e.target.value);
  }

  const handleSubmit = ():void => {
    if(searchText.length > 0){
      navigate({
        pathname: '/searchResults',
        search:`?text=${searchText}`
      });
    }
  }

  const handleClick = ():void => {
    props.setIsVisible(true);
  }
  
  return (
    <div className='searchBar'>
        <form className="input">
            <input type="input" placeholder="Search" className="input__box" onChange={e => handleChange(e)}  onClick = {e => handleClick()} />
            <img src="magnifying-glass.png" alt="" className='icon' onClick = {e => handleSubmit()}/>
        </form>
    </div>
  )
}

export default SearchBar;