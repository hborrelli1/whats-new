import React from 'react';

const Button = ({ category, handleChange, selectedMenu }) => {
  return (
    <button
      className={selectedMenu === category ? 'active' : ''}
      id={category}
      key={category}
      onClick={(event) => handleChange(event)}
    >
      {category}
    </button>
  )
}

export default Button;
