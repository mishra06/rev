import React, { useState } from 'react'
import "./Offerbtn2.css"
import Model2 from './Model2';

function Offerbtn2() {

  const [card,setCard] = useState(false);
  const [show,setShow] = useState(false);

  const startHandeler=()=>{
    setShow(true);
    
  }

  const submitHandeler=()=>{
    setCard(true);
    setShow(false);
  }

  const crossHandelr=()=>{
    setShow(false);
  }
  return (
    <div className='ofrbtn_cont'>
      <div className='inr_sec'>
        {!card && <button onClick={startHandeler}>Offer</button>}
        {card && 
        <div><p>Completed</p></div>
        }

        {show && 
          <Model2 submitHandeler={submitHandeler}
          crossHandelr={crossHandelr}/>
        }
        
      </div>
    </div>
  )
}

export default Offerbtn2
