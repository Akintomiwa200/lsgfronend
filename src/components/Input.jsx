import React from 'react';

const Input = ({
  type = 'text', // Default input type
  placeholder = '', // Default placeholder
  value, // Input value
  onChange, // Change handler
  width = 'w-full', // Default width
  padding = 'px-4 py-2', // Default padding
  border = 'border', // Default border
  borderRadius = 'rounded', // Default border radius
  focusEffect = 'focus:outline-none focus:ring-2 focus:ring-blue-500', // Default focus effect
  className = '', // Additional custom classes
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        ${width} 
        ${padding} 
        ${border} 
        ${borderRadius} 
        ${focusEffect} 
        ${className}
        transition duration-300 ease-in-out
      `}
    />
  );
};

export default Input;