import React, { useState } from 'react'
import "./Offerbtn.css"
import Modal from './Modal';

const OfferBtn = () => {

    const [isShow , setIsShow] = useState(false);
    const [accepted , setAccepted] = useState(false);

    const showHandeler = ()=>{
        setIsShow(true);
        console.log(isShow);
    }

    const crossHandeler = ()=>{
        setIsShow(false);
    }

    const acceptedHandeler =()=>{
        setAccepted(true);
        setIsShow(false);
    }


  return (
    <div className='container'>
        <div className="btn">
            { !accepted && <button onClick={showHandeler}>Start</button>}
            {accepted && 
            <div>
                <p>Offer Accepted</p>
            </div>
            }
            
        </div>


        {
            isShow && <Modal 
            crossHandeler= {crossHandeler}
            acceptedHandeler = {acceptedHandeler}
            />
        }
    </div>
  )
}

export default OfferBtn;


