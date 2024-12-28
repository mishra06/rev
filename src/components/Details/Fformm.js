import React, { useReducer, useRef } from 'react'
import Name from './Name';
import Email from './Email';
import Form2 from '../Form2';

const StudentReducer = (state,action)=>{
  switch(action.type){
      case "Name":
        return{...state,name:action.payload}
      case "Email":
        return{...state,email:action.payload}
      default:
        return state
  }
}

const Fformm = () => {
  const initialState = {
    name :"",
    email:"",
  }
  const [studentData,studentDispatch] = useReducer(StudentReducer,initialState);
  const nameRef = useRef();
  const emailRef = useRef();

  return (
    <div>
      <div>
        <Name name={studentData.name}/>
        <Email email ={studentData.email}/>
      </div>
      <Form2 nameRef={nameRef} emailRef={emailRef}/>
      <button onClick={()=>{
        studentDispatch({type:"Name",payload:nameRef.current.value});
        studentDispatch({type:"Email",payload:emailRef.current.value})
        nameRef.current.value="";
        emailRef.current.value="";
      }}>submit</button>
    </div>
  )
}

export default Fformm
