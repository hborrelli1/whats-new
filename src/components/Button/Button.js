import React from 'react';

const Button = ({ category, changeCategory }) => {
  return (
    <button
      id={category}
      key={category}
      onChange={event => changeCategory(category)}
    >
      {category}
    </button>
  )
}

export default Button;
