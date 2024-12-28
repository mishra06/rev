import React from 'react'

const Form2 = ({nameRef,emailRef}) => {
  return (
    <div>
      <input ref={nameRef} type="text" />
      <input ref={emailRef} type="email" />
    </div>
  )
}

export default Form2
 