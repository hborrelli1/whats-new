import React from 'react';
import Search from '../Search/Search';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        What's <span>New?</span>
      </div>

      <Search
        new={props.news}
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    </header>
  )
}

export default Header;
