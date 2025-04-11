import React from 'react';

const Button = ({
  children,
  width = 'auto', // Default width
  backgroundColor = 'bg-blue-500', // Default background color
  textColor = 'text-white', // Default text color
  padding = 'px-4 py-2', // Default padding
  borderRadius = 'rounded', // Default border radius
  hoverEffect = 'hover:bg-blue-600', // Default hover effect
  onClick, // Click handler
  className = '', 
}) => {
  return (
    <button
      className={`
        ${width} 
        ${backgroundColor} 
        ${textColor} 
        ${padding} 
        ${borderRadius} 
        ${hoverEffect} 
        ${className}
        cursor-pointer
        transition duration-300 ease-in-out
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;