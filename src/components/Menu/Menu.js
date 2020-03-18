import React from 'react';
import Button from '../Button/Button';
import './Menu.css';

const Menu = (props) => {
  let categoryButtons;

  if (props.news !== null) {
    let categories = Object.keys(props.news)
    categoryButtons = categories.map(cat => (
      <Button
      id={cat}
      key={cat}
      category={cat}
      handleChange={props.handleChange}
      selectedMenu={props.selectedMenu}
      />
    ));
  } else {
    categoryButtons = (<p>Loading ...</p>);
  }

  return (
    <aside>
      {categoryButtons}
    </aside>
  )
}

export default Menu;
