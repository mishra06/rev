import React, { useState } from 'react';
import "./Drag.css"

const Dragale = () => { 
    const [input, setInput] = useState("");
    const [message, setMessage] = useState([]);
    const [dragged, setDragged] = useState(null);



    const InputHandeler =(e) =>{
        setInput(e.target.value)
    }

    const sumitHandeler = ()=>{
        setMessage([...message,input]);
        setInput("");
    }

    function handleDrop(e) {
        e.preventDefault();
        if (e.target.className === 'conttt') {
          e.target.appendChild(dragged);
          setDragged(null);
        }
    }
      
    function handlingDrag(e) {
        e.preventDefault();
    }

    function handleStart(e) {
        if (e.target.className === 'content') {
          setDragged(e.target);
        }
    }

    const crossHandeler =(index)=>{
        setMessage((prev)=>{
            const updt = [...prev];
            updt.splice(index,1);
            return updt;
        })
    }
    
    


  return (
    <div style={{height:'100vh', width:'100%', overflow:'hidden'}}>
      <div>
        <input value={input} type="text" onChange={InputHandeler} />
        <button onClick={sumitHandeler}>Submit</button>
      </div>

      <div className='container' >
        <div className='conttt' onDrop={handleDrop} onDragOver={handlingDrag}> 
            <h2>To Do..</h2>
            {
            message && message.map((item,index)=>{
                return(
                    <div className='content' onDragStart={handleStart} draggable="true" key={index}>
                        <button className='btnnnnnn'>E</button>
                        <span>{item}</span>
                        <button className='btnnnnnn' onClick={()=>crossHandeler(index)}>X</button>
                    </div>
                    
                )
            })
            }
        </div>

        <div className='conttt' onDrop={handleDrop} onDragOver={handlingDrag}>
            <h2>done</h2>
        </div>

        <div className='conttt' onDrop={handleDrop} onDragOver={handlingDrag}>
            <h2>doing</h2>
        </div>
      </div>
    </div>
  )
}

export default Dragale
