import React, { useRef, useState } from 'react'

const Utils = () => {

    const[input,setInput] = useState();

    const inputRef = useRef();

    function LowerCase(){
        setInput(inputRef.current.value.toLowerCase())
    }
  return (
    <>
    <div>
      <input ref={inputRef} type="text" />
    </div>
    <button onClick={LowerCase}>small</button>
    <button onClick={()=>{
        setInput(inputRef.current.value.toUpperCase());
    
    }}>Upper</button>
    <button onClick={()=>{
        setInput(inputRef.current.value.toCameLize())
    }}>CamelCase</button>
    <div>
        <p>{input}</p>
    </div>
    
    </>
    
  )
}

export default Utils
