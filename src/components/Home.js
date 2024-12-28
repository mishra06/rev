import React, { useState } from 'react'

const Home = () => {

  const [button,setButton] = useState(null);
  const [message,setMessage] = useState('');

  function handeler(btns){
    setButton(btns);
    setMessage(`clicked ${btns}`)
  }

  return (
    <div>
     <div className="btn">
      <button onClick={()=>handeler("home")}
        style={{backgroundColor: button ==="home" ? "red":"white"}}
      >Home</button>
      <button onClick={()=>{
        handeler("About")

      }} style={{backgroundColor: button ==="About" ? "red":"white"}}>About</button>
      <button onClick={()=>{handeler("Contact")}} 
        style={{backgroundColor: button ==="Contact" ? "red":"white"}}>Contact</button>
     </div>

     <p style={{fontSize: button==="home" ? "20px" :"16px" , color:button==="home" ? "red":"black"}}>{message}</p>
    </div>
  )
}

export default Home

