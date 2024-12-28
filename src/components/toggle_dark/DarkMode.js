import React, { useState } from 'react'

const DarkMode = () => {

  const [light,setLight] = useState(false);
  const [btn,setBtn] = useState(false)
  return (
    <div style={{height:'100vh',width:'100%'}}>
      <div style={{height:'20vh',width:'80%', backgroundColor:light?'white':'black',color:light?'black':'white'}}>
        <p>this is toggle section</p>
        <button onClick={()=>{
          setLight(!light);
          setBtn(!btn)
        }}
        style={{backgroundColor:btn?'white':'red',color:btn?'black':'white'}}>toggle</button>
      </div>
    </div>
  )
}

export default DarkMode
