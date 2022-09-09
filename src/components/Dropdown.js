import React, { useState } from "react";

const Dropdown = ({ placeholder, productsArray }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="relative w-full border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm p-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {placeholder}
        <svg
          className="ml-2 w-4 h-4 absolute top-50 right-0 mr-3"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {toggle === true ? (
        <>
          <div
            id="dropdownDefaultCheckbox"
            className=" z-10 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                
                  {productsArray.map((item, index) => {
                    return (
                        <div className="flex items-center" key={index}>
                        <input
                          id="checkbox-item-1"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                        {item}
                        </label>
                        </div>
                    );
                  })}
                
              </li>
              <li></li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dropdown;
