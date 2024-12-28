import React, { useState } from 'react';
import "./formData.css";

function FormData() {

    const defaultvalue = {
        firstName: {
            id: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name...',
            value: '',
            isError: false,
            errorMsg: "First Name can't be empty"
          },
          lastName: {
            id: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name...',
            value: '',
            isError: false,
            errorMsg: "Last Name can't be empty"
          },
        email : {
            id:'email',
            placeholder:"Email",
            label:"Email",
            type:"email",
            value:'',
            isError:false,
            errorMsg:"Email is required"
        },
        password : {
            id:'password',
            placeholder:"Password",
            label:"Password",
            type:"text",
            value:'',
            isError:false,
            errorMsg:"Password is required"
        },
        confpassword : {
            id:'confpassword',
            placeholder:"Conf Password",
            label:"Conf-Password",
            type:"text",
            value:'',
            isError:false,
            errorMsg:"Conf Password is required"
        },
    }

    const [formData, setFormData] = useState(defaultvalue);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handelInput=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        const copyData = {...formData};
        copyData[key].value = value;
        setFormData(copyData);
        isValidForm()
    }

    const PasswordMatch=()=>{
        const copyData = {...formData};
        const pass = copyData['password'].value;
        const cnfpass = copyData['confpassword'].value;
        if(pass !==cnfpass){
            setPasswordMatch(false);
        }
        else {
            setPasswordMatch(true);
        }
    }

    const isValidForm=()=>{
        const copyData = {...formData};
        Object.keys(copyData).forEach(key =>{
            const obj = copyData[key];
            obj.isError = !obj.value ? true :false;
            PasswordMatch();
        })
        setFormData(copyData);
        
    }

    const SubmitHandelr=(e)=>{
        e.preventDefault();
        isValidForm();
    }
  return (
    <div className='main'>
      <div className='container'>
        <form onSubmit={SubmitHandelr}>
            {Object.keys(formData).map((key)=>{
                const {id,value,placeholder,isError,errorMsg,type,label} = formData[key];
                return(
                    <div className='form'>
                        <label>{label}</label>
                        <input
                            onChange={handelInput}
                            type={type}
                            id={id}
                            placeholder={placeholder}
                            value={value}
                            className={
                                isError && 'error-border'
                              }
                        />
                        {isError && <span className='error'>{errorMsg}</span>}
                        {key==='confpassword' && !passwordMatch &&
                            <span className='error'>Password does't match</span>
                            }  
                    </div>   
                )
            })}
            <div className='form'>
            <button type='submit'>Submit</button> 
            </div>
        </form>
      </div>
    </div>
  )
}

export default FormData
