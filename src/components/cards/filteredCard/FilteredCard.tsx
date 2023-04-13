import React from 'react'

interface props_type{
    imgName:string;
    paragraph:string;
}
const FilteredCard = (props:props_type) => {
  return (
    <div className='filteredCard'>
        <img src={props.imgName} alt="Card" className='filteredCard__img' />
        <p className="filteredCard__p">{props.paragraph}</p>
    </div>
  )
}

export default FilteredCard;