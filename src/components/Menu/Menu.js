import React from 'react';
import Button from '../Button/Button';
import './Menu.css';

const Menu = (props) => {

  const categoryButtons = props.categories.map(cat => (
    <Button
      id={cat}
      key={cat}
      category={cat}
      onChange={event => props.onchange(event.id)}
    />
  ));

  return (
    <nav>
      {categoryButtons}
    </nav>
  )
}

export default Menu;
