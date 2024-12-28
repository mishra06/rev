import React, { useState } from 'react'

const Student2 = () => {
  const [step,setStep] = useState(1);
  const [data,setData] = useState({
    name:"",
    email:"",
    phone:"",
  });

  const SubmitHandeler =(e) =>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    });
  }

  const nextHandeler = ()=>{
    setStep(step+1);
  }


  return (
    <div style={{display:'flex' , justifyContent:'center', alignItems:'center',height:'100vh', width:'100%'}}>
      {
        step===1 && (
          <div>
            <h2>First Name</h2>
            <input name='name' value={data.name} placeholder='Enter Firt Name...' onChange={SubmitHandeler} type="text" />
            <button onClick={nextHandeler}>Next</button>
          </div>
        )
      }
      {
        step===2 && (
          <div>
            <h2>Email</h2>
            <input name='email' value={data.email} placeholder='m@gmail.com'  onChange={SubmitHandeler} type="email" />
            <button onClick={nextHandeler}>Next</button>
          </div>
        )
      }
      {
        step===3 && (
          <div>
            <h2>PhoneNumber</h2>
            <input name='phone' value={data.phone} placeholder='Enter Phone number...' onChange={SubmitHandeler} type="text" />
            <button onClick={nextHandeler}>Next</button>
          </div>
        )
      }
      {
        step===4 && (
          <div>
            <h2>Success....</h2>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        )
      }
    </div>
  )
}

export default Student2
