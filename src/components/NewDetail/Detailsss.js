import React, { useState } from 'react';

function Detailsss() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState([]); 

    const submitHandeler = () => {
        setDetails([...details, { name, email }]); 
        setName('');
        setEmail('');
    };

    return (
        <div>
            <div>
                {details.length === 0 && (
                    <div>
                        <p>Name:</p>
                        <p>Email:</p>
                    </div>
                )}
                {details.map((item, index) => ( 
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                    </div>
                ))}
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={submitHandeler}>Submit</button>
            </div>
        </div>
    );
}

export default Detailsss;