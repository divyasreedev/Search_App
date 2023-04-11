import React from 'react'
import './SearchBar.css'

const SearchBar: React.FC = () => {
  return (
    <div className='SearchBar'>
        <form className="input">
            <input type="input" placeholder="Search" className="input__box"/>
            <img src="magnifying-glass.png" alt="" className='icon' />
        </form>
    </div>
  )
}

export default SearchBar;