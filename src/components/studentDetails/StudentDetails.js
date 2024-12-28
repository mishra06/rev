import React, { useState } from 'react'
import "./index.css";

const StudentDetails = () => {

    const Detailss = [
        {
            id:"name",
            label:"Name",
            type:"text",
            placeHolder:"Name",
            buttonName:"Next"
        },
        {
            id:"email",
            label:"Email",
            type:"email",
            placeHolder:"Email....",
            buttonName:"Next"
        },
        {
            id:"phone",
            label:"Phone",
            type:"number",
            placeHolder:"Phone",
            buttonName:"Next"
        },
        {
            id:"password",
            label:"Password",
            type:"password",
            placeHolder:"Password....",
            buttonName:"Submit"
        }

    ]

    const [isSubmit, setIsSubmit] = useState(false);
    const [formData, setFormData] = useState(Detailss);
    const [index, setIndex] = useState(0);
    const [submitData, setSubmitData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            password: '' 
        }
    );

    const InputHandeler=(e)=>{
        const id = e.target.id
        const value = e.target.value
        const copyData = {...submitData}
        copyData[id]= value
        setSubmitData(copyData);
    }

    const SubmitHandeler = (e)=>{
        e.preventDefault()
        if(index<formData.length-1){
            setIndex((idx)=>idx+1);
        }
        else{
            setIsSubmit(true);
        }
    }

    const BackHandeler=(e)=>{
        e.preventDefault();
        setIndex((idx)=>idx-1);
    }

    return (
        <div className='contnrr'>
            <h1>Student details</h1>
            {
                !isSubmit && (
                    <form onSubmit={SubmitHandeler}>
                        {index!==0 && <a href="/" onClick={BackHandeler}>Back</a>}
                        <label>{formData[index].label}</label>
                        <input 
                            onChange={InputHandeler}
                            type={formData[index].type}
                            id={formData[index].id}
                            placeholder={formData[index].placeHolder}
                            value={submitData[formData[index].id]} />
                         <button type='submit'>{formData[index].buttonName}</button>   
                    </form>
                )
            }

            {isSubmit && (
                <div>
                    <h1>Success....!</h1>
                    <span>Name:{submitData.name}</span>
                    <span>Email:{submitData.email}</span>
                    <span>Phone:{submitData.phone}</span>
                    <span>Password:{submitData.password}</span>
                </div>
            )}
        </div>
    )
}

export default StudentDetails
