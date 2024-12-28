import React, { useEffect, useState } from 'react'

const Prac = () => {

    const [index,setIndex] = useState(0);

    const imageArr = [
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1712226611084-4983941cbbf0?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1713453076348-1dd57aa31a64?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const nextHandeler =()=>{
      if(index===imageArr.length-1){
        setIndex(0);
      } else setIndex(index+1);
    }
    
    const prevHandeler = () =>{
      if(index===0){
        setIndex(5);
      }else setIndex(index-1);
    }

    useEffect(()=>{
      const interval =  setInterval(nextHandeler,1000);
      return()=> clearTimeout(interval);
    },[index])
   

  return (
    <div style={{display:'flex' , justifyContent:'center', alignItems:'center', height:'100vh', width:'100%', gap:'15px'}}>
      <button onClick={prevHandeler}>{'<'}</button>
      <img src={imageArr[index]} height='250px' width='250px' alt="" />
      <button onClick={nextHandeler}>{'>'}</button>

    </div>
  )
}

export default Prac
