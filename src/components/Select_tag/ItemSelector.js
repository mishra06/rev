import React, { useState } from "react";

const ItemSelector = () => {
  const [selectedItemType, setSelectedItemType] = useState("");

  
  const itemTypes = [
    {
      name: "Fruit",
      options: ["Apple", "Banana", "Orange"],
    },
    {
      name: "Vegetable",
      options: ["Carrot", "Broccoli", "Potato"],
    },
  ];

  const Change = (e) => {
    setSelectedItemType(e.target.value);
  };


  return (
    <div>
      
      <select value={selectedItemType} onChange={Change}>
        <option value="">Select an item type</option>
        {itemTypes.map((type,index) => (
          <option key={index} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>

      
      <select disabled={!selectedItemType}>
        <option value="">Select an item first</option>
        {selectedItemType &&
          itemTypes
            .find((type) => type.name === selectedItemType)
            .options.map((option) => (
              <option key={option}>{option}</option>
            ))}
      </select>
    </div>
  );
};

export default ItemSelector;