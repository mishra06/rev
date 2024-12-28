import React, { useState } from 'react'
import "./index.css"

function Student3() {

  const Detailss= [
    {
      id:'name',
      type:'text',
      placeholder:'Name...',
      label:'Name',
      buttonType:'Next'
    },
    {
      id:'email',
      type:'email',
      placeholder:'Email...',
      label:'Email',
      buttonType:'Next'
    },
    {
      id:'phone',
      type:'number',
      placeholder:'Phone...',
      label:'Phone',
      buttonType:'Next'
    },
    {
      id:'dob',
      type:'date',
      placeholder:'DOB',
      label:'DOB',
      buttonType:'SUBMIT'
    }
  ];

  const [formData, setFormData] = useState(Detailss);
  const [submitData, setSubmitData] = useState(
    {
      name:'',
      email:'',
      phone:'',
      dob:''
    }
  );

  const [isSubmit, setIsSubmit]= useState(false);
  const [index, setIndex] = useState(0);

  const inputHandeler=(e)=>{
    const key = e.target.id;
    const value = e.target.value;
    const copyData = {...submitData};
    copyData[key] = value;
    setSubmitData(copyData);
  }

  const SubmitHandeler=(e)=>{
    e.preventDefault();
    if(index<formData.length-1){
      setIndex((idx) =>idx+1)
    }
    else{
      setIsSubmit(true);
    }
  }
  return (
    <div className='containerrr'>
      <div className='mainss'>
        {!isSubmit && (
          <form className='formm'  onSubmit={SubmitHandeler}>
            <div className='formss'>
              <label >{formData[index].label}</label>
              <input 
              required
                type={formData[index].type}
                placeholder={formData[index].placeholder}
                id={formData[index].id}
                value={submitData[formData[index].id]}
                onChange={inputHandeler}
                />
            </div>
            <div>
               <button type='submit'>{formData[index].buttonType}</button>
            </div>
          </form>
        )}

        {isSubmit && (
          <div>
            <p>Name: {submitData.name}</p>
            <p>Email: {submitData.email}</p>
            <p>Phone: {submitData.phone}</p>
            <p>DOB: {submitData.dob}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Student3
