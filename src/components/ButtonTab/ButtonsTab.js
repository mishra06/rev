import React, { useState } from 'react'

const ButtonsTab = () => {
    const [buttons,setButtons] = useState(0);
    const [message,setMessage] = useState('');

    function handeler(tab){
        setButtons(tab);
        setMessage(`clicked${tab}`)
    }

  return (
    <div>
      <button onClick={()=>{
        handeler(1);
      }}
      style={{backgroundColor:buttons===1?'red':'white'}}>tab1</button>
      <button onClick={()=>{
        handeler(2);
      }}
      style={{backgroundColor:buttons===2?'red':'white'}}>tab2</button>
      <button onClick={()=>{
        handeler(3);
      }} style={{backgroundColor:buttons===3?'red':'white'}}>tab3</button>
      <p>{message}</p>
    </div>
  )
}

export default ButtonsTab
