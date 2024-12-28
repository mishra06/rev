import React, { useRef, useState } from 'react'

function Counter2() {

    const [ number, setNumber] = useState(0);

    const numberRef = useRef();

    const IncrementHandler=()=>{
        setNumber(number + Number(numberRef.current.value));
    }

    const DecrementHandeler=()=>{
        setNumber(number - Number(numberRef.current.value));
    }

    const resetHandeler=()=>{
        setNumber(0);
        numberRef.current.value=""
    }
  return (
    <div>
      <div>
        <p>{number}</p>
        <button onClick={IncrementHandler}>+</button>
        <button onClick={DecrementHandeler}>-</button>
        <button onClick={resetHandeler}>Reset</button>
        <input ref={numberRef} type="number" />
      </div>
    </div>
  )
}

export default Counter2
