import React, { useState } from 'react';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const backd =()=>{
        setStep(step-1);
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    return (
        <div>
            {step === 1 && (
                <div>
                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    <button onClick={nextStep}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <p onClick={backd}>back</p>
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <button onClick={nextStep}>Next</button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <p onClick={backd}>back</p>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    <button onClick={nextStep}>Submit</button>
                </div>
            )}
            {step === 4 && (
                <div>
                    <p>Thank you for submitting the form!</p>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>DOB: {formData.dob}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
