import React, { useState } from "react";

const RadioOption = ({ label, id }) => {
  const [checked, setChecked] = useState();

  const handleChange = (event) => {
    setChecked("1");
    setChecked(event.target.id);
    
    
  };
  return (
    <div className="flex border items-center rounded-full pl-5 my-4">
      <input
        id={label}
        type="radio"
        onChange={handleChange}
        checked={checked === label}
        className="h-5 w-5 text-xl text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={label} className="w-full pl-5 p-3 font-bold pointer-events-none">
       <span className="">
       {label}
        </span> 
      </label>
    </div>
  );
};

export default RadioOption;
