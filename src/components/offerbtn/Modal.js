import React from 'react'

const Modal = ({ crossHandeler , acceptedHandeler }) => {

    const closeHandeler = (e)=>{
        if(e.target.className==='modal_cont'){
            crossHandeler();
        }
    }

  return (
    <div className='modal_cont' onClick={closeHandeler}>
      <div className="modal_inner">
        <button 
        onClick={crossHandeler}
        className='inner_btn'>
            X
            </button>

        <div className="modal_line">
            <p>Button pressed </p>
        </div>
        <button 
            onClick={acceptedHandeler}
        className='modal_btn' >Accepted</button>
      </div>
    </div>
  )
}

export default Modal;
