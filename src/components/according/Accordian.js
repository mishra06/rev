import React, { useState } from 'react'

const Accordian = () => {
   const [sign,setSign] = useState("+");
   const [toggel,setToggel] = useState(true);
   
    function toggled(){
       setSign((prev)=>prev==="+"?"-":"+");
       setToggel((prev)=>!prev)
    }
  return (
    <div>
      <div>
        <span>Do I have to allow the use of cookies?</span>
        <button onClick={toggled}>{sign}</button>
        {!toggel && <p>this is it</p>}

      </div>
    </div>
  )
}

export default Accordian
