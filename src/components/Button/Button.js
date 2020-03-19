import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string
}

export default Button;
