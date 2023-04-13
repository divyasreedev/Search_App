import React from 'react'
import './SearchBar.css'

interface props_type{
  setText:(val:string) => void; //function
  // setClick:(val:boolean) => void;
  setIsVisible:(val:boolean) => void;
}

const SearchBar = (props:props_type) => {
  
  const handleChange = (e:any):void=>{
    console.log(e);
    props.setText(e.target.value);
  }

  const handleSubmit = ():void => {

  }

  const handleClick = ():void => {
    // props.setClick(true);
    props.setIsVisible(true);
  }
  
  return (
    <div className='searchBar'>
        <form className="input">
            <input type="input" placeholder="Search" className="input__box" onChange={e => handleChange(e)}  onClick = {e => handleClick()} />
            <img src="magnifying-glass.png" alt="" className='icon'/>
        </form>
    </div>
  )
}

export default SearchBar;