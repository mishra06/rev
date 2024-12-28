import React from 'react'

function Model2({submitHandeler,crossHandelr}) {

  const closeHandlr=(e)=>{
    if(e.target.className==='model2'){
      crossHandelr()
    }
  }
  return (
    <div className='model2' onClick={closeHandlr}>
      <div className='model2_inner'>
        <div>
          <button onClick={crossHandelr}>x</button>
        </div>
        <div>
          <p>hello moto</p>
        </div>
        <div>
          <button onClick={submitHandeler}>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default Model2
