import React from 'react';
import Search from '../Search/Search';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        What's <span>New?</span>
      </div>

      <Search
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    </header>
  )
}

Header.propTypes = {
  searchQuery:  PropTypes.string
}

export default Header;
