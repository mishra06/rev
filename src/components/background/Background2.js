import React, { useState } from 'react'

const Background2 = () => {
  const [color, setColor] = useState();

  function random (){
    var  xyz = '0123456789abcdef';
    var start = '#';
    for(var i = 0;i<6;i++){
      start += xyz[Math.floor(Math.random()*xyz.length)];
    }
    return start;
  }

  function changeHandeler(){
    setColor(random())
  }

  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'100vh', width:'100%'}}>
      <div style={{height:'90vh',width:'90%',backgroundColor:color, border:'3px solid red', padding:'5px'}}>
        <button onClick={changeHandeler}>change background</button>
      </div>
    </div>
  )
}

export default Background2;