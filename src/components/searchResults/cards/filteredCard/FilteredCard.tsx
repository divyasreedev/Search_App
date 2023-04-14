import React from 'react';
import './FilteredCard.css';

interface props_type{
    imgId:number;
    imgName:string;
    paragraph:string;
    oldPrice:string;
    newPrice:string;
}
const FilteredCard = (props:props_type) => {
  var clicked: boolean = false;

  const handleLike = ():void => {
    clicked = !clicked;
    if(clicked){
      var img:any = document.getElementsByClassName('like');
      img[props.imgId].src = 'redLike.png'
    }
    else{
      var img:any = document.getElementsByClassName('like');
      img[props.imgId].src = 'like.png'
    }
  }

  return (
    <div className='filteredCard'>
        <img src={props.imgName} alt="Card" className='filteredCard__img' />
        <p className="filteredCard__p1">{props.paragraph}</p>
        <p className="filteredCard__p2"> <span className='oldPrice'>{props.oldPrice}</span> <span className='newPrice'>{props.newPrice}</span> </p>
        <p className="filteredCard__p3">
          <span className="fa fa-star star checked"></span>
          <span className="fa fa-star star checked"></span>
          <span className="fa fa-star star checked"></span>
          <span className="fa fa-star star checked"></span>
          <span className="fa fa-star star checked"></span>
           (210)
        </p>
        <img src="like.png" alt="like" className='like' onClick={handleLike}/>
        <p className='product'>View Product</p>
    </div>
  )
}

export default FilteredCard;