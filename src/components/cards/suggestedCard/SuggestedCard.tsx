import React from 'react'
import './SuggestedCard.css'

interface props_type{
    imgName:string;
    paragraph:string;
}
const SuggestedCard = (props:props_type) => {
  return (
    <div className='suggestedCard'>
        <img src={props.imgName} alt="Card" className='suggestedCard__img' />
        <p className="suggestedCard__p">{props.paragraph}</p>
    </div>
  )
}

export default SuggestedCard;