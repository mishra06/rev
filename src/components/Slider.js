import React, { useEffect, useState } from 'react'

const Slider = () => {

    const [index,setIndex] = useState(0);

    const Images = ['https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function increment(){
    if(index === Images.length-1){
        setIndex(0)
    }
    else
    setIndex(index+1);
}

function decrement(){
    if(index===0){
        setIndex(2)
    }
    else {
        setIndex(index-1)
    }
}

useEffect(()=>{
    const intervel = setInterval(increment,1000)
    return()=> clearTimeout(intervel);
},[index])


  return (
    <div>
      <div className="sections">
        <button onClick={decrement}>preview</button>
        <div className="imag">
            <img src={Images[index]} alt="" height={"200px"} width={"200px"}/>
        </div>
        <button onClick={increment}>next</button>
      </div>
    </div>
  )
}

export default Slider
