import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "fruit", label: "Fruit" },
  { value: "vegetable", label: "Vegetable" },
  { value: "meat", label: "Meat" },
  // add more options as needed
];

const subOptions = {
  fruit: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    // add more fruit options as needed
  ],
  vegetable: [
    { value: "carrot", label: "Carrot" },
    { value: "broccoli", label: "Broccoli" },
    { value: "potato", label: "Potato" },
    // add more vegetable options as needed
  ],
  meat: [
    { value: "chicken", label: "Chicken" },
    { value: "beef", label: "Beef" },
    { value: "pork", label: "Pork" },
    // add more meat options as needed
  ],
};

const Another = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Select an item type"
      />
      <Select
        options={selectedOption ? subOptions[selectedOption.value] : []}
        value={selectedOption ? selectedOption.label : ""}
        isDisabled={!selectedOption}
        placeholder="Select an item"
      />
    </div>
  );
};

export default Another;