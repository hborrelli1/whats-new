import React from 'react';

const Button = ({ category, handleChange, selectedMenu }) => {
  const imgUrl = require(`../../icons/${category}.svg`);
  return (
    <button
      className={selectedMenu === category ? 'active' : ''}
      id={category}
      key={category}
      onClick={(event) => handleChange(event)}
    >
      <img src={imgUrl} alt={category + ' icon'} />
      {category}
    </button>
  )
}

export default Button;
