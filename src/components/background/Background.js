import React, { useState } from 'react'

const Background = () => {

    const [color,setColor] = useState()

    function randomColor(){
        var cvalue = '0123456789ABCDEF';
        var codess = '#'
        for(var i = 0;i<6;i++){
            codess += cvalue[Math.floor(Math.random()*16)] 
        }
        return codess;
    }

    function changeHandeler(){
        setColor(randomColor());
    }
  return (
    <div>
        
      <div style={{height:"100vh" , width:"100%", backgroundColor:color}} className="screen">
      <button onClick={changeHandeler}>change Color</button>
      </div>
    </div>
  )
}

export default Background
