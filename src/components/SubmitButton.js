import React from "react";

const SubmitButton = ({text, func}) => {
  return (
    <button
      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={func}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
