import React, {useRef, useEffect} from 'react'
import SuggestedCard from '../cards/suggestedCard/SuggestedCard'
import './DropDown.css'

interface props_type{
    isVisible:boolean;
    toClose:(val:boolean) => void;
}

const DropDown = (props:props_type) => {
    const ref = useRef<HTMLDivElement>(null);
    const {isVisible} = props;

    useEffect(() => {
        const checkIfClickedOutside = (e:any) => {
            if(isVisible && ref.current && !ref.current.contains(e.target)){
                props.toClose(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [isVisible])

  return (
    isVisible ? 
    <div className='dropDown' ref={ref}>
        <h1>Latest Trends</h1>
        <section className='dropDown__imageSection'>
           <SuggestedCard imgName='suggestedCardImg1.jpg' paragraph='Striped shirt dresses'/>
           <SuggestedCard imgName='suggestedCardImg2.jpg' paragraph='Denim trousers'/>
           <SuggestedCard imgName='suggestedCardImg3.jpg' paragraph='Denim cargopants'/>
           <SuggestedCard imgName='suggestedCardImg4.jpg' paragraph='Solid shirts '/>
           <SuggestedCard imgName='suggestedCardImg5.jpg' paragraph='Leather jackets'/>
        </section>
        <section className="dropDown__paragraphSection">
            <h2>Popular Suggestions</h2>
            <p>
                <ul>
                    <li>Striped shirt dress</li>
                    <li>Satin shirts</li>
                    <li>Denim jumpsuit</li>
                    <li>Leather dresses</li>
                    <li>Solid tshirts</li>
                </ul>
            </p>
        </section>
    </div> : <></>
  )
}

export default DropDown