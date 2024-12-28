// import React, { useRef, useState } from 'react'

// const Todo = () => {

//     const [list, setList] = useState([]);

//     const inputRef = useRef();


//     function submitHandeler(){
//         const input = inputRef.current.value;
//         if(input){
//             setList([...list, input]);
//             inputRef.current.value = '';
//         }
//     }

//    const removeItem=(index)=>{
//         setList((prev)=>{
//             const updt = [...prev];
//             updt.splice(index,1);
//             return updt;
//         })

//     }

   
//   return (
//     <div>
//       <div className="input_container">
//         <input ref={inputRef} type="text" />
//         <button onClick={submitHandeler}>Add</button>
//       </div>

//       <div className="list_container">
//         {list.map((item, index) => (
//           <div key={index} className="list_item">
//             {item}
//             <button onClick={() => removeItem(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Todo

import React, { useRef, useState } from 'react';

const Todo = () => {
    const [list, setList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // Track the index of the item being edited
    const inputRef = useRef();

    const submitHandler = () => {
        const inputValue = inputRef.current.value.trim(); // Get and trim input value
        if (inputValue) {
            if (editingIndex !== null) {
                // If editing, update the existing item
                setList((prev) => {
                    const updatedList = [...prev];
                    updatedList[editingIndex] = inputValue; // Update the item at editingIndex
                    return updatedList;
                });
                setEditingIndex(null); // Reset editing index
            } else {
                // If not editing, add a new item
                setList((prev) => [...prev, inputValue]);
            }
            inputRef.current.value = ''; // Clear input field
        }
    };

    const removeItem = (index) => {
        setList((prev) => prev.filter((_, i) => i !== index)); // Remove item by index
    };

    const startEditing = (index) => {
        setEditingIndex(index); // Set the index of the item to be edited
        inputRef.current.value = list[index]; // Populate input with the item to be edited
    };

    return (
        <div>
            <div className="input_container">
                <input ref={inputRef} type="text" />
                <button onClick={submitHandler}>
                    {editingIndex !== null ? 'Save' : 'Add'} {/* Change button text based on editing state */}
                </button>
            </div>

            {/* <input type="date" name="" id="" /> */}

            <div className="list_container">
                {list.map((item, index) => (
                    <div key={index} className="list_item">
                        {item}
                        <button onClick={() => startEditing(index)}>Edit</button> {/* Edit button */}
                        <button onClick={() => removeItem(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;