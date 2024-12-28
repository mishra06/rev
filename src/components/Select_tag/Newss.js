import React, { useState } from 'react'

const Newss = () => {

  const [items, setItems] = useState("");

  const ItemTypes = [
    {
      name:"Fruits",
      options:['banana','apple','grapes'],
    },
    {
      name:'vegetables',
      options:['brinjal','pea','onion'],
    }
  ];

  function changeHandeler(e){
    setItems(e.target.value);
  }

  return (
    <div>
      <select value={items} onChange={changeHandeler}>
        <option value="">select item's</option>
        {
          ItemTypes.map((item,index)=>(
            <option key={index} value={item.name}>{item.name}</option>
          ))
        }
      </select>

      <select disabled={!items}>
        <option value="">select item first</option>
        {
          items && 
          ItemTypes.find((item)=> item.name===items)
          .options.map((option)=>(
            <option key={option}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Newss
