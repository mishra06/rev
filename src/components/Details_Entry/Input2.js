import React, { useState } from 'react'

const Input2 = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [last,setLast] = useState("");
    const [conferm,setConferm] = useState("");
    const [data,setData] = useState(false)

    function nameHandelr(e){
        setName(e.target.value);
        setData(true);
    }
    function emailHandelr(e){
        setEmail(e.target.value);
        setData(true);
    }
    function passHandelr(e){
        setPass(e.target.value);
        setData(true);
    }
    function lastHandler(e){
        setLast(e.target.value);
        setData(true);
    }
    function confermHandler(e){
        setConferm(e.target.value);
        setData(true);
    }
    function submitHandler(){
        if(name==="" || email==="" || pass==="" || last==="" || conferm===""){
            setData(true);
        }
        else{
            alert("You are successfully registered");
        }
    }

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            height:'100vh',
            gap:'2rem'
        }}>
            
            <div className="name">
                {/* <p className="detl">First Name</p> */}
                <input type="text" placeholder='First Name' onChange={nameHandelr} />
                { data && name==="" ? <p style={{color:'red', fontSize:'15px'}}>Please Enter your name</p>:<></>}
            </div>
            <div>
            {/* <p className="detl">Last Name</p> */}
                <input type="text" placeholder='Last Name...'  onChange={lastHandler}/>
                { data && last==="" ? <p style={{color:'red', fontSize:'15px'}}>Please enter your last name</p>:<></>}
            </div>
            <div className="email">
            {/* <p className="detl">Email</p> */}
                <input type="text" placeholder='Enter your Email' onChange={emailHandelr} />
                {data && email==="" ? <p style={{color:'red', fontSize:'15px'}}>Please enter your email</p>:<></>}
            </div>
            <div className="pass">
            {/* <p className="detl">Password</p> */}
                <input type="text" placeholder='Enter your Password' onChange={passHandelr} />
                { data && pass==="" ? <p style={{color:'red', fontSize:'15px'}}>Please enter your password</p>:<></>}
            </div>
            <div>
            {/* <p className="detl">Conferm Password</p> */}
                <input type="text" placeholder='Conferm Password..' onChange={confermHandler}/>
                { data && conferm==="" ? <p style={{color:'red', fontSize:'15px'}}>Please enter your password</p>:<></>}
                
            </div>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
  
}

export default Input2
