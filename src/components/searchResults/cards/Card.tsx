import React from 'react';
import './Card.css'
import FilteredCard from './filteredCard/FilteredCard';

const Card = () => {
  return (
    <div className='filteredCards'>
        <div className='filterdCards__row1'>
          <FilteredCard imgId={0} imgName='suggestedCardImg1.jpg' paragraph='Round neck cotton tee' oldPrice='Rs. 699' newPrice='Rs.549'/>
          <FilteredCard imgId={1} imgName='suggestedCardImg2.jpg' paragraph='High waist trouser' oldPrice='Rs. 999' newPrice='Rs.749'/>
          <FilteredCard imgId={2} imgName='suggestedCardImg3.jpg' paragraph='High neck pullover' oldPrice='Rs. 999' newPrice='Rs.849'/>
          <FilteredCard imgId={3} imgName='suggestedCardImg4.jpg' paragraph='Satin jumpsuit' oldPrice='Rs. 650' newPrice='Rs.549'/>
        </div>
        <div className='filterdCards__row1'>
          <FilteredCard imgId={4} imgName='suggestedCardImg5.jpg' paragraph='Satin jumpsuit' oldPrice='Rs. 650' newPrice='Rs.549'/>
          <FilteredCard imgId={5} imgName='suggestedCardImg1.jpg' paragraph='Round neck cotton tee' oldPrice='Rs. 699' newPrice='Rs.549'/>
          <FilteredCard imgId={6} imgName='suggestedCardImg2.jpg' paragraph='High waist trouser' oldPrice='Rs. 999' newPrice='Rs.749'/>
          <FilteredCard imgId={7} imgName='suggestedCardImg3.jpg' paragraph='High neck pullover' oldPrice='Rs. 999' newPrice='Rs.849'/>
        </div>
    </div>
  )
}

export default Card;