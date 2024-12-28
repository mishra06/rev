import React, { useState } from 'react'

const InputRev = () => {

    const [fname,setFName] = useState("");
    const [email,setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [lname,setLName] = useState("");
    const [ conF,setConF] = useState("");
    const [data, setdata] = useState(false);

    const fNameHandeler = (e)=>{
        setFName(e.target.value);
        setdata(true);
    }

    const lameHandeler = (e)=>{
        setLName(e.target.value);
        setdata(true);
    }

    const emailHandeler = (e)=>{
        setEmail(e.target.value);
        setdata(true);
    }

    const passHandeler = (e)=>{
        setPass(e.target.value);
        setdata(true);
    }

    const conFHandeler = (e)=>{
        setConF(e.target.value);
        setdata(true);
    }

    const submitHandler = ()=>{
        if(fname==="" || lname==="" || email===""    || pass==="" || conF===""){
            setdata(true);
        }
        else {
            alert("You are successfully registered");
        }
    }
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center', height:'100vh', width:'100%'}}>
      <div >
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start', marginBottom:'10px'}}>
            <h2 style={{margin:'0'}}>First Name</h2>
            <input value={fname} onChange={fNameHandeler} placeholder='First Name...' type="text" />
            {data && fname===""? <p style={{margin:'0'}}>Enter First name</p>:<></>}
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start' ,marginBottom:'10px'}}>
            <h2 style={{margin:'0'}}>First Name</h2>
            <input value={lname} onChange={lameHandeler} placeholder='First Name...' type="text" />
            {data && lname===""? <p style={{margin:'0'}}>Enter First name</p>:<></>}
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start' ,marginBottom:'10px'}}>
            <h2 style={{margin:'0'}}>First Name</h2>
            <input value={email} onChange={emailHandeler} placeholder='First Name...' type="text" />
            {data && email===""? <p style={{margin:'0'}}>Enter First name</p>:<></>}
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',marginBottom:'10px'}}>
            <h2 style={{margin:'0'}}>First Name</h2>
            <input value={pass} onChange={passHandeler} placeholder='First Name...' type="text" />
            {data && pass===""? <p style={{margin:'0'}}>Enter First name</p>:<></>}
        </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',marginBottom:'10px'}}>
            <h2 style={{margin:'0'}}>First Name</h2>
            <input value={conF} onChange={conFHandeler} placeholder='First Name...' type="text" />
            {data && conF===""? <p style={{margin:'0'}}>Enter First name</p>:<></>}
        </div>
      </div>
      <button onClick={submitHandler}>Submit</button>

    </div>
  )
}

export default InputRev;
