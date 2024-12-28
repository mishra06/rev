import React, { useState } from 'react'

function FormData2() {
    const Detailss= {
        firstname:{
            id:'firstname',
            label:'Firstname',
            type:'text',
            value:'',
            placeholder:'FirstName',
            isError:false,
            ErrorMsg:'firstname is required'
        },
        lastname:{
            id:'lastname',
            label:'lastname',
            type:'text',
            value:'',
            placeholder:'lastName',
            isError:false,
            ErrorMsg:'lastname is required'
        },
        email:{
            id:'email',
            label:'email',
            type:'email',
            value:'',
            placeholder:'email',
            isError:false,
            ErrorMsg:'email is required'
        },
        password:{
            id:'password',
            label:'Password',
            type:'text',
            value:'',
            placeholder:'Password',
            isError:false,
            ErrorMsg:'Password is required'
        },
        confpassword:{
            id:'confpassword',
            label:'confpassword',
            type:'text',
            value:'',
            placeholder:'ConfPassword',
            isError:false,
            ErrorMsg:'confpass is required'
        }
    }

    const [formData, setFormData] = useState(Detailss);
    const [password, setPassword] = useState(true);

    const inputHandeler=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        const copyData = {...formData};
        copyData[key].value = value;
        setFormData(copyData);
        isValidation();
    }

    const passwordHandeler=()=>{
        const copyData = {...formData};
        const pass = copyData['password'].value;
        const cpass = copyData['confpassword'].value;
        if(pass===cpass){
            setPassword(true);
        }else{
            setPassword(false);
        }
    }

    const isValidation=()=>{
        const copyData = {...formData};
        Object.keys(copyData).forEach(key=>{
            const obj = copyData[key];
            obj.isError = !obj.value?true:false;
            passwordHandeler();
        })
        setFormData(copyData);
    }

    const submitHandeler=(e)=>{
        e.preventDefault();
        isValidation();
    }


  return (
    <div className='container'>
      <div className='main'>
        <form onSubmit={submitHandeler}>
            {
                Object.keys(formData).map((key)=>{
                    const {label,id,type,value,placeholder,isError, ErrorMsg} = formData[key];
                    return(
                        <div className='form'>
                            <label>{label}</label>
                            <input 
                                type={type}
                                value={value}
                                id={id}
                                placeholder={placeholder}
                                onChange={inputHandeler}
                                className={isError && 'error-boundry'}
                                 />
                                 {isError && <span className='error'>{ErrorMsg}</span>}
                                 {key==='confpassword' && !password && <span className='error'>Password is not matched</span>}
                        </div>
                    )
                })
            }
            <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormData2
