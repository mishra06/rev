import React, { useState } from 'react'

const Darkmode2 = () => {

    const [light,setLight] = useState(false);
  return (
    <div>
      <div style={{height:'30vh', width:'90%', backgroundColor:light?'white':'black', border:'4px solid red'}}>
        <p style={{color:light?'black':'white'}}>hello mishra</p>
        <button onClick={()=>{
            setLight(!light)
        }}>toggel</button>
      </div>
    </div>
  )
}

export default Darkmode2
