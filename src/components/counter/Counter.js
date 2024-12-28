import React, { useRef, useState } from 'react'

const Counter = () => {

  const [number , setNumber] = useState(0);

  const inputRef = useRef();

  function increased(){
    setNumber(number + Number(inputRef.current.value));
  }

  function decreased(){
    setNumber(number - Number(inputRef.current.value));
  }


  return (
    <div>
      <p>{number}</p>
      <button onClick={increased}>+</button>
      <button onClick={decreased}>-</button>
      <button onClick={()=>{
        setNumber(0);
        inputRef.current.value = "";
      }}>reset</button>
      <input ref={inputRef} type="number" />
    </div>
  )
}

export default Counter
