import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchedTerm: ''
    }
  }

  updateSearchInput = (event) => {
    this.setState({ searchedTerm: event.target.value })
  }

  searchArticles = (event) => {
    event.preventDefault();
    this.props.setSearchQuery(this.state.searchedTerm)
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search for news article here"
          onChange={this.updateSearchInput}
        />
        <button
          onClick={this.searchArticles}
        >
          Search Now
        </button>
      </form>
    )
  }
}

export default Search;
