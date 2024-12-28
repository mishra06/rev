import React, { useState } from 'react'

const Revs = () => {
  const [message,setMessage] = useState("");
  const [button,setButton] = useState();

  function changeHandeler(tab){
    setButton(tab);
    setMessage(`clicked tab ${tab}`)
  }

  return (
    <>
    <div>
      <button style={{backgroundColor:button===1?'red':'white', outline:'none'}} onClick={()=>{
        changeHandeler(1)
      }}>Tab 1</button>
      <button style={{backgroundColor:button===2?'red':'white'}} onClick={()=>{
        changeHandeler(2)
      }}>Tab 2</button>
      <button style={{backgroundColor:button===3?'red':'white'}} onClick={()=>{
        changeHandeler(3)
      }}>Tab 3</button>
    </div>
    <p>{message}</p>
    </>
  )
}

export default Revs
