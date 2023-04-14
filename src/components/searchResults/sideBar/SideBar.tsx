import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sideBar'>
        <h1 className='sideBar__heading'>Search Results</h1>
        <div className='sideBar__brand'>
            <div className="sideBar__section">
                <p>BRAND</p>
                <img src="down-arrow.png" alt="Down Arrow" />
            </div>
            <div className='sideBar__dropdown'>
                <input type="checkbox" id='mango' className='checkBox' name='mango' value={'mango'}/>
                <label htmlFor="mango" className='checkBoxLabel'>Mango</label><br />
                <input type="checkbox" id='h&m' className='checkBox' name='h&m' value={'h&m'}/>
                <label htmlFor="h&m" className='checkBoxLabel'>H&M</label><br />
            </div>
        </div>
        <div className='verticalLine'></div>
        <div className='sideBar__priceRange'>
            <div className="sideBar__section">
                <p>PRICE RANGE</p>
                <img src="down-arrow.png" alt="Down Arrow" />
            </div>
            <div className='sideBar__dropdown'>
                <input type="checkbox" id='p1' className='checkBox' name='p1' value={'p1'}/>
                <label htmlFor="p1" className='checkBoxLabel'>Under 500</label><br />
                <input type="checkbox" id='p2' className='checkBox' name='p2' value={'p2'}/>
                <label htmlFor="p2" className='checkBoxLabel'>1000 to 3000</label><br />
            </div>
        </div>
        <div className='verticalLine'></div>
        <div className='sideBar__ratings'>
            <div className="sideBar__section">
                <p>RATINGS</p>
                <img src="down-arrow.png" alt="Down Arrow" />
            </div>
            <div className='sideBar__dropdown'>
                <input type="checkbox" id='5star' className='checkBox' name='5star' value={'5star'}/>
                <label htmlFor="5star">
                    <span className="sideBar__p3">
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                    </span>
                </label><br />
                <input type="checkbox" id='4star' className='checkBox' name='4star' value={'4star'}/>
                <label htmlFor="4star">
                    <span className="sideBar__p3">
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star"></span>
                    </span>
                </label><br />
                <input type="checkbox" id='3star' className='checkBox' name='3star' value={'3star'}/>
                <label htmlFor="3star">
                    <span className="sideBar__p3">
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                    </span>
                </label><br />
                <input type="checkbox" id='2star' className='checkBox' name='2star' value={'2star'}/>
                <label htmlFor="2star">
                    <span className="sideBar__p3">
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                    </span>
                </label><br />
                <input type="checkbox" id='1star' className='checkBox' name='1star' value={'1star'}/>
                <label htmlFor="1star">
                    <span className="sideBar__p3">
                        <span className="fa fa-star star checked"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                        <span className="fa fa-star star"></span>
                    </span>
                </label><br />
            </div>
        </div>
    </div>
  )
}

export default SideBar