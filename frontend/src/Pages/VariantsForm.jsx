import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const VariantsForm = () => {
  const [options, setOptions] = useState([]);

  // Function to add a new option
  const addOption = () => {
    setOptions([...options, { label: "", values: [""] }]);
  };

  // Function to handle option label change
  const handleOptionLabelChange = (index, newLabel) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, label: newLabel } : option
    );
    setOptions(updatedOptions);
  };

  // Function to handle value change for a specific option
  const handleValueChange = (optionIndex, valueIndex, newValue) => {
    const updatedOptions = options.map((option, i) =>
      i === optionIndex
        ? {
            ...option,
            values: option.values.map((value, vi) =>
              vi === valueIndex ? newValue : value
            ),
          }
        : option
    );
    setOptions(updatedOptions);
  };

  // Function to add a new value to a specific option
  const addValue = (index) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, values: [...option.values, ""] } : option
    );
    setOptions(updatedOptions);
  };

  // Function to remove an option
  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  // Function to remove a specific value from an option
  const removeValue = (optionIndex, valueIndex) => {
    const updatedOptions = options.map((option, i) =>
      i === optionIndex
        ? {
            ...option,
            values: option.values.filter((_, vi) => vi !== valueIndex),
          }
        : option
    );
    setOptions(updatedOptions);
  };

  return (
    <form>
      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <div className="flex gap-36">
      <div className="px-2"><h1>Options*</h1></div>
      <div className=""><h1>Values*</h1></div>
        </div> 
      {options.map((option, optionIndex) => (
      
        <div key={optionIndex} className=" p-4 mb-4 rounded-lg flex gap-5">
         
          {/* Option Label and Delete Option Button */}
          <div className="flex items-center border w-max">
            <input
              type="text"
              placeholder="Option Label"
              value={option.label}
              onChange={(e) =>
                handleOptionLabelChange(optionIndex, e.target.value)
              }
              className="p-2 w-1/3 rounded"
            />
            {/* <button
              type="button"
              onClick={() => removeOption(optionIndex)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete Option
            </button> */}
          </div>
          
          {/* Values in the same line with Delete buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            {option.values.map((value, valueIndex) => (
              <div key={valueIndex} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Value"
                  value={value}
                  onChange={(e) =>
                    handleValueChange(optionIndex, valueIndex, e.target.value)
                  }
                  className="border p-2 w-12 rounded"
                />
                <button
                  type="button"
                  onClick={() => removeValue(optionIndex, valueIndex)}
                  className="   py-1 rounded"
                >
                  <IoCloseSharp />
                </button>
              </div>
            ))}

            {/* Add Value Button for this Option */}
            <button
              type="button"
              onClick={() => addValue(optionIndex)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add Value
            </button>
          </div>
        </div>
      ))}

      {/* Add Option Button */}
      <button
        type="button"
        onClick={addOption}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Option
      </button>
    </form>
  );
};

export default VariantsForm;
